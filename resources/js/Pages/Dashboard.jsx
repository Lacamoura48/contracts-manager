import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <InsideLayout headerTitle="الرئيسية">
                You're logged in!
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
