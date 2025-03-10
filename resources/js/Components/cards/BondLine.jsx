import {
    checkDateReturnDiff,
    formatMoroccanDate,
    generateCheckStatus,
    resizeImageForUpload,
} from '@/utils/functions';
import { Link, router } from '@inertiajs/react';
import {
    ArrowLeftRight,
    HandCoins,
    ImageIcon,
    ImageOff,
    Phone,
    Settings,
    TimerReset,
} from 'lucide-react';
import { useRef, useState } from 'react';
import Modal from '../Modal';
import PrimaryButton from '../PrimaryButton';
import BondMarkAsPaid from '../bond-modals/BondMarkAsPaid';
import BondOptionsContent from '../bond-modals/BondOptionsContent';
import CustomInput from '../inputs/CustomInput';
import OpenInWhatsapp from '../buttons/OpenInWhatsapp';

function BondLine({ bond, noActions, ranking, last }) {
    const proofImageRef = useRef();
    const currStatus = generateCheckStatus(bond.status);
    const [amount, setAmount] = useState();
    const [show, setShow] = useState(false);
    const [amountPaid, setAmountPaid] = useState();
    const lateWhatsappMessage = `
نود تذكيرك بأنه لم يتم سداد المبلغ المستحق لهذا الشهر حتى الآن. لقد تأخر السداد لمدة ${checkDateReturnDiff(bond.payement_date)}. نرجو منك تسديد المبلغ في أقرب وقت ممكن لتجنب أي رسوم إضافية أو إجراءات لاحقة`
    async function updateProofPic(e) {
        const resizedImage = await resizeImageForUpload(e.target.files[0]);
        router.post(route('bonds.update', bond.id), {
            proof_image: resizedImage,
            _method: 'PATCH',
        });
    }
    const modalContents = {
        markAsPaid: {
            text: (
                <BondMarkAsPaid bond={bond} closeHandler={() => setShow('')} />
            ),
        },
        delayBond: {
            text: 'هل أنت متأكد من أنك تريد تأخير هذا الدفع إلى بداية الشهر القادم؟',
            action: delayBond,
        },
        updateBond: {
            text: (
                <BondOptionsContent
                    closeHandler={() => setShow('')}
                    proof={bond}
                />
            ),
        },
        showProof: {
            text: (
                <>
                    <img
                        src={bond.proof_image}
                        className="md:max-h-[450px]"
                        alt="لا يوجد صورة"
                    />
                    <p>هل تريد تغيير الصورة؟</p>
                </>
            ),
            action: () => proofImageRef.current.click(),
        },
        partPayement: {
            text: (
                <CustomInput
                    label="أدخل الجزء المدفوع"
                    placeholder="(ستتم إضافة الباقي للشهر المقبل)"
                    onChange={(e) => setAmountPaid(e.target.value)}
                    type="number"
                    min="0"
                />
            ),
            action: partPayement,
        },
        changeAmount: {
            text: (
                <CustomInput
                    label="أدخل مبلغ الدفعة"
                    placeholder="(ستتم تقسيم الباقي للأشهر المقبلة)"
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    min="0"
                />
            ),
            action: changeAmount,
        },
    };

    function delayBond() {
        router.post(
            `/bonds/${bond.id}/delay`,
            { _method: 'PATCH' },
            {
                onStart: () => setShow(false),
            },
        );
    }
    function partPayement() {
        router.post(
            `/bonds/${bond.id}/part`,
            { amount_paid: amountPaid, _method: 'PATCH' },
            {
                onStart: () => setShow(false),
            },
        );
    }
    function changeAmount() {
        router.post(
            `/bonds/${bond.id}`,
            { amount: amount, _method: 'PATCH' },
            {
                onStart: () => setShow(false),
            },
        );
    }
    return (
        <>
            <div
                className={`mb-4 rounded-xl border px-3 py-4 transition-colors duration-500 ${bond.status == 'paid' ? 'border-green-500 bg-green-100' : 'bg-white'}`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {!noActions ? (
                            <div>
                                <button
                                    onClick={() => setShow('markAsPaid')}
                                    className={`${bond.status ? currStatus.bg : 'bg-gray-200'} flex h-9 w-9 items-center justify-center rounded-xl transition-colors`}
                                >
                                    {bond.status && currStatus ? (
                                        <currStatus.icon
                                            className={`transition-all duration-500 ${bond.status ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                                        />
                                    ) : null}
                                </button>
                            </div>
                        ) : bond.action_done === 'دفعة متأخرة' ? (
                            <p className="border-l border-l-gray-500 pl-3">
                                دفعة متأخرة
                            </p>
                        ) : (
                            <p className="border-l border-l-gray-500 pl-3">
                                الدفعة {ranking}
                            </p>
                        )}
                        <div>
                            <span className="block font-medium">
                                {parseFloat(bond.amount).toFixed(2)} درهم{' '}
                                {!bond.postable && (
                                    <span className="mb-4 whitespace-nowrap rounded-full bg-orange-100 px-4 py-1 text-center text-xs text-orange-800">
                                        شيك ضمان
                                    </span>
                                )}{' '}
                                {bond.action_done && !noActions && (
                                    <span className="mb-4 whitespace-nowrap rounded-full bg-violet-100 px-2 py-1 text-center text-xs text-violet-800">
                                        {bond.action_done}
                                    </span>
                                )}
                            </span>

                            <span
                                className={`text-xs ${new Date(bond.payement_date) < new Date() && !bond.status ? 'text-red-500' : 'text-gray-500'}`}
                            >
                                {!bond.status
                                    ? `${formatMoroccanDate(
                                        new Date(bond.payement_date),
                                    )} (${checkDateReturnDiff(bond.payement_date)})`
                                    : formatMoroccanDate(
                                        new Date(bond.payement_date),
                                    )}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-1">
                        {bond.contract?.client.id && (
                            <>
                                <Link
                                    className="rounded-lg border border-gray-300 bg-gray-100 px-2 py-2 text-xs text-gray-700 transition-colors hover:bg-black hover:text-white"
                                    href={route(
                                        'contracts.show',
                                        bond.contract.id,
                                    )}
                                >
                                    {bond.contract.client.nickname || bond.contract.client.full_name}
                                </Link>
                                {/* <a
                                    className="w-10 rounded-lg border border-gray-300 bg-gray-100 px-2 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white"
                                    href={'tel:' + bond.contract.client.phone}
                                >
                                    <W className="inline-block" size={20} />
                                </a> */}
                                <OpenInWhatsapp phone={bond.contract.client.phone} text={lateWhatsappMessage} className="w-11 rounded-lg border border-gray-300 bg-gray-100 px-2 py-2"
                                >
                                    <img className="w-20" src="/icons/wa.png" alt="whatsapp icon" />

                                </OpenInWhatsapp>
                            </>
                        )}

                        {!noActions && (
                            <>
                                <button
                                    className="w-10 rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white"
                                    onClick={() => setShow('showProof')}
                                >
                                    {bond.proof_image ? (
                                        <ImageIcon
                                            className="inline-block"
                                            size={20}
                                        />
                                    ) : (
                                        <ImageOff
                                            className="inline-block"
                                            size={20}
                                        />
                                    )}
                                </button>
                                <button
                                    onClick={() => setShow('updateBond')}
                                    className="w-10 rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white"
                                >
                                    <Settings
                                        className="inline-block"
                                        size={20}
                                    />
                                </button>
                            </>
                        )}
                        {noActions && (
                            <div className="flex flex-col">
                                {bond.action_done && (
                                    <span className="mb-4 whitespace-nowrap rounded-full bg-violet-100 px-2 py-1 text-center text-xs text-violet-800">
                                        {bond.action_done}
                                    </span>
                                )}
                                {bond.status && (
                                    <span
                                        className={`mb-4 whitespace-nowrap rounded-full px-2 py-1 text-center text-xs ${currStatus.bg}`}
                                    >
                                        {currStatus.label}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    <input
                        ref={proofImageRef}
                        onChange={updateProofPic}
                        className="hidden"
                        type="file"
                    />
                </div>
                {!bond.status && !noActions && (
                    <div className="mt-6 flex gap-2 text-sm">
                        <button
                            onClick={() => setShow('delayBond')}
                            className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white"
                        >
                            <TimerReset className="ml-2 inline-block" /> تأجيل
                            الدفعة
                        </button>

                        {!last && (
                            <button
                                onClick={() => setShow('changeAmount')}
                                className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white"
                            >
                                <ArrowLeftRight className="ml-2 inline-block" />{' '}
                                تغيير المبلغ
                            </button>
                        )}
                        <button
                            onClick={() => setShow('partPayement')}
                            className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white"
                        >
                            <HandCoins className="ml-2 inline-block" /> دفع جزئي
                        </button>
                    </div>
                )}
            </div>
            <Modal maxWidth="lg" show={show}>
                <div className="px-8 py-10">
                    <h2 className="mb-5">{modalContents[show]?.text}</h2>
                    <div className="flex gap-4">
                        {modalContents[show]?.action && (
                            <PrimaryButton
                                className="text-xl"
                                onClick={modalContents[show]?.action}
                            >
                                نعم
                            </PrimaryButton>
                        )}
                        <PrimaryButton
                            className="text-xl"
                            onClick={() => setShow(false)}
                        >
                            رجوع
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default BondLine;
