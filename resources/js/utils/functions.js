export const formatIdCode = (value) => {
    // Remove all non-digit characters and limit to 14 digits
    const digitsOnly = value.replace(/\D/g, '').slice(0, 14);

    // Format progressively based on length
    let formattedValue = digitsOnly;

    if (digitsOnly.length > 3) {
        formattedValue = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`;
    }
    if (digitsOnly.length > 7) {
        formattedValue = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 7)}-${digitsOnly.slice(7)}`;
    }
    if (digitsOnly.length > 13) {
        formattedValue = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 7)}-${digitsOnly.slice(7, 13)}-${digitsOnly.slice(13)}`;
    }

    return formattedValue;
};
