import { formatMoroccanDate } from '@/utils/functions';
import { Link, router } from '@inertiajs/react';
import { Pen, Phone, Trash, UserCircle } from 'lucide-react';
import { useState } from 'react';
import Modal from '../Modal';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

function ClientCard({ client }) {
    const [showDelete, setShowDelete] = useState(false);
    function deleteClient() {
        router.delete(`/clients/${client.id}`);
    }
    return (
        <div className="rounded-lg border border-gray-400 bg-gray-100 p-3">
            <div className="mb-8 flex justify-between">
                <div className="flex w-1/2 items-center gap-2">
                    <UserCircle size={40} color="rgb(90,90,90)" />
                    <div>
                        <Link
                            href={route('clients.show', client.id)}
                            className="font-bold hover:underline"
                        >
                            {client.full_name}
                        </Link>
                        <p className="text-sm text-gray-400">
                            أضيف يوم{' '}
                            {formatMoroccanDate(new Date(client.created_at))}
                        </p>
                    </div>
                </div>
                <a
                    href={`tel:${client.phone}`}
                    className="flex h-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-2 py-1 text-sm font-medium"
                >
                    <Phone size={18} /> {client.phone}
                </a>
            </div>
            <div className="flex justify-end gap-1 rounded-lg px-2">
                <Link
                    href={`/clients/${client.id}/edit`}
                    className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 lg:w-12"
                >
                    <Pen color="white" size={20} />
                </Link>
                <button
                    onClick={() => setShowDelete(true)}
                    className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 lg:w-12"
                >
                    <Trash color="white" size={20} />
                </button>
            </div>
            <Modal show={showDelete}>
                <div className="px-8 py-10">
                    <h2 className="mb-5 text-2xl font-bold">
                        هل أنت متأكد أنك تريد حذف المستخدم {client.full_name}
                    </h2>
                    <div className="flex gap-4">
                        <PrimaryButton
                            className="text-xl"
                            onClick={deleteClient}
                        >
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

export default ClientCard;
