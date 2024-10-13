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
                className={`group flex aspect-square max-h-32 w-full cursor-pointer ${props.imageSelected || props.defaultImage ? '' : 'flex-col items-center justify-center'} gap-2 rounded-2xl border-4 ${props.error ? 'border-red-100 text-red-600' : 'border-[rgb(200,200,200)] text-gray-600'} md:max-h-44`}
                htmlFor={props.id}
            >
                {props.imageSelected || props.defaultImage ? (
                    <div className="mx-auto">
                        <img
                            className="h-full w-full object-contain"
                            src={
                                props.imageSelected
                                    ? URL.createObjectURL(props.imageSelected)
                                    : props.defaultImage
                            }
                            alt="image selected"
                        />
                    </div>
                ) : (
                    <>
                        <FileUp
                            size={60}
                            color={props.error ? 'red' : 'rgb(200,200,200)'}
                        />
                        <span>{props.error || props.label}</span>
                    </>
                )}
            </label>
        </div>
    );
}

export default FileInput;
