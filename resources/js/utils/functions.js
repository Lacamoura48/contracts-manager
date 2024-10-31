import { ArrowUpFromLine, Check, X } from 'lucide-react';

export const formatIdCode = (value) => {
    // Remove all non-digit characters and limit to 14 digits
    const digitsOnly = value.replace(/\D/g, '').slice(0, 15);

    // Format progressively based on length
    let formattedValue = digitsOnly;

    if (digitsOnly.length > 3) {
        formattedValue = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`;
    }
    if (digitsOnly.length > 7) {
        formattedValue = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 7)}-${digitsOnly.slice(7)}`;
    }
    if (digitsOnly.length > 13) {
        formattedValue = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 7)}-${digitsOnly.slice(7, 14)}-${digitsOnly.slice(14)}`;
    }

    return formattedValue;
};

export function formatMoroccanDate(date) {
    try {
        const formattedDate = date.toLocaleString('ar-UA', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
        return formattedDate;
    } catch (e) {
        return '';
    }
}

export function getNextPaymentDate(payements) {
    const currentDate = new Date();
    const upcomingpayements = payements
        .filter(
            (payement) =>
                payement.status !== 'paid' &&
                new Date(payement.payement_date) > currentDate,
        )
        .sort((a, b) => new Date(a.payement_date) - new Date(b.payement_date));
    console.log(upcomingpayements);

    return upcomingpayements.length > 0
        ? upcomingpayements[0].payement_date
        : null;
}

export const getDiscColor = (status, payment_date) => {
    if (status === 'paid') return 'bcg-green';
    const today = new Date();
    const paymentDate = new Date(payment_date);
    const diffInDays = (today - paymentDate) / (1000 * 60 * 60 * 24);
    if (diffInDays < 1.5 && diffInDays >= 0) return 'bcg-blue';
    if (diffInDays > 1.5 && diffInDays <= 3) return 'bcg-orange';
    if (diffInDays > 3) return 'bcg-red';
    return 'bg-gray-200'; // Default
};
export const getStatusFromClasses = (classes) => {
    if (classes.includes('bcg-red'))
        return {
            label: 'متعترة الدفع',
            color: 'bg-red-100 text-red-500',
        };
    if (classes.includes('bcg-orange'))
        return {
            label: 'متأخر',
            color: 'bg-orange-100 text-orange-500',
        };
    if (classes.includes('bcg-blue'))
        return {
            label: 'مستحق الدفع',
            color: 'bg-blue-100 text-blue-500 animate-pulse',
        };
    const allGreen = classes.every((c) => c === 'bcg-green');
    if (allGreen)
        return {
            label: 'مدفوع',
            color: 'text-green-500 bg-green-100',
        };
    return {
        label: 'قادم',
        color: 'text-gray-500 bg-gray-200',
    }; // Default case if none of the conditions match
};
export const formatFilterDate = (date) => {
    const datee = new Date(date);
    const formattedDate = new Intl.DateTimeFormat('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(datee);
    const [day, month, year] = formattedDate.split('/');
    const formattedDateString = `${year}-${month}-${day}`;
    return formattedDateString;
};
export function generateCheckStatus(currentStatus) {
    const statuses = {
        paid: { bg: 'bcg-green text-white', icon: Check },
        posted: { bg: 'bcg-blue text-white', icon: ArrowUpFromLine },
        denied: { bg: 'bcg-red text-white', icon: X },
        // none: { bg: 'bg-gray-200 text-gray-200', icon: X },
    };
    return statuses[currentStatus];
}
export function checkDateReturnDiff(inputDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const givenDate = new Date(inputDate);
    givenDate.setHours(0, 0, 0, 0);
    if (givenDate < today) {
        const diffInMilliseconds = today - givenDate;
        const diffInDays = Math.floor(
            diffInMilliseconds / (1000 * 60 * 60 * 24),
        );
        return `متأخر ب ${diffInDays} ${diffInDays > 2 && diffInDays < 11 ? 'أيام' : 'يوم'}`;
    } else {
        return formatMoroccanDate(givenDate);
    }
}
export function numberToArabicTyping(num) {
    const ones = [
        '',
        'واحد',
        'اثنان',
        'ثلاثة',
        'أربعة',
        'خمسة',
        'ستة',
        'سبعة',
        'ثمانية',
        'تسعة',
    ];
    const tens = [
        '',
        'عشرة',
        'عشرون',
        'ثلاثون',
        'أربعون',
        'خمسون',
        'ستون',
        'سبعون',
        'ثمانون',
        'تسعون',
    ];
    const teens = [
        'عشرة',
        'أحد عشر',
        'اثنا عشر',
        'ثلاثة عشر',
        'أربعة عشر',
        'خمسة عشر',
        'ستة عشر',
        'سبعة عشر',
        'ثمانية عشر',
        'تسعة عشر',
    ];
    const hundreds = [
        '',
        'مائة',
        'مائتان',
        'ثلاثمائة',
        'أربعمائة',
        'خمسمائة',
        'ستمائة',
        'سبعمائة',
        'ثمانمائة',
        'تسعمائة',
    ];

    function getBelowHundred(num) {
        if (num < 10) {
            return ones[num];
        } else if (num >= 10 && num < 20) {
            return teens[num - 10];
        } else if (num >= 20 && num < 100) {
            const tenPart = tens[Math.floor(num / 10)];
            const onePart = ones[num % 10];
            return onePart ? `${onePart} و ${tenPart}` : tenPart;
        }
    }

    function getBelowThousand(num) {
        const hundredPart = hundreds[Math.floor(num / 100)];
        const belowHundred = getBelowHundred(num % 100);
        return hundredPart && belowHundred
            ? `${hundredPart} و ${belowHundred}`
            : belowHundred || hundredPart;
    }

    function getThousandsPart(num) {
        const thousandValue = Math.floor(num / 1000);
        let thousandPart;
        if (thousandValue === 1) {
            thousandPart = 'ألف';
        } else if (thousandValue === 2) {
            thousandPart = 'ألفان';
        } else if (thousandValue >= 3 && thousandValue <= 9) {
            thousandPart = ones[thousandValue] + ' آلاف';
        } else {
            thousandPart =
                getBelowThousand(thousandValue) +
                `${thousandValue == 10 ? ' آلاف' : ' ألف'}`;
        }
        return thousandPart;
    }

    if (num < 100) {
        return getBelowHundred(num);
    } else if (num < 1000) {
        return getBelowThousand(num);
    } else if (num < 1000000) {
        const thousandPart = getThousandsPart(num);
        const belowThousand = getBelowThousand(num % 1000);
        return belowThousand
            ? `${thousandPart} و ${belowThousand}`
            : thousandPart;
    }

    return 'العدد كبير جدًا أو غير مدعوم';
}
