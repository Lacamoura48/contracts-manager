import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { Link } from '@inertiajs/react';
import { ExternalLink, Scroll, User } from 'lucide-react';

export default function Dashboard({ data }) {
    console.log(data);

    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle="الرئيسية"
                noBack
                headerLink={[
                    {
                        label: 'إضافة عقد جديد',
                        url: route('contracts.create'),
                        icon: Scroll,
                    },
                    {
                        label: 'إضافة زبون جديد',
                        url: route('clients.create'),
                        icon: User,
                    },
                ]}
            >
                <div className='grid sm:grid-cols-4 mb-4 grid-cols-2 gap-2'>
                    <div className="relative rounded-2xl bg-black px-3 py-4">
                        <h2 className="mb-4 sm:text-xl  font-semibold text-white">
                            مجموع العقود الحالية
                        </h2>
                        <div className="flex items-center gap-3">
                            <Scroll color="white" size={25} />
                            <span className="sm:text-5xl text-3xl font-bold text-white">
                                {String(data.contracts_count).padStart(2, '0')}
                            </span>
                        </div>
                        <Link
                            href={route('contracts.index')}
                            className="absolute bottom-3 left-3 flex size-8 items-center justify-center rounded-full bg-white text-black"
                        >
                            <ExternalLink />
                        </Link>
                    </div>
                    <div className="relative rounded-2xl bg-black px-3 py-4">
                        <h2 className="mb-4 sm:text-xl text-sm font-semibold text-white">
                            مبلغ دفعات القادمة
                        </h2>
                        <span className="sm:text-4xl text-2xl font-bold text-white">
                                {parseFloat(data.sum_unpaid_amount).toFixed(1)}
                            </span>
                    </div>
                    <div className="relative rounded-2xl bg-black px-3 py-4">
                        <h2 className="mb-4 sm:text-xl text-sm font-semibold text-white">
                            دفعات الشهر المدفوعة
                        </h2>
                        <span className="sm:text-4xl text-2xl font-bold text-white">
                                {parseFloat(data.sum_monthly_paid_amount).toFixed(1)}
                            </span>
                    </div>
                    <div className="relative rounded-2xl bg-black px-3 py-4">
                        <h2 className="mb-4 sm:text-xl text-sm font-semibold text-white">
                            دفعات الشهر الغير المدفوعة
                        </h2>
                        <span className="sm:text-4xl text-2xl font-bold text-white">
                                {parseFloat(data.sum_monthly_unpaid_amount).toFixed(1)}
                            </span>
                    </div>
                </div>

                <div>
                    <h2 className="mb-3 sm:text-2xl text-xl font-bold">
                        حالات دفعات هذا الشهر
                    </h2>
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-2">
                        <Link
                            href={'/bonds?status=paid'}
                            className="flex aspect-[2] flex-col items-center justify-center rounded-xl bg-green-100 text-4xl font-bold text-green-500"
                        >
                            <p>
                                {String(data.paid_contracts).padStart(2, '0')}
                            </p>
                            <p className="text-sm font-normal">مدفوعة</p>
                        </Link>
                        <Link
                            href={'/bonds?status=pending'}
                            className="flex aspect-[2] flex-col items-center justify-center rounded-xl bg-blue-100 text-4xl font-bold text-blue-500"
                        >
                            {String(data.current_contracts).padStart(2, '0')}
                            <p className="text-sm font-normal">مستحقة</p>
                        </Link>
                        <Link
                            href={'/bonds?status=late'}
                            className="flex aspect-[2] flex-col items-center justify-center rounded-xl bg-orange-100 text-4xl font-bold text-yellow-600"
                        >
                            {String(data.late_contracts).padStart(2, '0')}
                            <p className="text-sm font-normal">متأخرة</p>
                        </Link>
                        <Link
                            href={'/bonds?status=very_late'}
                            className="flex aspect-[2] flex-col items-center justify-center rounded-xl bg-red-100 text-4xl font-bold text-red-500"
                        >
                            {String(data.very_late_contracts).padStart(2, '0')}
                            <p className="text-sm font-normal">متعثرة الدفع</p>
                        </Link>
                    </div>
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
