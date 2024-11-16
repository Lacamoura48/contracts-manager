import ContractPDF from '@/Components/buttons/pdfs/ContractPDF';
import BondsList from '@/Components/lists/BondsList';
import SignatureSection from '@/Components/SignatureSection';
import { formatMoroccanDate } from '@/utils/functions';
import { Link } from '@inertiajs/react';
import { Mail, PenLine } from 'lucide-react';
import { useState } from 'react';

export default function LiveContract({ contract, auth, terms }) {
    const [showSignature, setshowSignature] = useState(false);
    const paidBonds = contract.bonds.filter(
        (bond) => bond.status === 'paid' || bond.status === 'posted',
    );
    return (
        <div className="flex h-screen flex-col justify-center px-8 py-10 text-center">
            <h1 className="text-2xl font-bold md:text-3xl">{`عقد خاص ب${contract.client.full_name}`}</h1>

            <p className="mb-4 text-center text-sm text-gray-400">
                أنشئ العقد يوم{' '}
                {formatMoroccanDate(new Date(contract.created_at))}
            </p>
            <div className="mx-auto mb-4 flex w-full max-w-xl gap-4">
                <div className="w-full rounded-2xl bg-gray-200 px-4 py-6">
                    <h3>القيمة الإجمالية</h3>
                    <p className="mt-2 rounded-full bg-white px-2 py-1 text-xl font-bold">
                        {parseFloat(contract.bonds_sum_amount).toFixed(2)}
                    </p>
                </div>
                <div className="w-full rounded-2xl bg-gray-200 px-4 py-6">
                    <h3>الدفعات المدفوعة</h3>
                    <p className="mt-2 rounded-full bg-white px-2 py-1 text-xl font-bold text-green-600">
                        {paidBonds.length}
                        <span className="font-normal text-black">
                            /{contract.bonds.length}
                        </span>
                    </p>
                </div>
            </div>
            <div className="mb-3 w-full max-w-xl flex-1 self-center overflow-y-scroll rounded-2xl border bg-gray-200 px-2">
                <BondsList noActions bonds={contract.bonds} />
            </div>
            <div className="mt-auto flex flex-col items-center gap-4">
                {auth.user && (
                    <>
                        <Link
                            href={route('contracts.send', contract.id)}
                            className="relative top-1 w-full max-w-xl rounded-xl bg-gray-200 py-3 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
                        >
                            <Mail className="ml-2 inline" />
                            البعث للزبون
                        </Link>
                    </>
                )}
                <ContractPDF terms={terms} auth={auth} contract={contract} />
                {!auth.user && !contract.signature_proof && (
                    <>
                        <button
                            onClick={() => setshowSignature(true)}
                            className="relative top-1 w-full max-w-xl rounded-xl border border-black bg-black py-3 pl-4 pr-1 text-white transition-colors duration-500 hover:bg-gray-800 hover:text-white"
                        >
                            <PenLine className="ml-2 inline" />
                            توقيع العقد
                        </button>
                    </>
                )}

                <SignatureSection
                    signature={contract.signature}
                    signatureProof={contract.signature_proof}
                    show={showSignature}
                    id={contract.id}
                    closeHandler={() => setshowSignature(false)}
                />
            </div>
        </div>
    );
}
