import FilesList from '@/Components/lists/FilesList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { Undo2 } from 'lucide-react';

export default function ContractFiles({ contract }) {
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle={`الملحقات العقد خاص ب${contract.client.full_name}`}
                headerLink={[
                    {
                        label: 'رجوع إلى العقد',
                        url: route('contracts.show', contract.id),
                        icon: Undo2,
                    },
                ]}
            >
                <div className="max-w-2xl">
                    <FilesList
                        contract_id={contract.id}
                        files={contract.files}
                    />
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
