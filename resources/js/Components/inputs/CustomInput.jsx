function CustomInput(props) {
    return (
        <div className={`relative ${props.width ?? 'w-full'}`}>
            {props.icon && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {props.icon}
                </div>
            )}
            <input
                {...props}
                defaultValue={props.defaultValue}
                className={`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black bg-${
                    props.bg ?? 'gray-100'
                } placeholder:text-placeholder rounded-lg ${props.icon && 'pr-10'}`}
            />
        </div>
    );
}

export default CustomInput;
