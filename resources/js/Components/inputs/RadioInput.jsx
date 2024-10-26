function RadioInput(props) {
    return (
        <div className={`relative`}>
            <input
                {...props}
                type="radio"
                className={`border-none px-2 py-2 accent-black placeholder:text-gray-400 focus:ring-black ${
                    props.error ? 'bg-red-100' : 'bg-gray-100'
                } placeholder:text-placeholder rounded-lg`}
            />
            <label className="mb-1 mr-2 text-black" htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
}

export default RadioInput;
