
export default function OpenInWhatsapp({ phone, text, className, children }) {
    const phoneNum = phone.split(' ')[0];

    const url = `https://api.whatsapp.com/send?phone=+971${phoneNum}&text=${text}`;
    return (
        <a
            target="_blank"
            href={url}
            className={className}
            rel="noreferrer"
        >
            {children}
        </a>
    );
}
