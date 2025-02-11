import { Link, router } from '@inertiajs/react';
import { IterationCw, Pen, Phone, Trash, UserCircle, X } from 'lucide-react';
import { useState } from 'react';
import Modal from '../Modal';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

function ClientCard({ client }) {
    const queryParams = new URLSearchParams(window.location.search);
    const [showDelete, setShowDelete] = useState(false);
    function trashClient() {
        router.post(route('clients.trash', client.id), { _method: 'patch' });
    }
    function deleteClient() {
        router.delete(route('clients.destroy', client.id));
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
                            {client.nickname || client.full_name}
                        </Link>
                        <p className="text-sm text-gray-400">{client.email}</p>
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
                {queryParams.get('trash') != 1 ? (
                    <Link
                        href={`/clients/${client.id}/edit`}
                        className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 lg:w-12"
                    >
                        <Pen color="white" size={20} />
                    </Link>
                ) : (
                    <button
                        onClick={trashClient}
                        className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 lg:w-12"
                    >
                        <IterationCw color="white" size={20} />
                    </button>
                )}
                <button
                    onClick={() => setShowDelete(true)}
                    className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 lg:w-12"
                >
                    {queryParams.get('trash') != 1 ? (
                        <Trash color="white" size={20} />
                    ) : (
                        <X color="white" size={20} />
                    )}
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
                            onClick={() =>
                                queryParams.get('trash') != 1
                                    ? trashClient()
                                    : deleteClient()
                            }
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
