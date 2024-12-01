import FilterSection from '@/Components/filters/ClientsFilterSection';
import ClientsList from '@/Components/lists/ClientsList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { ArrowBigRightDash, PlusCircle, Trash2 } from 'lucide-react';

export default function Clients({ clients }) {
    const queryParams = new URLSearchParams(window.location.search);
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle={
                    queryParams.get('trash') != 1
                        ? 'الزبناء'
                        : 'الزبناء المهملون'
                }
                noBack
                headerLink={[
                    {
                        label: 'إضافة زبون جديد',
                        url: '/clients/create',
                        icon: PlusCircle,
                    },
                    queryParams.get('trash') != 1
                        ? {
                              label: 'المهملات',
                              url: '/clients?trash=1',
                              icon: Trash2,
                          }
                        : {
                              label: 'عودة للزبناء',
                              url: '/clients',
                              icon: ArrowBigRightDash,
                          },
                ]}
            >
                <FilterSection />
                <ClientsList clients={clients} />
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
