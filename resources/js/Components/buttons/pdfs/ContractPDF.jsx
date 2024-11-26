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
import { File, ScrollText } from 'lucide-react';
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
        paddingVertical: 12,
        paddingHorizontal: 12,
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
        padding: 5,
        flex: 1,
        width: 120,
        maxHeight: 80,
    },
    signatureImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        marginHorizontal: 'auto',
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
        marginBottom: 6,
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
    squareCardnoflex: {
        backgroundColor: 'rgb(220,220,240)',
        borderRadius: 8,
        padding: 10,
    },
    bondsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
    },
    bondCard: {
        width: 280,
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
    tamhimText: { width: 350, marginHorizontal: 'auto', textAlign: 'center' },
    smallLineHeight: {
        lineHeight: 1.1,
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
    mb: {
        marginBottom: 14,
    },
    maxh: {
        maxHeight: 200,
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

const MyDocument = ({ contract, terms, phone }) => (
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
            <Text style={styles.bigTitle}>{contract.type}</Text>
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
                        <Text style={styles.padwhiteBg}>{phone}</Text>
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
            <View style={[styles.squareCardnoflex, styles.esmallMb]}>
                <Text style={[styles.intro, styles.textCenter]}>تمهيد</Text>
                <Text style={styles.tamhimText}>
                    فإنه ولما كان الطرف الثاني يرغب في تصنيع و توريد الأعمال
                    المذكورة في العقد و حيت أن الطرف الاول مختص في هذا النوع من
                    الأعمال فقد اتفق الطرفان على ما يلي
                </Text>
            </View>
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
                <Text>
                    توعد الطرف الأول بإنجاز الأعمال وتسليمها خلال{' '}
                    {contract.work_duration}{' '}
                    {+contract.work_duration > 10 ? 'يوم عمل' : 'أيام عمل'}{' '}
                    ابتداء من تاريخ أول دفعة الذي سيتم ذكره في البند الخامس
                </Text>
                <Text style={[styles.intro, styles.textLg]}>
                    البند الرابع: قيمة العقد
                </Text>
                <Text>
                    اتفق الطرفان على أن يقوم الطرف الاول بتصنيع وتوريد المذكورة
                    في العقد حسب ما هو موضح تفصيلا في عرض السعر بمبلغ إجمالى
                    وقدره
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
                    تم الاتفاق بين الطرفين أن تتم المحاسبة ودفع المبلغ على عدد{' '}
                    {contract.bonds_count}{' '}
                    {+contract.bonds_count > 10 ? 'دفعة' : 'دفعات'} حسب جدول
                    التواريخ التالية ذكرها
                </Text>
                <Text> </Text>
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
                {contract.contract_prefrences.map((pref) => {
                    return (
                        <View key={pref.id}>
                            <Text style={styles.intro}>{pref.title}</Text>
                            <Text style={styles.smallMb}>
                                {pref.description}
                            </Text>
                        </View>
                    );
                })}
                {contract.files?.length > 0 && (
                    <>
                        <Text style={styles.intro}>ملاحظات</Text>
                        <View style={[styles.padwhiteBg, styles.smallMb]}>
                            {contract.files.map((file, index) => {
                                if (file.as_note)
                                    return (
                                        <Text key={index}>{file.title}</Text>
                                    );
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
        <Page style={styles.page}>
            <View style={[styles.squareCard, styles.smallMb]}>
                <Text style={[styles.intro]}>الشروط والاحكام</Text>
                <View>
                    {terms.map((term) => {
                        return (
                            <View
                                key={term.id}
                                style={[
                                    styles.esmallMb,
                                    {
                                        display: 'flex',
                                        flexDirection: 'row-reverse',
                                        gap: 3,
                                    },
                                ]}
                            >
                                <Text style={{ flexShrink: 0 }}>•</Text>
                                <Text
                                    style={[
                                        styles.smallText,
                                        styles.smallLineHeight,
                                        { flexGrow: 0, flex: 1 },
                                    ]}
                                >
                                    {term.terms}
                                </Text>
                            </View>
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
        {contract.files?.length > 0 && (
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>الملحقات</Text>
                <View style={[styles.bondsGrid]}>
                    {contract.files.map((bond) => {
                        if (!bond.as_note)
                            return (
                                <View key={bond.title} style={styles.bondCard}>
                                    <View style={[styles.mb, styles.maxh]}>
                                        {bond.image ? (
                                            <Image
                                                style={styles.bondProof}
                                                src={bond.image}
                                            />
                                        ) : (
                                            <Text
                                                style={[
                                                    styles.smallInfo,
                                                    styles.padwhiteBg,
                                                ]}
                                            >
                                                بدون صورة
                                            </Text>
                                        )}
                                    </View>
                                    <Text style={styles.smallInfo}>
                                        {bond.title}
                                    </Text>
                                </View>
                            );
                    })}
                </View>
            </Page>
        )}
    </Document>
);

const ContractPDF = ({ contract, terms, contractPage }) => {
    const openPdfInNewTab = async () => {
        const phoneNum = contract.client.phone.split(' ')[0];
        const phone = `+971${phoneNum}`;
        const doc = (
            <MyDocument phone={phone} terms={terms} contract={contract} />
        ); // Your PDF document
        const blob = await pdf(doc).toBlob(); // Generate the PDF blob
        const url = URL.createObjectURL(blob); // Create a URL for the blob
        window.open(url, '_blank'); // Open the URL in a new tab
    };
    if (contractPage) {
        return (
            <button
                onClick={openPdfInNewTab}
                className="relative top-1 flex flex-col items-center rounded-full"
            >
                <ScrollText size={35} />
                <span className="mt-1 rounded-full bg-black px-3 py-1 text-sm text-white">
                    معاينة العقد
                </span>
            </button>
        );
    } else {
        return (
            <button
                onClick={openPdfInNewTab}
                className="relative top-1 w-full max-w-xl rounded-xl bg-gray-200 py-3 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
            >
                <File className="ml-2 mr-1 inline" />
                الإطلاع على العقد
            </button>
        );
    }
};

export default ContractPDF;
