import TextArea from '@/Components/inputs/TextArea';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { Notebook } from 'lucide-react';

function Terms({ terms }) {
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
                <div>
                    {terms.map((act) => {
                        return (
                            <div
                                key={act.id}
                                className="mb-3 flex rounded-xl border border-gray-300 px-2 py-2"
                            >
                                <TextArea
                                    label={act.id}
                                    defaultValue={act.terms}
                                    id={`term-${act.id}`}
                                    name={`term-${act.id}`}
                                    onChange={handleOnChange}
                                />
                            </div>
                        );
                    })}
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}

export default Terms;
