import { formatMoroccanDate, numberToArabicTyping } from '@/utils/functions';
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
import RubikBold from '../assets/fonts/Rubik-Bold.ttf';
import RubikRegular from '../assets/fonts/Rubik-Regular.ttf';

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
        fontSize: 10,
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
    bold: {
        fontWeight: 'bold',
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
        fontSize: 7,
        gap: 8,
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

const MyDocument = ({ contract }) => (
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
                        <Text>الاسم الكامل</Text>
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
                        <Text style={styles.esmallMb}>الهاتف</Text>
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
                        <Text style={styles.esmallMb}>رقم الهوية</Text>
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
                        <Text>الايميل</Text>
                    </View>
                </View>
                <View style={styles.squareCard}>
                    <Text style={[styles.intro]}>الطرف الأول</Text>
                    <Text style={[styles.esmallMb]}>
                        شركة فن المجالس لصناعة الأثاث ذ.م.م
                    </Text>
                    <Text style={[styles.esmallMb]}>رخصة رقم 783512</Text>
                    <Text style={[styles.esmallMb]}>
                        هاتف: 0522565677/مقرها بالشارقة
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
                <Text>
                    توعد الطرف الأول بإنجاز الأعمال وتسليمها خلال
                    {10}
                    يوم عمل ابتداء من تاريخ أول دفعة الذي سيتم ذكره في البند
                    الخامس
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
                            parseFloat(contract.bonds_sum_amount),
                        )}{' '}
                        درهم إماراتي
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
                    {contract.bonds_count} دفعات حسب جدول التواريخ التالية ذكرها
                </Text>
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
                {contract.bonds.map((bond, index) => {
                    return (
                        <View key={bond.payement_date} style={styles.bondCard}>
                            <Text style={[styles.intro, { marginBottom: 6 }]}>
                                الدفعة {orderArabic[index]}
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
                                        )}{' '}
                                        درهم إماراتي
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
                                        {bond.amount}
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
            <View style={[styles.bondsGrid, styles.esmallMb]}>
                <View style={styles.bondCard}>
                    <Text style={[styles.intro, styles.textLg]}>
                        البند السادس: المواصفات
                    </Text>
                    <Text style={styles.intro}>نوع الاسفنج</Text>
                    <Text style={styles.smallMb}>
                        اتفق الطرفان استخدام الاسفنج طبق للمواصفات التالية
                    </Text>
                    <View style={[styles.flexBetween, styles.smallMb]}>
                        <Text style={styles.padwhiteBg}>
                            {contract.intensity} الكثافة
                        </Text>
                        <Text style={styles.padwhiteBg}>
                            {contract.width} عرض
                        </Text>
                        <Text style={styles.padwhiteBg}>
                            {contract.height} ارتفاع
                        </Text>
                    </View>
                    <Text style={styles.intro}>نوع القماش والخياطة</Text>
                    <Text style={styles.smallMb}>
                        اتفق الطرفان استخدام القماش الذي تم اختیاره وتم ارسال
                        الصور عبر منصة واتساب وتم الموافقة عليها
                    </Text>
                    <Text style={styles.intro}>شكل وتصميم الخشب</Text>
                    <Text style={styles.smallMb}>
                        اتفق الطرفان على التصميم حسب ما تم اخياره من النماذج
                        المتوفرة بالمعرض والتي تم ارسال صورها عبر منصة واتساب
                        وتم الموافقة عليها
                    </Text>
                    <Text style={styles.intro}>ملاحظات</Text>
                    <View style={[styles.padwhiteBg, styles.smallMb]}>
                        {contract.files.map((file, index) => {
                            return <Text key={index}>{file.title}</Text>;
                        })}
                    </View>
                    <Text style={styles.intro}>تنویه</Text>
                    <Text style={{ fontSize: 10 }}>
                        تعتبر المحادثات بين الطرفين عبر منصة واتساب والتي يوضح
                        فيها الطرف الأول للطرف الثاني تفاصيل عن الاعمال المتفق
                        عليها جزءا لا يتجزأ من العقد حيت انها توضح وتبين بوضوح
                        ما تم ذكره بالعقد اما عن طريق فيديوهات او صور لما تم
                        اختياره والموافقة عليه
                    </Text>
                    <Text style={[styles.intro, styles.textLg]}>
                        البند السابع: الاقرارات
                    </Text>
                    <Text>
                        اقر الطرفان بانهما اطلعا ووافقا على بنود هذا العقد وحرر
                        من نسختين بعد ان تم توقيعه من الطرفين
                    </Text>
                </View>

                <View style={[styles.bondCard, styles.smallText]}>
                    <Text style={[styles.intro]}>الشروط والاحكام</Text>
                    <Text>
                        لا يحق للطرف الثاني مطالبة الطرف الاول بتفكيك الاثاث
                        القديم او نقله لذلك يرجى التأكد من خلو المكان المراد وضع
                        الاثاث به من الاثاث القديم وتنظيفه قبل وصول العمال
                    </Text>
                    <Text>
                        في حال التوصيل للمجمعات السكنية التي تحتاج الى ترخيص
                        للدخول لا يتحمل الطرف الاول اي مسؤولية عن عدم السماح له
                        بالتوصيل ولا يلتزم باي مواقيت معمول بها بالمجمع السكني
                        ويلتزم الطرف الثاني باستخراج التراخيص اللازمة والاتفاق
                        مع الجهة المسؤولة
                    </Text>
                    <Text>
                        في حال عدم توفر مصعد خدمات في البنايات السكنية يمكن
                        الطرف الاول من توصيل الاغراض يحق له المطالبة برسوم
                        اضافية للتوصيل الى محل السكن
                    </Text>
                    <Text>
                        يتم تأجيل توصيل الطلبيات في الحالات التالية: المطر
                        والكوارث الطبيعية وايام الاحتفالات الوطنية وانقطاع الطرق
                        الناتج عنها. ولا يتم احتساب ايام العطل والاعياد ضمن مدة
                        الانجاز
                    </Text>
                    <Text>
                        في حال امتناع او عدم تمكن الطرف الثاني من استلام
                        التوريدات تحت اي ضرف كان عند موعد التسليم يتم احتساب
                        رسوم التخزين 100 درهم اماراتي عن کل يوم تأخير
                    </Text>
                    <Text>
                        الطرف الاول غير مسؤول عن اي ضرر في البضاعة غير عيوب
                        التصنيع بعد معاينتها أتناء التسليم
                    </Text>
                    <Text>
                        في حال وجود عيب في التصنيع يجب ان تكون جميع البضائع
                        المرتجعة في حالتها الاصلية وغير مستخدمة ولم يحدث لها اي
                        ضرر وسيحتفظ الطرف الاول بالحق في فحص البضاعة قبل قبول
                        ارجاعه
                    </Text>
                    <Text>
                        في حال الارجاع وعندما يتعين على فريق التسليم العودة لأخد
                        القطع المراد ارجاعها يتكبد الطرف الثاني رسوم التوصيل
                        والتي سيتم ابلاغه بها قبل وصول الفريق لأخد القطع وسيتم
                        خصم هذه الرسوم من المبلغ المراد استرداده
                    </Text>
                    <Text>
                        لا يقبل اي طلب للإرجاع بالنسبة للإسفنج والمراتب والاقمشة
                        والقطع التي تم تفصيلها على الطلب
                    </Text>
                    <Text>
                        لا يمكن طلب اعادة جدولة التوصيل والتركيب الا باتصال مسبق
                        خلال 48 ساعة قبل موعد التسليم وسيحدد الموعد الجديد حسب
                        المواعيد المتاحة
                    </Text>
                    <Text>
                        الجزء المدفوع كعربون لا يسترد في اي حال من الأحوال وإذا
                        طلب الطرف الثاني الغاء الطلبية يحق للطرف الاول المطالبة
                        بتعويض عن الضرر الناجم عن ذلك
                    </Text>
                    <Text>
                        في حال رجوع أي من الشيكات المستلمة بخصوص الدفعات ولاي
                        سبب كان يتم دفع غرامة مالية وقدرها 500 درهم
                    </Text>
                    <Text>
                        في حال طلب الطرف الثاني الغاء الطلبية او رفض استلام
                        الطلبية في الموعد المحدد يحق للطرف الأول المطالبة بقيمة
                        العقد كاملة
                    </Text>
                    <Text>
                        تبقى ملكية الأغراض للطرف الاول حتى يتم تسديد المبالغ
                        المستحقة بموجب هذا العقد. وفي حال عدم دفع أي دفعة يحق
                        للطرف الأول استرداد الأغراض واتخاد الإجراءات القانونية
                        اللازمة
                    </Text>
                    <Text>
                        في حال المنازعات القضائية يتحمل الطرف الثاني جميع الرسوم
                        واتعاب المحاماة الخاصة بالقضية
                    </Text>
                    <Text>
                        في حال رغبة الطرف الثاني في إلغاء الطلب بعد مرور يومين
                        على الطلب يحق للطرف الأول المطالبة بمبلغ تعويض عن
                        الاضرار الناجمة عن دالك
                    </Text>
                    <Text>
                        لا يحق للطرف الثاني مطالبة الطرف الأول باي تعديلات او
                        إصلاحات في القطع بعد استلامها واذا لزم ذلك يحق للطرف
                        الأول المطالبة برسوم إضافية لذلك
                    </Text>
                    <Text>
                        في حال طلب الزبون تغييرات في المواصفات غير المتفق عليه
                        في العقد يحق للطرف الأول المطالبة برسوم إضافية حسب ما
                        سيتم الاتفاق عليه كملحق للعقد
                    </Text>
                    <Text>
                        في حال التوصيل وعدم تمكن الطرف الثاني من استلام الطلب او
                        عدم تواجده بمكان التوصيل او لاي سبب كان يتم ارجاع
                        الطلبية وجدولة موعد اخر للتسليم حسب المواعيد المتاحة
                        ويتحمل الطرف الثاني رسوم التوصيل والتركيب وسيتم احتساب
                        المبلغ حسب مكان التوصيل
                    </Text>
                </View>
            </View>
            <View style={styles.bondsGrid}>
                <View style={styles.signatureCard}>
                    <Text style={[styles.intro]}>الطرف الثانى</Text>
                </View>
                <View style={styles.signatureCard}>
                    <Text style={[styles.intro]}>الطرف الأول</Text>
                </View>
            </View>
        </Page>
    </Document>
);

const ContractPDF = ({ contract }) => {
    const openPdfInNewTab = async () => {
        const doc = <MyDocument contract={contract} />; // Your PDF document
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
};

export default ContractPDF;
