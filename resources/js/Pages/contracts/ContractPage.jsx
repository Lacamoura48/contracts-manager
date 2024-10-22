import BondsList from '@/Components/lists/BondsList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { formatMoroccanDate } from '@/utils/functions';
import {
    Banknote,
    File,
    Info,
    PenBox,
    Phone,
    Trash2,
    Undo2,
} from 'lucide-react';
export default function ContractPage({ contract }) {
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
                        label: 'jsld على العقد',
                        url: route('contracts.destroy', contract.id),
                        icon: Trash2,
                    },
                    {
                        label: 'المزيد عن هذا الزبون',
                        url: route('clients.show', contract.client.id),
                        icon: Info,
                    },
                    {
                        label: `الملحقات (${contract.files_count})`,
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
                    <p className="mx-auto flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 font-bold md:mx-0">
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
