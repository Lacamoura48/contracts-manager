import { formatMoroccanDate, numberToArabicTyping } from '@/utils/functions';
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
import RubikBold from '../../../assets/fonts/Rubik-Bold.ttf';
import RubikRegular from '../../../assets/fonts/Rubik-Regular.ttf';

Font.register({
    family: 'rubik',
    fonts: [
        { src: RubikRegular, fontWeight: 'normal' },
        { src: RubikBold, fontWeight: 'bold' },
    ],
});
const styles = StyleSheet.create({
    page: {
        padding: 30,
        flexDirection: 'rtl',
        textAlign: 'right',
        fontFamily: 'rubik',
        fontSize: 9,
        lineHeight: 1.5,
    },
    topLeft: {
        position: 'absolute',
        top: 70,
        left: 30,
    },
    topRight: {
        position: 'absolute',
        top: 70,
        right: 30,
    },
    signatureCard: {
        border: 1,
        borderColor: '#aaa',
        borderRadius: 6,
        padding: 10,
        flex: 1,
    },
    textMd: {
        fontSize: 12,
    },
    bigTitle: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 12,
    },
    itemsCenter: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    signatureImage: {
        maxWidth: 80,
        maxHeight: 80,
        marginHorizontal: 'auto',
    },
    bold: {
        fontWeight: 'bold',
    },
    emptyTitle: {
        fontSize: 22,
        color: 'rgb(180,180,230)',
    },
    intro: {
        fontWeight: 'bold',
        fontSize: 12,
        textDecoration: 'underline',
        marginBottom: 12,
    },
    textCenter: {
        textAlign: 'center',
    },
    smallMb: {
        marginBottom: 12,
    },
    esmallMb: {
        marginBottom: 6,
    },
    eesmallMb: {
        marginBottom: 3,
    },
    flexSmallGap: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    },
    flexBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textLg: {
        fontSize: 16,
        marginTop: 14,
        marginBottom: 6,
    },
    padwhiteBg: {
        borderRadius: 6,
        padding: 3,
        backgroundColor: 'white',
    },
    emptyCard: {
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    squareCard: {
        backgroundColor: 'rgb(220,220,240)',
        borderRadius: 8,
        flex: 1,
        padding: 10,
    },
    bondsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
    },
    bondCard: {
        width: 265,
        backgroundColor: 'rgb(220,220,240)',
        borderRadius: 8,
        padding: 10,
    },
    smallText: {
        fontSize: 8,
        gap: 8,
    },
    fixedWidth: {
        width: 60,
    },
});

const orderArabic = [
    'الأولى',
    'الثانية',
    'الثالثة',
    'الرابعة',
    'الخامسة',
    'السادسة',
    'السابعة',
    'الثامنة',
    'التاسعة',
    'العاشرة',
    'الحادية عشرة',
    'الثانية عشرة',
];

const MyDocument = ({ contract, terms }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View
                style={[
                    styles.topLeft,
                    styles.signatureCard,
                    styles.flexSmallGap,
                    styles.itemsCenter,
                ]}
            >
                <Text>{formatMoroccanDate(new Date(contract.created_at))}</Text>
                <Text style={styles.bold}>: انه في تاريخ</Text>
            </View>
            <View
                style={[
                    styles.topRight,
                    styles.signatureCard,
                    styles.flexSmallGap,
                    styles.itemsCenter,
                ]}
            >
                <Text>{contract.code}</Text>
                <Text style={styles.bold}>: الرقم التسلسلي للعقد </Text>
            </View>
            <Text style={styles.bigTitle}>عقد تصنيع وتوريد اثاث</Text>
            <Text style={[styles.intro, styles.textCenter]}>مقدمة</Text>
            <Text style={[styles.textCenter, styles.smallMb]}>
                وبعون من الله تعالى تم الاتفاق بين كل من
            </Text>
            <View style={[styles.flexSmallGap, styles.esmallMb]}>
                <View style={styles.squareCard}>
                    <Text style={[styles.intro]}>الطرف الثاني</Text>
                    <View
                        style={[
                            styles.flexSmallGap,
                            styles.itemsCenter,
                            styles.esmallMb,
                        ]}
                    >
                        <Text style={styles.padwhiteBg}>
                            {contract.client.full_name}
                        </Text>
                        <Text style={styles.fixedWidth}>الاسم الكامل</Text>
                    </View>

                    <View
                        style={[
                            styles.flexSmallGap,
                            styles.itemsCenter,
                            styles.esmallMb,
                        ]}
                    >
                        <Text style={styles.padwhiteBg}>
                            {contract.client.phone}
                        </Text>
                        <Text style={[styles.esmallMb, styles.fixedWidth]}>
                            الهاتف
                        </Text>
                    </View>
                    <View
                        style={[
                            styles.flexSmallGap,
                            styles.itemsCenter,
                            styles.esmallMb,
                        ]}
                    >
                        <Text style={styles.padwhiteBg}>
                            {contract.client.id_code}
                        </Text>
                        <Text style={[styles.esmallMb, styles.fixedWidth]}>
                            رقم الهوية
                        </Text>
                    </View>

                    <View
                        style={[
                            styles.flexSmallGap,
                            styles.itemsCenter,
                            styles.esmallMb,
                        ]}
                    >
                        <Text style={styles.padwhiteBg}>
                            {contract.client.email}
                        </Text>
                        <Text style={styles.fixedWidth}>الايميل</Text>
                    </View>
                </View>
                <View style={styles.squareCard}>
                    <Text style={[styles.intro]}>الطرف الأول</Text>
                    <Text style={[styles.esmallMb, styles.textCenter]}>
                        {contract.user.company}
                    </Text>
                    <Text style={[styles.esmallMb, styles.textCenter]}>
                        رخصة رقم {contract.user.code}
                    </Text>
                    <Text style={[styles.esmallMb, styles.textCenter]}>
                        هاتف: {contract.user.phone}
                    </Text>
                    <Text style={[styles.esmallMb, styles.textCenter]}>
                        العنوان: {contract.user.address}
                    </Text>
                </View>
            </View>
            <Text style={styles.intro}>تمهيد</Text>
            <Text style={styles.smallMb}>
                فإنه ولما كان الطرف الثاني يرغب في تصنيع وتوريد أعمال أثاث مغربي
                وحيت أن الطرف الاول مختص في هذا النوع من الأعمال فقد اتفق
                الطرفان على ما يلي
            </Text>
            <View style={styles.squareCard}>
                <Text style={[styles.intro, styles.textLg]}>البند الأول</Text>
                <Text>
                    تعتبر المقدمة وموضوع العقد جزء لا يتجزأ من هذا العقد
                </Text>
                <Text style={[styles.intro, styles.textLg]}>البند الثاني</Text>
                <Text>
                    يتعهد الطرف الاول بتوريد الأغراض حسب المتفق عليه في العقد
                </Text>
                <Text style={[styles.intro, styles.textLg]}>
                    البند الثالث: مدة الإنجاز
                </Text>
                <Text>توعد الطرف الأول بإنجاز الأعمال وتسليمها خلال</Text>
                <View
                    style={[
                        styles.padwhiteBg,
                        styles.flexSmallGap,
                        { flexDirection: 'row-reverse' },
                    ]}
                >
                    <Text>{contract.work_duration}</Text>
                    <Text>
                        {+contract.work_duration > 10 ? 'يوم عمل' : 'أيام عمل'}
                    </Text>
                </View>
                <Text>
                    ابتداء من تاريخ أول دفعة الذي سيتم ذكره في البند الخامس
                </Text>
                <Text style={[styles.intro, styles.textLg]}>
                    البند الرابع: قيمة العقد
                </Text>
                <Text>
                    اتفق الطرفان على أن يقوم الطرف الاول بتصنيع وتوريد الأثاث
                    طبقا للأسعار التالية ذكرها حسب ما هو موضح تفصيلا في عرض
                    السعر بمبلغ إجمالى وقدره
                </Text>
                {
                    <Text
                        style={[
                            styles.padwhiteBg,
                            styles.esmallMb,
                            styles.textMd,
                        ]}
                    >
                        {numberToArabicTyping(
                            Math.round(
                                parseFloat(contract.bonds_sum_amount).toFixed(
                                    2,
                                ),
                            ),
                        )}
                    </Text>
                }
                <Text>
                    على ان يلتزم الطرف الثاني بتواريخ الدفع المذكورة في العقد
                    وفي حال تخلفه عن السداد في التواريخ المذكورة سلفا يحق للطرف
                    الأول اتخاد كافة الإجراءات القانونية التي تضمن حقه
                </Text>
                <Text style={[styles.intro, styles.textLg]}>
                    البند الخامس: الدفعات
                </Text>
                <Text>
                    تم الاتفاق بين الطرفين أن تتم المحاسبة ودفع المبلغ على عدد
                </Text>
                <View
                    style={[
                        styles.padwhiteBg,
                        styles.flexSmallGap,
                        { flexDirection: 'row-reverse' },
                    ]}
                >
                    <Text>{contract.bonds_count}</Text>
                    <Text>{+contract.bonds_count > 10 ? 'دفعة' : 'دفعات'}</Text>
                </View>
                <Text>دفعات حسب جدول التواريخ التالية ذكرها</Text>
            </View>
        </Page>
        <Page size="A4" style={styles.page}>
            <View
                style={[
                    styles.bondsGrid,
                    styles.esmallMb,
                    { flexDirection: 'row-reverse' },
                ]}
            >
                {[...Array(12).keys()].map((key) => {
                    const bond = contract.bonds[key];
                    if (!bond) {
                        return (
                            <View
                                key={key}
                                style={[styles.bondCard, styles.emptyCard]}
                            >
                                <Text style={styles.emptyTitle}>فارغ</Text>
                            </View>
                        );
                    }
                    return (
                        <View key={key} style={styles.bondCard}>
                            <Text style={[styles.intro, { marginBottom: 6 }]}>
                                الدفعة {orderArabic[key]}
                            </Text>
                            <View>
                                <View
                                    style={[
                                        styles.flexSmallGap,
                                        styles.itemsCenter,
                                        styles.eesmallMb,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.padwhiteBg,
                                            { flex: 1, fontSize: 8 },
                                        ]}
                                    >
                                        {numberToArabicTyping(
                                            parseFloat(bond.amount),
                                        )}
                                    </Text>
                                    <Text style={{ width: 28 }}>قدرها </Text>
                                </View>
                                <View
                                    style={[
                                        styles.flexSmallGap,
                                        styles.itemsCenter,
                                        styles.esmallMb,
                                    ]}
                                >
                                    <Text
                                        style={[styles.padwhiteBg, { flex: 1 }]}
                                    >
                                        {parseFloat(bond.amount).toFixed(2)}
                                    </Text>
                                    <Text>بالأرقام</Text>
                                </View>
                                <View
                                    style={[
                                        styles.flexSmallGap,
                                        styles.itemsCenter,
                                    ]}
                                >
                                    <Text
                                        style={[styles.padwhiteBg, { flex: 1 }]}
                                    >
                                        {formatMoroccanDate(
                                            new Date(bond.payement_date),
                                        )}
                                    </Text>
                                    <Text style={{ width: 28 }}>بتاريخ</Text>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>
        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.squareCard}>
                <Text style={[styles.intro, styles.textLg]}>
                    البند السادس: المواصفات
                </Text>
                <Text style={styles.intro}>نوع الاسفنج</Text>
                <Text style={styles.smallMb}>
                    اتفق الطرفان استخدام الاسفنج طبق للمواصفات التالية
                </Text>
                <View
                    style={[
                        styles.smallMb,
                        { gap: 6, flexDirection: 'row-reverse' },
                    ]}
                >
                    <Text style={styles.padwhiteBg}>
                        {contract.intensity} الكثافة
                    </Text>
                    <Text style={styles.padwhiteBg}>{contract.width} عرض</Text>
                    <Text style={styles.padwhiteBg}>
                        {contract.height} ارتفاع
                    </Text>
                </View>
                <Text style={styles.intro}>نوع القماش والخياطة</Text>
                <Text style={styles.smallMb}>
                    اتفق الطرفان استخدام القماش الذي تم اختیاره وتم ارسال الصور
                    عبر منصة واتساب وتم الموافقة عليها
                </Text>
                <Text style={styles.intro}>شكل وتصميم الخشب</Text>
                <Text style={styles.smallMb}>
                    اتفق الطرفان على التصميم حسب ما تم اخياره من النماذج
                    المتوفرة بالمعرض والتي تم ارسال صورها عبر منصة واتساب وتم
                    الموافقة عليها
                </Text>
                {contract.files?.length > 0 && (
                    <>
                        <Text style={styles.intro}>ملاحظات</Text>
                        <View style={[styles.padwhiteBg, styles.smallMb]}>
                            {contract.files.map((file, index) => {
                                return <Text key={index}>{file.title}</Text>;
                            })}
                        </View>
                    </>
                )}
                <Text style={styles.intro}>تنویه</Text>
                <Text style={{ fontSize: 10 }}>
                    تعتبر المحادثات بين الطرفين عبر منصة واتساب والتي يوضح فيها
                    الطرف الأول للطرف الثاني تفاصيل عن الاعمال المتفق عليها جزءا
                    لا يتجزأ من العقد حيت انها توضح وتبين بوضوح ما تم ذكره
                    بالعقد اما عن طريق فيديوهات او صور لما تم اختياره والموافقة
                    عليه
                </Text>
            </View>
        </Page>
        <Page style={styles.page}>
            <View style={[styles.squareCard, styles.smallMb]}>
                <Text style={[styles.intro]}>الشروط والاحكام</Text>
                <View>
                    {terms.map((term) => {
                        return (
                            <Text
                                style={[styles.eesmallMb, styles.smallText]}
                                key={term.id}
                            >
                                {term.terms}
                            </Text>
                        );
                    })}
                </View>

                <Text style={[styles.intro, styles.textLg]}>
                    البند السابع: الاقرارات
                </Text>
                <Text>
                    اقر الطرفان بانهما اطلعا ووافقا على بنود هذا العقد وحرر من
                    نسختين بعد ان تم توقيعه من الطرفين
                </Text>
            </View>
            <View style={styles.bondsGrid}>
                <View style={styles.signatureCard}>
                    <Text style={[styles.intro]}>الطرف الثانى</Text>
                    {contract.signature && (
                        <Image
                            style={styles.signatureImage}
                            src={contract.signature}
                        />
                    )}
                </View>
                <View style={styles.signatureCard}>
                    <Text style={[styles.intro]}>الطرف الأول</Text>
                    {contract.user.signature && (
                        <Image
                            style={styles.signatureImage}
                            src={contract.user.signature}
                        />
                    )}
                </View>
            </View>
        </Page>
    </Document>
);

const ContractPDF = ({ contract, terms }) => {
    const openPdfInNewTab = async () => {
        const doc = <MyDocument terms={terms} contract={contract} />; // Your PDF document
        const blob = await pdf(doc).toBlob(); // Generate the PDF blob
        const url = URL.createObjectURL(blob); // Create a URL for the blob
        window.open(url, '_blank'); // Open the URL in a new tab
    };

    return (
        <button
            onClick={openPdfInNewTab}
            className="relative top-1 w-full max-w-xl rounded-xl bg-gray-200 py-3 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
        >
            <FileDown className="ml-2 mr-1 inline" />
            رؤية العقد PDF
        </button>
    );
};

export default ContractPDF;
