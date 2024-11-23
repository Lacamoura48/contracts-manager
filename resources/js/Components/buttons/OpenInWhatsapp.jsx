export default function OpenInWhatsapp({ phone, text }) {
    const phoneNum = phone.split(' ')[0];

    const url = `https://api.whatsapp.com/send?phone=+971${phoneNum}&text=${text}`;
    return (
        <a
            target="_blank"
            href={url}
            className="relative top-1 flex flex-col items-center"
            rel="noreferrer"
        >
            <img className="w-12" src="/icons/wa.png" alt="whatsapp icon" />
            <span className="mt-1 rounded-full bg-black px-3 py-1 text-sm text-white">
                إرسال عبر وتساب
            </span>
        </a>
    );
}
