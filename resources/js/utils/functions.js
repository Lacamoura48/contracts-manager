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
    if (status === 'paid') return 'bg-green-500';
    const today = new Date();
    const paymentDate = new Date(payment_date);
    const diffInDays = (today - paymentDate) / (1000 * 60 * 60 * 24);
    if (diffInDays < 1.5 && diffInDays >= 0) return 'bg-blue-500';
    if (diffInDays > 1.5 && diffInDays <= 3) return 'bg-orange-300';
    if (diffInDays > 3 && diffInDays <= 7) return 'bg-red-500';
    return 'bg-gray-200'; // Default
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
