function CustomInput(props) {
    return (
        <div className={`relative ${props.width ?? 'w-full min-w-44'}`}>
            <label className="mb-1 block text-black" htmlFor={props.id}>
                {props.label}
            </label>
            {props.icon && (
                <div className="absolute right-3 top-2/3 -translate-y-1/2">
                    {props.icon}
                </div>
            )}
            <input
                {...props}
                className={`w-full border-none px-2 py-2 accent-black placeholder:text-gray-400 focus:ring-black ${
                    props.error ? 'bg-red-100' : 'bg-gray-100'
                } placeholder:text-placeholder rounded-lg ${props.icon && 'pr-11'}`}
            />
            <span className="text-xs text-red-600">{props.error}</span>
        </div>
    );
}

export default CustomInput;
