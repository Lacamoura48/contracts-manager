import ContractsFilterSection from '@/Components/filters/ContractsFilterSection';
import ContractsList from '@/Components/lists/ContractsList';
import EmptyList from '@/Components/lists/EmptyList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { PlusCircle } from 'lucide-react';

export default function Contracts({ contracts }) {
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle="العقود"
                noBack
                headerLink={[
                    {
                        label: 'إضافة عقد جديد',
                        url: '/contracts/create',
                        icon: PlusCircle,
                    },
                ]}
            >
                <ContractsFilterSection />
                {contracts.data.length > 0 ? (
                    <ContractsList contracts={contracts} />
                ) : (
                    <EmptyList model="عقود" />
                )}
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
