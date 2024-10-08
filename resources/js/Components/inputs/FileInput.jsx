import { FileUp } from 'lucide-react';

function FileInput(props) {
    return (
        <div className="w-full">
            <input
                className="hidden"
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                {...props}
            />
            <label
                className="group flex aspect-square max-h-32 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-4 border-[rgb(200,200,200)] text-gray-600"
                htmlFor={props.id}
            >
                <FileUp size={60} color="rgb(200,200,200)" />
                <span>{props.label}</span>
            </label>
        </div>
    );
}

export default FileInput;
