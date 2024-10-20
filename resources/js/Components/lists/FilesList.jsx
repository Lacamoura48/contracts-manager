import { PlusSquare } from 'lucide-react';
import { useState } from 'react';
import FileCard from '../cards/FileCard';
import FileForm from '../cards/FileForm';
import EmptyList from './EmptyList';

export default function FilesList({ files, contract_id }) {
    const [showForm, setShowForm] = useState(false);
    return (
        <div>
            <div className="my-6">
                {showForm ? (
                    <FileForm
                        closeHandler={() => setShowForm(false)}
                        contract_id={contract_id}
                    />
                ) : (
                    <button
                        onClick={() => setShowForm(true)}
                        className="w-full rounded-lg bg-black py-3 text-center font-medium text-white"
                    >
                        <PlusSquare size={25} className="ml-3 inline-block" />
                        <span>إضافة ملحق</span>
                    </button>
                )}
            </div>
            {files.length > 0 ? (
                <div className="columns-1 gap-3 md:columns-2">
                    {files.map((file, index) => {
                        return <FileCard key={index} file={file} />;
                    })}
                </div>
            ) : (
                <EmptyList model="ملحقات" />
            )}
        </div>
    );
}
