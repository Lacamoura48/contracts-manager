function AutocompleteModal({ children, open }) {
    return (
        <div
            className={`border-secondary absolute -bottom-2 left-1/2 z-20 h-[12rem] w-full -translate-x-1/2 translate-y-full overflow-y-scroll rounded-lg border bg-white p-1 text-sm shadow-lg transition-all ${
                open
                    ? 'pointer-events-auto scale-100 opacity-100'
                    : 'pointer-events-none scale-90 opacity-0'
            }`}
        >
            {children}
        </div>
    );
}

export default AutocompleteModal;
