import ActivitiesPDF from '@/Components/buttons/pdfs/ActivitiesPDF';
import ActivitiesFilterSection from '@/Components/filters/ActivitiesFilterSection';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { dateTimeToArabic } from '@/utils/functions';
import { Notebook } from 'lucide-react';

function Activities({ activities }) {
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerLink={[
                    {
                        label: 'عودة للملف الشخصي',
                        url: route('profile.edit'),
                        icon: Notebook,
                    },
                ]}
                headerTitle="سجل الأنشطة"
            >
                <ActivitiesPDF activities={activities} />
                <div>
                    <ActivitiesFilterSection />
                    {activities.map((act) => {
                        return (
                            <div
                                key={act.id}
                                className="mb-3 rounded-xl border border-gray-300 px-2 py-2"
                            >
                                <p className="text-xs text-gray-600">
                                    {dateTimeToArabic(act.created_at)}
                                </p>
                                <p>{act.description}</p>
                            </div>
                        );
                    })}
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}

export default Activities;
