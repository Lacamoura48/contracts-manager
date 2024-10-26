import BondsFilterSection from '@/Components/filters/BondsFilterSection';
import BondsList from '@/Components/lists/BondsList';
import EmptyList from '@/Components/lists/EmptyList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { PlusCircle } from 'lucide-react';

export default function Bonds({ bonds }) {
    const queryParams = new URLSearchParams(window.location.search);
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle={
                    queryParams.get('month')
                        ? `دفعات ${queryParams.get('month')} `
                        : `دفعات هذا الشهر`
                }
                headerLink={[
                    {
                        label: 'إضافة عقد جديد',
                        url: '/contracts/create',
                        icon: PlusCircle,
                    },
                ]}
            >
                <BondsFilterSection />
                <div className="max-w-2xl">
                    {bonds.data.length > 0 ? (
                        <BondsList bonds={bonds.data} />
                    ) : (
                        <EmptyList model="عقود" />
                    )}
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}