export default function OpenInWhatsapp({ phone, text }) {
    const phoneNum = phone.split(' ')[0];

    const url = `https://api.whatsapp.com/send?phone=+971${phoneNum}&text=${text}`;
    return (
        <a
            target="_blank"
            href={url}
            className="relative top-1 flex gap-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
            rel="noreferrer"
        >
            <img className="w-8" src="/icons/wa.png" alt="whatsapp icon" />
            إرسال عبر Whatsapp
        </a>
    );
}
