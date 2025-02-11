import CustomInput from '@/Components/inputs/CustomInput';
import CustomSelect from '@/Components/inputs/CustomSelect';
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
              nickname: client.nickname,
              phone: client.phone,
              email: client.email,
              phone2: client.phone2,
              id_code: client.id_code,
              wife_name: client.wife_name,
              wife_phone: client.wife_phone,
              notes: client.notes,
              state: client.state,
              building: client.building,
              appart: client.appart,
              location: client.location,
              area: client.area,
              _method: 'PATCH',
          }
        : {
              full_name: '',
              nickname: '',
              phone: '',
              email: '',
              phone2: '',
              id_code: '',
              address: '',
              wife_name: '',
              wife_phone: '',
              notes: '',
              state: 'إمارة أبوظبي',
              building: '',
              appart: '',
              location: '',
              area: '',
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
                    <div className="mb-4">
                        <CustomInput
                            onChange={handleOnChange}
                            defaultValue={data.nickname}
                            label="اللقب"
                            placeholder="اختياري"
                            name="nickname"
                            id="users-nickname"
                            error={errors.nickname}
                            required
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
                        <div className="relative w-full">
                            {!client && (
                                <span className="absolute left-3 top-9">
                                    971+
                                </span>
                            )}
                            <label
                                className="mb-1 block"
                                htmlFor="clients-phone"
                            >
                                رقم الهاتف
                            </label>
                            <input
                                className={`w-full border-none px-2 py-2 ${!client && 'pl-[3.2rem]'} text-left accent-black placeholder:text-gray-400 focus:ring-black ${
                                    errors.phone ? 'bg-red-100' : 'bg-gray-100'
                                } placeholder:text-placeholder rounded-lg`}
                                name="phone"
                                defaultValue={data.phone}
                                onChange={handleOnChange}
                                id="clients-phone"
                            />
                        </div>

                        <CustomInput
                            label="رقم ثانوي"
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
                    <div className="mb-4">
                        <h2 className="mb-3 text-2xl font-bold">العنوان</h2>
                        <div className="mb-4 flex gap-2">
                            <CustomSelect
                                onChange={handleOnChange}
                                defaultValue={data.state}
                                name="state"
                                id="clients-state"
                                label="الإمارة"
                            >
                                <option value="إمارة أبوظبي">
                                    إمارة أبوظبي
                                </option>
                                <option value="إمارة دبي">إمارة دبي</option>
                                <option value="إمارة الشارقة">
                                    إمارة الشارقة
                                </option>
                                <option value="إمارة عجمان">إمارة عجمان</option>
                                <option value="إمارة أم القيوين">
                                    إمارة أم القيوين
                                </option>
                                <option value="إمارة رأس الخيمة">
                                    إمارة رأس الخيمة
                                </option>
                                <option value="إمارة الفجيرة">
                                    إمارة الفجيرة
                                </option>
                            </CustomSelect>
                            <CustomInput
                                label="الجهة"
                                name="area"
                                id="clients-area"
                                defaultValue={data.area}
                                onChange={handleOnChange}
                                placeholder="اختياري"
                            />
                        </div>
                        <div className="mb-4 flex gap-2">
                            <CustomInput
                                label="رقم/اسم البناية"
                                name="building"
                                id="clients-building"
                                defaultValue={data.building}
                                onChange={handleOnChange}
                                placeholder="اختياري"
                            />
                            <CustomInput
                                label="رقم الشقة"
                                name="appart"
                                id="clients-appart"
                                defaultValue={data.appart}
                                onChange={handleOnChange}
                                placeholder="اختياري"
                            />
                        </div>
                        <div>
                            <CustomInput
                                label="Map location"
                                name="location"
                                id="clients-location"
                                defaultValue={data.location}
                                onChange={handleOnChange}
                                placeholder="اختياري"
                            />
                        </div>
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
