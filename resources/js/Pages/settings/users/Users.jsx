import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { Link } from '@inertiajs/react';
import { Notebook, Settings, Trash, UserPlus } from 'lucide-react';

function Users({ users }) {
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerLink={[
                    {
                        label: 'عودة للملف الشخصي',
                        url: route('profile.edit'),
                        icon: Notebook,
                    },
                    {
                        label: 'إضافة مدير',
                        url: route('profile.create'),
                        icon: UserPlus,
                    },
                ]}
                headerTitle="المدراء"
            >
                <div>
                    {users.map((user) => {
                        return (
                            <div
                                key={user.id}
                                className="mb-3 flex items-center justify-between rounded-xl border border-gray-300 px-2 py-2"
                            >
                                <p>{user.name}</p>
                                <div className="flex gap-2">
                                    <Link
                                        href={route('users.edit', user.id)}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black"
                                    >
                                        <Settings color="white" size={18} />
                                    </Link>
                                    <Link
                                        href={route('users.destroy', user.id)}
                                        as="button"
                                        method="delete"
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black"
                                    >
                                        <Trash color="white" size={18} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}

export default Users;
