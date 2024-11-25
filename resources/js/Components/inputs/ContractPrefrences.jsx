import TextArea from '@/Components/inputs/TextArea';
import { PlusCircle, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import CustomInput from './CustomInput';

function ContractPrefrences({ prefrences, prefrencesHandler }) {
    const [prefrencesList, setPrefrencesList] = useState(prefrences);
    const handleOnChange = (id, name, value) => {
        const newData = prefrencesList.map((ter) => {
            return ter.id === id ? { ...ter, [name]: value } : ter;
        });
        setPrefrencesList(newData);
    };
    function deleteLine(id) {
        const newList = prefrencesList.filter((ter) => {
            return ter.id !== id;
        });
        setPrefrencesList(newList);
    }
    function addLine() {
        const newList = [
            ...prefrencesList,
            {
                id: new Date().toString(),
                title: '',
                description: '',
            },
        ];
        setPrefrencesList(newList);
    }
    useEffect(() => {
        prefrencesHandler(prefrencesList);
    }, [prefrencesList]);
    return (
        <div>
            {prefrencesList.map((act, index) => {
                return (
                    <div
                        key={act.id}
                        className="mb-3 flex rounded-xl border border-gray-300 px-2 py-2"
                    >
                        <div className="w-full">
                            <CustomInput
                                label={'عنوان الوصف ' + (index + 1)}
                                id={`pref-title-${act.id}`}
                                defaultValue={act.title}
                                onBlur={(e) =>
                                    handleOnChange(
                                        act.id,
                                        'title',
                                        e.target.value,
                                    )
                                }
                            />
                            <TextArea
                                label={'تفاصيل الوصف ' + (index + 1)}
                                defaultValue={act.description}
                                id={`term-${act.id}`}
                                onBlur={(e) =>
                                    handleOnChange(
                                        act.id,
                                        'description',
                                        e.target.value,
                                    )
                                }
                            />
                        </div>

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
                className="relative top-1 my-2 w-full rounded-xl bg-gray-200 py-3 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
            >
                <PlusCircle className="ml-2 inline" />
                إضافة وصف
            </button>
        </div>
    );
}

export default ContractPrefrences;
