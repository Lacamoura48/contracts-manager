import FilterSection from '@/Components/filters/FilterSection';
import ClientsList from '@/Components/lists/ClientsList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';

export default function Contracts({ contracts }) {
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle="العقود"
                headerLink={{
                    label: 'إضافة عقد جديد',
                    url: '/contracts/create',
                }}
            >
                <FilterSection />
                <ClientsList contracts={contracts} />
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
