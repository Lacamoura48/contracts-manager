import CustomInput from '@/Components/inputs/CustomInput';
import FileInput from '@/Components/inputs/FileInput';
import TextArea from '@/Components/inputs/TextArea';
import SubmitButton from '@/Components/SubmitButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { formatIdCode } from '@/utils/functions';
import { useForm } from '@inertiajs/react';
function ClientsForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        phone: '06',
        id_code: '',
        id_photo_front: null,
        id_photo_back: null,
        address: '',
        wife_name: '',
        wife_phone: '',
    });
    console.log(errors);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value,
        );
    };
    const submit = (e) => {
        e.preventDefault();
        post(route('clients.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
            forceFormData: true,
        });
    };
    return (
        <AuthenticatedLayout>
            <InsideLayout headerTitle="إضافة زبون جديد">
                <form onSubmit={submit} className="py-8">
                    <div className="mb-4 flex gap-3">
                        <CustomInput
                            onChange={handleOnChange}
                            label="الاسم الكامل"
                            name="full_name"
                            id="clients-full_name"
                        />
                    </div>
                    <div className="mb-8 flex gap-3">
                        <CustomInput
                            label="رقم الهوية"
                            name="id_code"
                            id="clients-id_code"
                            value={data.id_code}
                            onChange={(e) =>
                                setData('id_code', formatIdCode(e.target.value))
                            }
                        />
                        <CustomInput
                            label="رقم الهاتف"
                            name="phone"
                            onChange={handleOnChange}
                            id="clients-phone"
                        />
                    </div>
                    <div className="mb-4 flex gap-3">
                        <FileInput
                            id="clients-id_photo_front"
                            name="id_photo_front"
                            label="صورة الهوية (وجه)"
                            onChange={(e) =>
                                setData('id_photo_front', e.target.files[0])
                            }
                        />
                        <FileInput
                            id="clients-id_photo_back"
                            name="id_photo_back"
                            label="صورة الهوية (ظهر)"
                            onChange={(e) =>
                                setData('id_photo_back', e.target.files[0])
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <TextArea
                            id="clients-address"
                            name="address"
                            onChange={handleOnChange}
                            label="العنوان"
                        />
                    </div>
                    <div className="mb-8 flex gap-3">
                        <CustomInput
                            label="اسم الزوجة"
                            name="wife_name"
                            onChange={handleOnChange}
                            id="clients-wife_name"
                        />
                        <CustomInput
                            label="رقم هاتف الزوجة"
                            name="wife_phone"
                            id="clients-wife_phone"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <SubmitButton>إرسال</SubmitButton>
                    </div>
                </form>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}

export default ClientsForm;
