function SubmitButton({ children }) {
    return (
        <button className="text-bold block w-full rounded-lg bg-black px-5 py-3 text-white">
            {children}
        </button>
    );
}

export default SubmitButton;
