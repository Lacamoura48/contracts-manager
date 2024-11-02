import ContractPDF from '@/Components/ContractPDF';
import { formatMoroccanDate } from '@/utils/functions';

export default function LiveContract({ contract }) {
    return (
        <div className="pt-5 text-center">
            <h1 className="text-2xl font-bold md:text-3xl">{`عقد خاص ب${contract.client.full_name}`}</h1>
            <p className="mb-4 text-center text-sm text-gray-400 md:text-start">
                أنشئ العقد يوم{' '}
                {formatMoroccanDate(new Date(contract.created_at))}
            </p>

            <ContractPDF contract={contract} />
        </div>
    );
}
