import { formatMoroccanDate } from '@/utils/functions';
import { router } from '@inertiajs/react';
import { Check, HandCoins, ReceiptText, TimerReset } from 'lucide-react';
import { useRef, useState } from 'react';
import Modal from '../Modal';
import PrimaryButton from '../PrimaryButton';
import CustomInput from '../inputs/CustomInput';

function BondLine({ bond, current, lastBond }) {
    const proofImageRef = useRef();
    function updateProofPic(e) {
        router.post(route('bonds.update', bond.id), {
            proof_image: e.target.files[0],
            _method: 'PATCH',
        });
    }
    const modalContents = {
        markAsPaid: {
            text: `تريد إثبات الدفع الخاص بتاريخ 
                        ${formatMoroccanDate(new Date(bond.payement_date))}`,
            action: markBondAsPaid,
        },
        markAsUnpaid: {
            text: `تريد إلغاء الدفع الخاص بتاريخ 
            ${formatMoroccanDate(new Date(bond.payement_date))}`,
            action: markBondAsPaid,
        },
        delayBond: {
            text: 'هل أنت متأكد من أنك تريد تأخير هذا الدفع إلى بداية الشهر القادم؟',
            action: delayBond,
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
    };
    const [show, setShow] = useState(false);
    const [amountPaid, setAmountPaid] = useState();
    function markBondAsPaid() {
        router.post(
            `/bonds/${bond.id}`,
            {
                status: bond.status == 'paid' ? '' : 'paid',
                _method: 'PATCH',
            },
            { onStart: () => setShow(false) },
        );
    }
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
    return (
        <div
            className={`mb-3 rounded-xl border px-3 py-4 transition-colors duration-500 ${bond.status ? 'border-green-500 bg-green-100' : ''}`}
        >
            <div className="flex items-center justify-between">
                <div className="small:text-xs me-5 rounded-r-xl text-start">
                    <button
                        onClick={() =>
                            setShow(bond.status ? 'markAsUnpaid' : 'markAsPaid')
                        }
                        className={`${bond.status ? 'bg-green-500' : 'bg-gray-200'} flex h-8 w-8 items-center justify-center rounded-xl transition-colors`}
                    >
                        <Check
                            color="white"
                            className={`transition-all duration-500 ${bond.status ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                        />
                    </button>
                </div>
                <div className="small:text-xs me-5 text-start">
                    {bond.amount} درهم
                </div>
                <div className="small:text-xs me-5 rounded-l-xl text-start">
                    {formatMoroccanDate(new Date(bond.payement_date))}
                </div>
                <button onClick={() => setShow('showProof')}>
                    <ReceiptText />
                </button>
                <input
                    ref={proofImageRef}
                    onChange={updateProofPic}
                    className="hidden"
                    type="file"
                />
            </div>
            {current && !bond.status && (
                <div className="mt-6 flex gap-2">
                    <button
                        onClick={() => setShow('delayBond')}
                        className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white"
                    >
                        <TimerReset className="ml-2 inline-block" /> تأجيل
                        الدفعة
                    </button>
                    {!lastBond && (
                        <button
                            onClick={() => setShow('partPayement')}
                            className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white"
                        >
                            <HandCoins className="ml-2 inline-block" /> دفع جزئي
                        </button>
                    )}
                </div>
            )}
            <Modal show={show}>
                <div className="px-8 py-10">
                    <h2 className="mb-5 text-2xl font-bold">
                        {modalContents[show]?.text}
                    </h2>
                    <div className="flex gap-4">
                        <PrimaryButton
                            className="text-xl"
                            onClick={modalContents[show]?.action}
                        >
                            نعم
                        </PrimaryButton>
                        <PrimaryButton
                            className="text-xl"
                            onClick={() => setShow(false)}
                        >
                            رجوع
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default BondLine;
