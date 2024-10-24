import CustomInput from '@/Components/inputs/CustomInput';
import FileInput from '@/Components/inputs/FileInput';
import TextArea from '@/Components/inputs/TextArea';
import SubmitButton from '@/Components/SubmitButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { formatIdCode } from '@/utils/functions';
import { useForm } from '@inertiajs/react';
import { Undo2 } from 'lucide-react';
function ClientsForm(props) {
    const client = props.client;

    const initialValues = client
        ? {
              full_name: client.full_name,
              phone: client.phone,
              email: client.email,
              phone2: client.phone2,
              id_code: client.id_code,
              address: client.address,
              wife_name: client.wife_name,
              wife_phone: client.wife_phone,
              notes: client.notes,
              _method: 'PATCH',
          }
        : {
              full_name: '',
              phone: '',
              email: '',
              phone2: '',
              id_code: '',
              address: '',
              wife_name: '',
              wife_phone: '',
              notes: '',
          };
    const { data, setData, post, processing, errors } = useForm({
        ...initialValues,
        id_photo_front: null,
        id_photo_back: null,
    });

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
        if (client) {
            post(route('clients.update', client.id));
        } else {
            post(route('clients.store'), {
                forceFormData: true,
            });
        }
    };
    console.log(errors.email);
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle="إضافة زبون جديد"
                headerLink={[
                    {
                        label: 'رجوع إلى قائمة زبناء',
                        url: '/clients',
                        icon: Undo2,
                    },
                ]}
            >
                <form onSubmit={submit} className="max-w-2xl py-8">
                    <div className="mb-4 flex gap-3">
                        <CustomInput
                            onChange={handleOnChange}
                            defaultValue={data.full_name}
                            label="الاسم الكامل"
                            name="full_name"
                            id="clients-full_name"
                            error={errors.full_name}
                        />
                        <CustomInput
                            label="رقم الهوية"
                            name="id_code"
                            defaultValue={data.id_code}
                            id="clients-id_code"
                            value={data.id_code}
                            error={errors.id_code}
                            onChange={(e) =>
                                setData('id_code', formatIdCode(e.target.value))
                            }
                        />
                    </div>
                    <div className="mb-4 flex gap-3">
                        <CustomInput
                            onChange={handleOnChange}
                            defaultValue={data.email}
                            label="البريد الإلكتروني"
                            placeholder="اختياري"
                            name="email"
                            id="clients-email"
                            error={errors.email}
                        />
                    </div>
                    <div className="mb-8 flex gap-3">
                        <CustomInput
                            label="رقم الهاتف"
                            name="phone"
                            defaultValue={data.phone}
                            onChange={handleOnChange}
                            error={errors.phone}
                            id="clients-phone"
                        />
                        <CustomInput
                            label="رقم واتساب"
                            name="phone2"
                            placeholder="اختياري"
                            defaultValue={data.phone2}
                            error={errors.phone2}
                            onChange={handleOnChange}
                            id="clients-phone2"
                        />
                    </div>
                    <div className="mb-4 flex gap-3">
                        <FileInput
                            id="clients-id_photo_front"
                            name="id_photo_front"
                            label="صورة الهوية (وجه)"
                            defaultImage={client?.id_photo_front}
                            error={errors.id_photo_front}
                            imageSelected={data.id_photo_front}
                            onChange={(e) =>
                                setData('id_photo_front', e.target.files[0])
                            }
                        />
                        <FileInput
                            id="clients-id_photo_back"
                            name="id_photo_back"
                            label="صورة الهوية (ظهر)"
                            imageSelected={data.id_photo_back}
                            defaultImage={client?.id_photo_back}
                            error={errors.id_photo_back}
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
                            defaultValue={data.address}
                            label="العنوان"
                            placeholder="اختياري"
                        />
                    </div>
                    <div className="mb-4 flex gap-3">
                        <CustomInput
                            label="اسم الزوجة"
                            name="wife_name"
                            onChange={handleOnChange}
                            defaultValue={data.wife_name}
                            id="clients-wife_name"
                            placeholder="اختياري"
                        />
                        <CustomInput
                            label="رقم هاتف الزوجة"
                            name="wife_phone"
                            id="clients-wife_phone"
                            defaultValue={data.wife_phone}
                            onChange={handleOnChange}
                            placeholder="اختياري"
                        />
                    </div>
                    <div className="mb-8 flex">
                        <TextArea
                            id="clients-notes"
                            name="notes"
                            onChange={handleOnChange}
                            defaultValue={data.notes}
                            label="ملاحظات"
                            placeholder="اختياري"
                        />
                    </div>
                    <div>
                        <SubmitButton loading={processing}>
                            {client ? 'تحديث' : 'إرسال'}
                        </SubmitButton>
                    </div>
                </form>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}

export default ClientsForm;
