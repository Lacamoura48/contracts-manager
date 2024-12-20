import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { Link } from '@inertiajs/react';
import { Handshake, Scroll, Users } from 'lucide-react';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    الملف الشخصي
                </h2>
            }
        >
            <InsideLayout
                noBack
                headerLink={[
                    {
                        label: 'سجل الأنشطة',
                        url: route('settings.activities'),
                        icon: Scroll,
                    },
                    {
                        label: 'المدراء',
                        url: route('profile.index'),
                        icon: Users,
                    },
                    {
                        label: 'شروط و أحكام',
                        url: route('terms.edit'),
                        icon: Handshake,
                    },
                ]}
                headerTitle="الملف الشخصي"
            >
                <div className="py-12">
                    <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>
                        <div>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="rounded-lg bg-red-700 px-6 py-2 text-white"
                            >
                                تسجيل الخروج
                            </Link>
                        </div>
                    </div>
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
