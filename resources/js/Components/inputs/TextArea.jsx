function TextArea(props) {
    return (
        <div className={`relative ${props.width ?? 'w-full'}`}>
            <label className="mb-1 block text-black" htmlFor={props.id}>
                {props.label}
            </label>
            <textarea
                rows={3}
                {...props}
                className={`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black bg-${
                    props.bg ?? 'gray-100'
                } placeholder:text-placeholder rounded-lg`}
            ></textarea>
        </div>
    );
}

export default TextArea;
