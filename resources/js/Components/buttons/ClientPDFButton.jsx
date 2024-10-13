import { formatMoroccanDate } from '@/utils/functions';
import {
    Document,
    Font,
    Image,
    Page,
    PDFDownloadLink,
    StyleSheet,
    Text,
    View,
} from '@react-pdf/renderer';
import { FileDown, Loader2 } from 'lucide-react';
import rubik from '../../assets/fonts/rubik.ttf';

// Example of importing custom Arabic fonts (Google Fonts)
Font.register({
    family: 'rubik',
    src: rubik,
});

// Styles for the PDF
const styles = StyleSheet.create({
    page: {
        flexDirection: 'rtl', // RTL layout
        fontFamily: 'rubik',
        padding: 40,
        backgroundColor: '#f9f9f9',
    },
    section: {
        marginBottom: 20,
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'right',
        fontFamily: 'rubik',
        color: '#333',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        textAlign: 'right',
        color: '#444',
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    value: {
        fontSize: 12,
        textAlign: 'right',
        color: '#555',
        marginBottom: 10,
    },
    imageSection: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginTop: 10,
    },
    image: {
        width: 200,
        height: 130,
        marginVertical: 10,
        border: '1px solid #ccc',
        borderRadius: 5,
        objectFit: 'contain',
    },
    footer: {
        fontSize: 10,
        color: '#999',
        textAlign: 'center',
        marginTop: 40,
        borderTop: '1px solid #ccc',
        paddingTop: 10,
    },
});

// PDF Document Component
const ClientPDFDocument = ({ client }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Client Information */}
            <View style={styles.section}>
                <Text style={styles.heading}>
                    {client.full_name} معلومات العميل
                </Text>
                <Text style={styles.text}>
                    أضيف يوم: {formatMoroccanDate(new Date(client.created_at))}
                </Text>
                <Text style={styles.text}>رقم الهاتف: {client.phone}</Text>
            </View>

            {/* WhatsApp, ID, and Wife's Information */}
            <View style={styles.section}>
                <Text style={styles.heading}>تفاصيل إضافية</Text>
                <Text style={styles.label}>رقم الواتساب</Text>
                <Text style={styles.value}>{client.phone2 || 'غير متوفر'}</Text>

                <Text style={styles.label}>رقم الهوية</Text>
                <Text style={styles.value}>{client.id_code}</Text>

                <Text style={styles.label}>اسم الزوجة</Text>
                <Text style={styles.value}>{client.wife_name}</Text>

                <Text style={styles.label}>هاتف الزوجة</Text>
                <Text style={styles.value}>{client.wife_phone}</Text>

                <Text style={styles.label}>العنوان</Text>
                <Text style={styles.value}>{client.address}</Text>
            </View>

            {/* ID Photos */}
            <View style={styles.section}>
                <Text style={styles.heading}>صور الهوية (وجه وظهر)</Text>
                <View style={styles.imageSection}>
                    {client.id_photo_front ? (
                        <Image
                            style={styles.image}
                            src={client.id_photo_front}
                        />
                    ) : (
                        <Text style={styles.text}>
                            صورة الهوية (وجه) غير متوفرة
                        </Text>
                    )}
                    {client.id_photo_back ? (
                        <Image
                            style={styles.image}
                            src={client.id_photo_back}
                        />
                    ) : (
                        <Text style={styles.text}>
                            صورة الهوية (ظهر) غير متوفرة
                        </Text>
                    )}
                </View>
            </View>

            {/* Footer */}
            <Text style={styles.footer}>
                تم إنشاء هذا الملف بواسطة النظام بتاريخ{' '}
                {new Date().toLocaleDateString()}
            </Text>
        </Page>
    </Document>
);

export default function ClientPDFButton({ client }) {
    return (
        <PDFDownloadLink
            document={<ClientPDFDocument client={client} />}
            fileName={`معلومات_العميل_${client.full_name}.pdf`}
        >
            {({ blob, url, loading, error }) => (
                <button className="relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white">
                    {loading ? (
                        <Loader2 className="ml-2 mr-1 inline animate-spin" />
                    ) : (
                        <FileDown className="ml-2 mr-1 inline" />
                    )}
                    تحميل PDF
                </button>
            )}
        </PDFDownloadLink>
        //     <button
        //     onClick={generateClientPDF}
        //     className="relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
        // >
        //     <FileDown className="ml-2 mr-1 inline" />
        //     تحميل PDF
        // </button>
    );
}
