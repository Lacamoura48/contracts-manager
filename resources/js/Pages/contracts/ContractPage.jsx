import CopyButton from '@/Components/buttons/CopyButton';
import BondsList from '@/Components/lists/BondsList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { formatMoroccanDate } from '@/utils/functions';
import { Link } from '@inertiajs/react';
import { Banknote, File, Info, Mail, PenBox, Phone, Undo2 } from 'lucide-react';
export default function ContractPage({ contract }) {
    const confirmationUrl =
        window.location.origin + '/contracts/live/' + contract.uuid;
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle={`عقد خاص ب${contract.client.full_name}`}
                headerLink={[
                    {
                        label: 'رجوع إلى قائمة عقود',
                        url: route('contracts.index'),
                        icon: Undo2,
                    },
                    {
                        label: 'تعديل على العقد',
                        url: route('contracts.edit', contract.id),
                        icon: PenBox,
                    },
                    {
                        label: 'المزيد عن هذا الزبون',
                        url: route('clients.show', contract.client.id),
                        icon: Info,
                    },
                    {
                        label: `الملاحظات/الملحقات (${contract.files_count})`,
                        url: route('contracts.files', contract.id),
                        icon: File,
                    },
                ]}
            >
                <div className="max-w-2xl">
                    <p className="mb-4 text-center text-sm text-gray-400 md:text-start">
                        أضيف العقد يوم{' '}
                        {formatMoroccanDate(new Date(contract.created_at))}
                    </p>
                    <div className="flex justify-center gap-3 md:justify-start md:text-start">
                        <CopyButton
                            textToCopy={confirmationUrl}
                            label="نسخ رابط العقد"
                        />
                        <Link
                            type="button"
                            method="POST"
                            href={route('contracts.send', contract.id)}
                            className="relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
                        >
                            <Mail className="ml-2 inline" />
                            البعث للزبون
                        </Link>
                    </div>

                    <p className="mx-auto mt-5 flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 font-bold md:mx-0">
                        <Phone size={20} /> {contract.client.phone}
                    </p>
                    <hr className="my-8" />
                    <div className="flex flex-wrap gap-2">
                        <h2 className="text-3xl font-bold">
                            {contract.bonds_count} دفعات
                        </h2>
                        <p className="flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 md:mx-0">
                            <Banknote size={20} /> المبلغ الإجمالي :{' '}
                            {contract.bonds_sum_amount}
                        </p>
                    </div>
                    <div>
                        <BondsList bonds={contract.bonds} />
                    </div>
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
