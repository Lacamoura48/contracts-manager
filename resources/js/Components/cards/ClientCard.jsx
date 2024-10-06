import { router } from '@inertiajs/react';
import { Pen, PhoneCall, Trash, UserCircle } from 'lucide-react';
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
                <div className="flex items-center gap-2">
                    <UserCircle size={40} color="rgb(90,90,90)" />
                    <div>
                        <h2 className="flex items-center gap-2 font-bold">
                            {client.first_name + ' ' + client.last_name}
                            <span className="rounded-md bg-gray-200 px-3 py-1 text-sm font-bold">
                                {client.id_code}
                            </span>
                        </h2>
                        <p className="text-sm text-gray-400">
                            أضيف يوم الأحد 4 ديسمبر 2024
                        </p>
                    </div>
                </div>
                <a href={`tel:${client.phone}`}>
                    <PhoneCall color="black" size={25} />
                </a>
            </div>
            <div className="flex justify-end gap-1 rounded-lg px-2">
                <button className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 lg:w-12">
                    <Pen color="white" size={20} />
                </button>
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
                        هل أنت متأكد أنك تريد حذف المستخدم{' '}
                        {client.first_name + ' ' + client.last_name}
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
