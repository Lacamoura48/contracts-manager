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
                className="relative top-1 rounded-full border border-black py-1 pl-4 pr-2 transition-colors duration-500 hover:bg-black hover:text-white"
                onClick={handleCopy}
            >
                {copied ? (
                    <Check className="ml-2 inline" />
                ) : (
                    <Copy className="ml-2 inline" />
                )}
                {copied ? 'تم النسخ!' : label}
            </button>
        </div>
    );
};

export default CopyButton;
