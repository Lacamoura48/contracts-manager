import { formatMoroccanDate } from '@/utils/functions';
import { router } from '@inertiajs/react';
import { ArrowBigUpDash, CheckCircle, MessageCircleOff, X } from 'lucide-react';

export default function BondMarkAsPaid({ bond, closeHandler }) {
    function markBondAsPaid(status) {
        router.post(
            `/bonds/${bond.id}`,
            {
                status: status == 'none' ? null : status,
                _method: 'PATCH',
            },
            { onStart: closeHandler },
        );
    }
    return (
        <div>
            <p className="mb-4">
                تريد إثبات الدفع الخاص بتاريخ{' '}
                {formatMoroccanDate(new Date(bond.payement_date))}
            </p>
            {bond.postable == 1 ? (
                <div className="flex flex-col gap-4 text-sm">
                    {bond.status !== 'posted' && (
                        <button
                            className="rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white"
                            onClick={() => markBondAsPaid('posted')}
                        >
                            <ArrowBigUpDash className="ml-2 inline-block" />
                            تم ايداع الشيك
                        </button>
                    )}
                    {bond.status !== 'paid' && (
                        <button
                            onClick={() => markBondAsPaid('paid')}
                            className="rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white"
                        >
                            <CheckCircle className="ml-2 inline-block" />
                            تم صرف الشيك
                        </button>
                    )}
                    {bond.status !== 'denied' && (
                        <button
                            onClick={() => markBondAsPaid('denied')}
                            className="hover:bg-red rounded-lg border border-red-300 bg-red-100 py-2 text-red-700 transition-colors hover:text-red-500"
                        >
                            <X className="ml-2 inline-block" />
                            شيك مرتجع
                        </button>
                    )}
                    {bond.status !== null && (
                        <button
                            onClick={() => markBondAsPaid('none')}
                            className="hover:bg-red rounded-lg border border-slate-300 bg-slate-100 py-2 text-slate-700 transition-colors hover:text-slate-500"
                        >
                            <MessageCircleOff className="ml-2 inline-block" />
                            بدون الحالة
                        </button>
                    )}
                </div>
            ) : (
                <div className="flex flex-col gap-4 text-sm">
                    {bond.status !== 'paid' ? (
                        <button
                            onClick={() => markBondAsPaid('paid')}
                            className="rounded-lg border border-gray-300 bg-gray-100 py-2 text-gray-700 transition-colors hover:bg-black hover:text-white"
                        >
                            <CheckCircle className="ml-2 inline-block" />
                            إثبات الدفع
                        </button>
                    ) : (
                        <button
                            onClick={() => markBondAsPaid('none')}
                            className="hover:bg-red rounded-lg border border-slate-300 bg-slate-100 py-2 text-slate-700 transition-colors hover:text-slate-500"
                        >
                            <MessageCircleOff className="ml-2 inline-block" />
                            إلغاء الدفع
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
