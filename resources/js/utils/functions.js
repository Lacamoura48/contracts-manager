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
        const formattedDate = date.toLocaleString('ar-MA', {
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
    if (num === 0) return 'صفر';

    const ones = [
        '',
        'واحد',
        'اثنان',
        'ثلآثة',
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
        'ثلآثون',
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
        'ثلآثة عشر',
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
        'ثلآثمائة',
        'أربعمائة',
        'خمسمائة',
        'ستمائة',
        'سبعمائة',
        'ثمانمائة',
        'تسعمائة',
    ];

    function getBelowHundred(num) {
        if (num < 10) return ones[num];
        if (num < 20) return teens[num - 10];
        const tenPart = tens[Math.floor(num / 10)];
        const onePart = ones[num % 10];
        return onePart ? `${onePart} و ${tenPart}` : tenPart;
    }

    function getBelowThousand(num) {
        const hundredPart = hundreds[Math.floor(num / 100)];
        const belowHundred = getBelowHundred(num % 100);
        return hundredPart && belowHundred
            ? `${hundredPart} و ${belowHundred}`
            : hundredPart || belowHundred;
    }

    function getThousandsPart(num) {
        const thousandValue = Math.floor(num / 1000);
        if (thousandValue === 1) return 'ألف';
        if (thousandValue === 2) return 'ألفان';
        if (thousandValue <= 9) return ones[thousandValue] + ' آلاف';
        return (
            getBelowThousand(thousandValue) +
            (thousandValue === 10 ? ' آلاف' : ' ألف')
        );
    }

    function getDecimalPart(decimal) {
        const decimalNum = Math.round(decimal * 100); // Rounding to handle two decimal places
        if (decimalNum === 0) return '';
        return `درهم إماراتي و  ${getBelowHundred(decimalNum)} فلس`;
    }

    // Main logic
    const [integerPart, decimalPart] = num.toString().split('.').map(Number); // Split number into integer and decimal

    let result = '';

    // Handle integer part
    if (integerPart < 100) {
        result = getBelowHundred(integerPart);
    } else if (integerPart < 1000) {
        result = getBelowThousand(integerPart);
    } else if (integerPart < 1000000) {
        const thousandPart = getThousandsPart(integerPart);
        const belowThousand = getBelowThousand(integerPart % 1000);
        result = belowThousand
            ? `${thousandPart} و ${belowThousand}`
            : thousandPart;
    } else {
        return 'العدد كبير جدًا أو غير مدعوم';
    }

    // Handle decimal part if it exists
    if (decimalPart) {
        result += ` ${getDecimalPart(decimalPart / 100)}`; // Converting to a fraction for easy handling
        return result;
    } else {
        return result + ' درهم إماراتي';
    }
}

export function dateTimeToArabic(currDate) {
    const date = new Date(currDate);

    // Format date to 'dd/mm/yyyy' and time to 24-hour format with options
    return date.toLocaleString('ar-MA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // 24-hour format
    });
    // .replace(',', ' | ');
}
