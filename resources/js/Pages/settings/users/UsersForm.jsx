import CustomInput from '@/Components/inputs/CustomInput';
import SubmitButton from '@/Components/SubmitButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { useForm } from '@inertiajs/react';
import { Undo2 } from 'lucide-react';

function UsersForm(props) {
    const user = props.user;

    const initialValues = user
        ? {
              name: user.name,
              email: user.email,
              company: user.company,
              code: user.code,
              phone: user.phone,
              address: user.address,
              whatsapp_msg: user.whatsapp_msg,
              passowrd: '',
              passowrd_confirmation: '',
              _method: 'PATCH',
          }
        : {
              name: '',
              email: '',
              company: '',
              code: '',
              phone: '',
              address: '',
              passowrd: '',
              passowrd_confirmation: '',
          };
    const { data, setData, post, processing, errors } = useForm({
        ...initialValues,
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
        if (user) {
            post(route('users.update', user.id));
        } else {
            post(route('profile.store'));
        }
    };
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle="إضافة مدير جديد"
                headerLink={[
                    {
                        label: 'رجوع إلى قائمة المدراء',
                        url: route('profile.index'),
                        icon: Undo2,
                    },
                ]}
            >
                <form onSubmit={submit} className="max-w-2xl py-8">
                    <div className="mb-4">
                        <CustomInput
                            onChange={handleOnChange}
                            defaultValue={data.name}
                            label="الاسم الكامل"
                            name="name"
                            id="users-name"
                            error={errors.name}
                            required
                        />
                    </div>
                    <div className="mb-4 flex gap-3">
                        <CustomInput
                            onChange={handleOnChange}
                            defaultValue={data.email}
                            label="البريد الإلكتروني"
                            name="email"
                            id="users-email"
                            error={errors.email}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <CustomInput
                            onChange={handleOnChange}
                            defaultValue={data.company}
                            label="اسم الشركة"
                            name="company"
                            placeholder="اختياري"
                            id="users-company"
                            error={errors.company}
                        />
                    </div>
                    <div className="mb-4">
                        <CustomInput
                            label="رقم الرخصة"
                            name="code"
                            defaultValue={data.code}
                            id="users-code"
                            placeholder="اختياري"
                            value={data.code}
                            error={errors.code}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="mb-8">
                        <CustomInput
                            label="رقم الهاتف"
                            name="phone"
                            placeholder="اختياري"
                            defaultValue={data.phone}
                            error={errors.phone}
                            onChange={handleOnChange}
                            id="users-phone"
                        />
                    </div>
                    <div className="mb-8">
                        <CustomInput
                            label="عنوان الشركة"
                            name="address"
                            placeholder="اختياري"
                            defaultValue={data.address}
                            error={errors.address}
                            onChange={handleOnChange}
                            id="users-address"
                        />
                    </div>
                    <div className="mb-8 flex gap-2">
                        <CustomInput
                            label="كلمة السر"
                            name="password"
                            defaultValue={data.password}
                            error={errors.password}
                            onChange={handleOnChange}
                            id="users-password"
                            type="password"
                        />
                        <CustomInput
                            label="إعادة كلمة السر"
                            name="password_confirmation"
                            defaultValue={data.password_confirmation}
                            error={errors.password_confirmation}
                            onChange={handleOnChange}
                            id="users-password_confirmation"
                            type="password"
                        />
                    </div>

                    <div>
                        <SubmitButton loading={processing}>
                            {user ? 'تحديث' : 'إرسال'}
                        </SubmitButton>
                    </div>
                </form>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}

export default UsersForm;
