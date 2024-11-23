import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

const CopyButton = ({ textToCopy, label }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 3000); // Reset message after 2 seconds
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });
    };

    return (
        <div>
            <button
                className="relative top-1 flex flex-col items-center rounded-full"
                onClick={handleCopy}
            >
                {copied ? (
                    <Check size={35} className="ml-2 inline" />
                ) : (
                    <Copy size={35} className="ml-2 inline" />
                )}
                <span className="mt-1 rounded-full bg-black px-3 py-1 text-sm text-white">
                    {copied ? 'تم النسخ!' : label}
                </span>
            </button>
        </div>
    );
};

export default CopyButton;
