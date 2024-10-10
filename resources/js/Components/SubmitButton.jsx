import { Loader2 } from 'lucide-react';

function SubmitButton({ children, loading }) {
    return (
        <button
            disabled={loading}
            className={`${loading && 'opacity-40'} text-bold block w-full rounded-lg bg-black px-5 py-3 text-white`}
        >
            {loading ? (
                <span className="mx-auto block w-fit animate-spin">
                    <Loader2 />
                </span>
            ) : (
                children
            )}
        </button>
    );
}

export default SubmitButton;
