import ContractPDF from '@/Components/ContractPDF';
import { formatMoroccanDate } from '@/utils/functions';
import { Link } from '@inertiajs/react';
import { Mail } from 'lucide-react';

export default function LiveContract({ contract, auth }) {
    return (
        <div className="pt-5 text-center">
            <h1 className="text-2xl font-bold md:text-3xl">{`عقد خاص ب${contract.client.full_name}`}</h1>

            <p className="mb-4 text-center text-sm text-gray-400">
                أنشئ العقد يوم{' '}
                {formatMoroccanDate(new Date(contract.created_at))}
            </p>
            <div className="flex items-center justify-center gap-3">
                {auth.user && (
                    <Link
                        href={route('contracts.send', contract.id)}
                        className="relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
                    >
                        <Mail className="ml-2 inline" />
                        البعث للزبون
                    </Link>
                )}
                <ContractPDF contract={contract} />
            </div>
        </div>
    );
}
