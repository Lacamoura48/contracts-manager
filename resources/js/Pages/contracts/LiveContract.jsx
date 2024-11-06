import ContractPDF from '@/Components/ContractPDF';
import SignatureSection from '@/Components/SignatureSection';
import { formatMoroccanDate } from '@/utils/functions';
import { Link } from '@inertiajs/react';
import { Mail, PenLine } from 'lucide-react';
import { useState } from 'react';

export default function LiveContract({ contract, auth }) {
    const [showSignature, setshowSignature] = useState(false);
    const paidBonds = contract.bonds.filter(
        (bond) => bond.status === 'paid' || bond.status === 'posted',
    );
    return (
        <div className="flex min-h-screen flex-col justify-center pt-5 text-center">
            <h1 className="text-2xl font-bold md:text-3xl">{`عقد خاص ب${contract.client.full_name}`}</h1>

            <p className="mb-4 text-center text-sm text-gray-400">
                أنشئ العقد يوم{' '}
                {formatMoroccanDate(new Date(contract.created_at))}
            </p>
            <div className="mx-auto mb-4 flex gap-4">
                <div className="rounded-2xl bg-gray-200 px-4 py-6">
                    <h3>القيمة الإجمالية</h3>
                    <p className="mt-2 rounded-full bg-white px-2 py-1 text-xl font-bold">
                        {contract.bonds_sum_amount}
                    </p>
                </div>
                <div className="rounded-2xl bg-gray-200 px-4 py-6">
                    <h3>الدفعات المدفوعة</h3>
                    <p className="mt-2 rounded-full bg-white px-2 py-1 text-xl font-bold">
                        {paidBonds.length}
                        <span className="font-normal text-gray-500">
                            /{contract.bonds.length}
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3">
                {auth.user && (
                    <>
                        <Link
                            href={route('contracts.send', contract.id)}
                            className="relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
                        >
                            <Mail className="ml-2 inline" />
                            البعث للزبون
                        </Link>
                    </>
                )}
                {!auth.user && !contract.signature_proof && (
                    <>
                        <button
                            onClick={() => setshowSignature(true)}
                            className="relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
                        >
                            <PenLine className="ml-2 inline" />
                            توقيع العقد
                        </button>
                    </>
                )}
                <ContractPDF contract={contract} />

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
