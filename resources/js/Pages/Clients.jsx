import FilterSection from '@/Components/filters/FilterSection';
import ClientsList from '@/Components/lists/ClientsList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';

export default function Clients({ clients }) {
    return (
        <AuthenticatedLayout>
            <InsideLayout headerTitle="الزبناء">
                <FilterSection />
                <ClientsList clients={clients} />
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
