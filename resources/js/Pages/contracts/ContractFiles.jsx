import FilesList from '@/Components/lists/FilesList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';

export default function ContractFiles({ contract }) {
    const queryParams = new URLSearchParams(window.location.search);
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle={`${queryParams.get('type') === 'notes' ? 'ملاحظات' : 'ملحقات'} العقد خاص ب${contract.client.full_name}`}
            >
                <div className="max-w-2xl">
                    <FilesList
                        contract_id={contract.id}
                        files={contract.files}
                        type={queryParams.get('type')}
                    />
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
