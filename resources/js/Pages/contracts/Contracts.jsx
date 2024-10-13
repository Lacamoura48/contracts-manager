import ContractsFilterSection from '@/Components/filters/ContractsFilterSection';
import ContractsList from '@/Components/lists/ContractsList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { PlusCircle } from 'lucide-react';

export default function Contracts({ contracts }) {
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle="العقود"
                headerLink={[
                    {
                        label: 'إضافة عقد جديد',
                        url: '/contracts/create',
                        icon: PlusCircle,
                    },
                ]}
            >
                <ContractsFilterSection />
                <ContractsList contracts={contracts} />
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
