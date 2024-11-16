import TextArea from '@/Components/inputs/TextArea';
import SubmitButton from '@/Components/SubmitButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { router } from '@inertiajs/react';
import { Notebook, PlusCircle, Trash } from 'lucide-react';
import { useState } from 'react';

function Terms({ terms }) {
    const [termsList, setTermsList] = useState(terms);
    function submit(e) {
        e.preventDefault();
        router.post(route('terms.update'), { terms: termsList });
    }
    const handleOnChange = (value, id) => {
        const newData = termsList.map((ter) => {
            return ter.id === id ? { ...ter, terms: value } : ter;
        });
        setTermsList(newData);
    };
    function deleteLine(id) {
        const newList = termsList.filter((ter) => {
            return ter.id !== id;
        });
        setTermsList(newList);
    }
    function addLine() {
        const newList = [
            ...termsList,
            {
                id: new Date().toString(),
                terms: '',
            },
        ];
        setTermsList(newList);
    }
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
                headerTitle="شروط و أحكام"
            >
                <form onSubmit={submit}>
                    {termsList.map((act, index) => {
                        return (
                            <div
                                key={act.id}
                                className="mb-3 flex rounded-xl border border-gray-300 px-2 py-2"
                            >
                                <TextArea
                                    label={'شرط ' + (index + 1)}
                                    defaultValue={act.terms}
                                    id={`term-${act.id}`}
                                    name={`term-${act.id}`}
                                    onBlur={(e) =>
                                        handleOnChange(e.target.value, act.id)
                                    }
                                />
                                <button
                                    onClick={() => deleteLine(act.id)}
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-black"
                                >
                                    <Trash color="white" size={18} />
                                </button>
                            </div>
                        );
                    })}
                    <button
                        onClick={addLine}
                        type="button"
                        className="relative top-1 my-4 w-full rounded-xl bg-gray-200 py-3 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
                    >
                        <PlusCircle className="ml-2 inline" />
                        إضافة سطر
                    </button>
                    <SubmitButton>حفظ</SubmitButton>
                </form>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}

export default Terms;
