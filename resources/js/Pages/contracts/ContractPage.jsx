import CopyButton from '@/Components/buttons/CopyButton';
import OpenInWhatsapp from '@/Components/buttons/OpenInWhatsapp';
import ContractPDF from '@/Components/buttons/pdfs/ContractPDF';
import BondsList from '@/Components/lists/BondsList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { formatMoroccanDate } from '@/utils/functions';
import { Link, router } from '@inertiajs/react';
import {
    Banknote,
    ClipboardPenLine,
    Info,
    Mail,
    Paperclip,
    PenBox,
    Phone,
} from 'lucide-react';
export default function ContractPage({ contract, terms, auth }) {
    const phoneNum = contract.client.phone.split(' ')[0];
    const confirmationUrl =
        window.location.origin + '/contracts/live/' + contract.uuid;
    function resetSignature() {
        router.post(route('contracts.signReset', contract.id), {
            _method: 'patch',
        });
    }

    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle={
                    <p>
                        <span className="mb-3 block">الزبون</span>
                        <Link
                            className="inline"
                            href={route('clients.show', contract.client.id)}
                        >
                            <Info size={30} className="ml-2 inline" />
                        </Link>
                        <span className="rounded-full bg-black px-3 py-1 text-2xl text-white">
                            {contract.client.full_name}
                        </span>
                    </p>
                }
                rightLink={{
                    label: 'تعديل على العقد',
                    url: route('contracts.edit', contract.id),
                    icon: PenBox,
                }}
            >
                <div className="max-w-2xl">
                    <p className="mb-4 text-center text-sm text-gray-400 md:text-start">
                        أضيف العقد يوم{' '}
                        {formatMoroccanDate(new Date(contract.created_at))}
                    </p>
                    <div className="mb-4 grid grid-cols-3 justify-center md:justify-start md:text-start">
                        <Link
                            href={`/contracts/${contract.id}/files?type=files`}
                            className="relative top-1 flex flex-col items-center rounded-full"
                        >
                            <Paperclip size={35} />
                            <span className="mt-1 rounded-full bg-black px-3 py-1 text-sm text-white">
                                إضافة ملحق
                            </span>
                        </Link>
                        <Link
                            href={`/contracts/${contract.id}/files?type=notes`}
                            className="relative top-1 flex flex-col items-center rounded-full"
                        >
                            <ClipboardPenLine size={35} />
                            <span className="mt-1 rounded-full bg-black px-3 py-1 text-sm text-white">
                                إضافة ملاحظة
                            </span>
                        </Link>
                        <ContractPDF
                            contractPage
                            contract={contract}
                            terms={terms}
                            auth={auth}
                        />
                    </div>
                    <div className="mb-4 grid grid-cols-3 justify-center md:justify-start md:text-start">
                        <CopyButton
                            textToCopy={confirmationUrl}
                            label="نسخ رابط العقد"
                        />
                        <Link
                            href={route('contracts.send', contract.id)}
                            className="relative top-1 flex flex-col items-center rounded-full"
                        >
                            <Mail size={35} />
                            <span className="mt-1 rounded-full bg-black px-3 py-1 text-sm text-white">
                                البعث للزبون
                            </span>
                        </Link>
                        <OpenInWhatsapp
                            phone={contract.client.phone}
                            text={`${encodeURIComponent(confirmationUrl)}%0A%0A${contract.user.whatsapp_msg}`}
                        />
                    </div>

                    <a
                        href={`tel:+971${phoneNum}`}
                        className="mx-auto mt-5 flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 font-bold md:mx-0"
                    >
                        <Phone size={20} /> {contract.client.phone}
                    </a>
                    <hr className="my-8" />
                    <h2 className="mb-5 text-xl font-bold">
                        {' '}
                        توقيع الزبون:{' '}
                        <span className="rounded-lg bg-black px-3 py-1 text-white">
                            {contract.signature && contract.signature_proof
                                ? 'مكتمل'
                                : contract.signature
                                  ? 'غير مكتمل'
                                  : 'في الإنتظار'}
                        </span>
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <h2 className="text-3xl font-bold">
                            {contract.bonds_count} دفعات
                        </h2>
                        <p className="flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 md:mx-0">
                            <Banknote size={20} /> المبلغ الإجمالي :{' '}
                            {parseFloat(contract.bonds_sum_amount).toFixed(2)}
                        </p>
                    </div>
                    <div>
                        <BondsList bonds={contract.bonds} />
                    </div>
                    <div className="my-8">
                        <div className="mt-6 flex justify-between gap-2">
                            {contract.signature && (
                                <div className="flex-1 rounded-xl bg-gray-200">
                                    <img
                                        className=""
                                        src={contract.signature}
                                        alt="signature"
                                    />
                                </div>
                            )}
                            {contract.signature_proof && (
                                <div className="flex-1 rounded-xl bg-gray-200">
                                    <img
                                        className=""
                                        src={contract.signature_proof}
                                        alt="signature-proof"
                                    />
                                </div>
                            )}
                        </div>
                        {contract.signature && (
                            <button
                                onClick={resetSignature}
                                type="button"
                                className="my-3 underline"
                            >
                                إعادة تهيئة التوقيع
                            </button>
                        )}
                    </div>
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
