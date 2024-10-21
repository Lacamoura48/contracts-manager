import { formatMoroccanDate } from '@/utils/functions';
import { router } from '@inertiajs/react';
import { Trash } from 'lucide-react';
import { useState } from 'react';
import Modal from '../Modal';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

export default function FileCard({ file }) {
    const [showDelete, setShowDelete] = useState(false);
    function deleteFile() {
        router.delete(route('files.delete', file.id), {
            onStart: () => setShowDelete(false),
        });
    }
    return (
        <div className="relative mb-3 break-inside-avoid rounded-lg bg-gray-200 px-2 py-4">
            <button
                onClick={() => setShowDelete(true)}
                className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black"
            >
                <Trash color="white" size={18} />
            </button>
            <p className="text-sm font-medium text-gray-500">
                {formatMoroccanDate(new Date(file.created_at))}
            </p>
            {file.title && (
                <p className="mb-3 text-lg font-medium text-black">
                    {file.title}
                </p>
            )}
            {file.image && (
                <img className="rounded-lg" src={file.image} alt="file image" />
            )}
            <Modal show={showDelete}>
                <div className="px-8 py-10">
                    <h2 className="mb-5 text-2xl font-bold">
                        هل أنت متأكد أنك تريد حذف "{file.title}"
                    </h2>
                    <div className="flex gap-4">
                        <PrimaryButton className="text-xl" onClick={deleteFile}>
                            نعم
                        </PrimaryButton>
                        <SecondaryButton
                            className="text-xl"
                            onClick={() => setShowDelete(false)}
                        >
                            لا
                        </SecondaryButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
