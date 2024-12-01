import ContractsFilterSection from '@/Components/filters/ContractsFilterSection';
import ContractsList from '@/Components/lists/ContractsList';
import EmptyList from '@/Components/lists/EmptyList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { ArrowBigRightDash, PlusCircle, Trash2 } from 'lucide-react';

export default function Contracts({ contracts }) {
    const queryParams = new URLSearchParams(window.location.search);
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle={
                    queryParams.get('trash') != 1 ? 'العقود' : 'العقود المهملة'
                }
                noBack
                headerLink={[
                    {
                        label: 'إضافة عقد جديد',
                        url: '/contracts/create',
                        icon: PlusCircle,
                    },
                    queryParams.get('trash') != 1
                        ? {
                              label: 'المهملات',
                              url: '/contracts?trash=1',
                              icon: Trash2,
                          }
                        : {
                              label: 'عودة للعقود',
                              url: '/contracts',
                              icon: ArrowBigRightDash,
                          },
                ]}
            >
                <ContractsFilterSection />
                <img
                    className="w-[20rem]"
                    src="/icons/status_table.png"
                    alt="status table image"
                />
                {contracts.data.length > 0 ? (
                    <ContractsList contracts={contracts} />
                ) : (
                    <EmptyList model="عقود" />
                )}
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
