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
                <div className="relative mb-4 rounded-2xl bg-black px-3 py-4">
                    <h2 className="mb-4 text-xl font-semibold text-white">
                        مجموع العقود الحالية
                    </h2>
                    <div className="flex items-center gap-3">
                        <Scroll color="white" size={40} />
                        <span className="text-6xl font-bold text-white">
                            {String(data.contracts_count).padStart(2, '0')}
                        </span>
                    </div>
                    <Link
                        href={route('contracts.index')}
                        className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
                    >
                        <ExternalLink />
                    </Link>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-bold">
                        حالات دفعات هذا الشهر
                    </h2>
                    <div className="grid grid-cols-4 gap-2">
                        <div className="flex aspect-square flex-col items-center justify-center rounded-xl bg-green-100 text-4xl font-bold text-green-500">
                            <p>
                                {String(data.paid_contracts).padStart(2, '0')}
                            </p>
                            <p className="text-sm font-normal">مدفوعة</p>
                        </div>
                        <div className="flex aspect-square flex-col items-center justify-center rounded-xl bg-blue-100 text-4xl font-bold text-blue-500">
                            {String(data.current_contracts).padStart(2, '0')}
                            <p className="text-sm font-normal">مستحقة</p>
                        </div>
                        <div className="flex aspect-square flex-col items-center justify-center rounded-xl bg-orange-100 text-4xl font-bold text-yellow-600">
                            {String(data.late_contracts).padStart(2, '0')}
                            <p className="text-sm font-normal">متأخرة</p>
                        </div>
                        <div className="flex aspect-square flex-col items-center justify-center rounded-xl bg-red-100 text-4xl font-bold text-red-500">
                            {String(data.very_late_contracts).padStart(2, '0')}
                            <p className="text-sm font-normal">متعثرة الدفع</p>
                        </div>
                    </div>
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
