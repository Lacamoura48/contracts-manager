import FilterSection from '@/Components/filters/ClientsFilterSection';
import ClientsList from '@/Components/lists/ClientsList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { PlusCircle } from 'lucide-react';

export default function Clients({ clients }) {
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle="الزبناء"
                headerLink={[
                    {
                        label: 'إضافة زبون جديد',
                        url: '/clients/create',
                        icon: PlusCircle,
                    },
                ]}
            >
                <FilterSection />
                <ClientsList clients={clients} />
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
