import { formatMoroccanDate } from '@/utils/functions';
import {
    Document,
    Font,
    Image,
    Page,
    pdf,
    StyleSheet,
    Text,
    View,
} from '@react-pdf/renderer';
import { FileDown } from 'lucide-react';
import rubikBold from '../../../assets/fonts/Rubik-Bold.ttf';
import rubik from '../../../assets/fonts/Rubik-Regular.ttf';

// Example of importing custom Arabic fonts (Google Fonts)
Font.register({
    family: 'rubik',
    fonts: [
        { src: rubik, fontWeight: 'normal' },
        { src: rubikBold, fontWeight: 'bold' },
    ],
});

// Styles for the PDF
const styles = StyleSheet.create({
    page: {
        flexDirection: 'rtl', // RTL layout
        fontFamily: 'rubik',
        padding: 30,
        backgroundColor: '#f9f9f9',
        fontSize: 13,
    },
    bondsGrid: {
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        gap: 5,
    },
    bondCard: {
        width: 265,
        backgroundColor: 'rgb(220,220,240)',
        borderRadius: 8,
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 14,
        fontSize: 18,
    },
    smallInfo: {
        fontWeight: 'light',
        fontSize: 11,
        textAlign: 'center',
    },
    textRight: {
        textAlign: 'right',
    },
    mb: {
        marginBottom: 14,
    },
    padwhiteBg: {
        borderRadius: 6,
        padding: 3,
        backgroundColor: 'white',
    },
    maxh: {
        maxHeight: 200,
    },
    postableNo: {
        borderRadius: 999,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'beige',
        color: 'brown',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

// PDF Document Component
const BondsPDFDocument = ({ bonds, currentMonth }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.title}>
                دفعات شهر{' '}
                {currentMonth ||
                    new Date().getMonth() + 1 + '-' + new Date().getFullYear()}
            </Text>
            <View style={[styles.bondsGrid]}>
                {bonds.map((bond) => {
                    return (
                        <View key={bond.payement_date} style={styles.bondCard}>
                            <Text style={[styles.mb, styles.smallInfo]}>
                                {formatMoroccanDate(
                                    new Date(bond.payement_date),
                                )}
                            </Text>
                            <View style={[styles.mb, styles.maxh]}>
                                {bond.proof_image ? (
                                    <Image
                                        style={styles.bondProof}
                                        src={bond.proof_image}
                                    />
                                ) : (
                                    <Text
                                        style={[
                                            styles.smallInfo,
                                            styles.padwhiteBg,
                                        ]}
                                    >
                                        بدون صورة إثبات
                                    </Text>
                                )}
                            </View>
                            {!bond.postable && (
                                <Text style={styles.postableNo}>شيك ضمان</Text>
                            )}
                            <Text style={styles.smallInfo}>
                                {bond.contract.client.full_name} |{' '}
                                {bond.contract.client.phone}
                            </Text>
                        </View>
                    );
                })}
            </View>
        </Page>
    </Document>
);

export default function BondsPDF({ bonds, currentMonth }) {
    const openPdfInNewTab = async () => {
        const doc = (
            <BondsPDFDocument bonds={bonds} currentMonth={currentMonth} />
        ); // Your PDF document
        const blob = await pdf(doc).toBlob(); // Generate the PDF blob
        const url = URL.createObjectURL(blob); // Create a URL for the blob
        window.open(url, '_blank'); // Open the URL in a new tab
    };
    return (
        <button
            onClick={openPdfInNewTab}
            className="relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
        >
            <FileDown className="ml-2 mr-1 inline" />
            فتح PDF
        </button>
    );
}
