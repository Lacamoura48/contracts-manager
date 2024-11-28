import {
    Document,
    Font,
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
        flexDirection: 'rtl',
        fontFamily: 'rubik',
        padding: 30,
        fontSize: 13,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 36,
        textAlign: 'center',
    },
    container: {
        marginBottom: 12,
        textAlign: 'right',
    },
    date: {
        fontSize: 10,
        color: 'gray',
    },
    description: {
        fontSize: 13,
    },
});

// PDF Document Component
const ActivitiesPDFDocument = ({ activities }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.title}>سجل الأنشطة</Text>
            <View>
                {activities.map((act) => {
                    const actDate = new Date(act.created_at);
                    const actDay = actDate.toLocaleString('ar-MA', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    });
                    const actHour = actDate.toLocaleString('ar-MA', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                    });
                    return (
                        <View style={styles.container} key={act.id}>
                            <Text style={styles.date}>
                                {actDay} | {actHour}
                            </Text>
                            <Text style={styles.description}>
                                {act.description}
                            </Text>
                        </View>
                    );
                })}
            </View>
        </Page>
    </Document>
);

export default function ActivitiesPDF({ activities, currentMonth }) {
    const openPdfInNewTab = async () => {
        const doc = (
            <ActivitiesPDFDocument
                activities={activities}
                currentMonth={currentMonth}
            />
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
