import CustomInput from '@/Components/inputs/CustomInput';
import SubmitButton from '@/Components/SubmitButton';
import { formatIdCode } from '@/utils/functions';
import { useForm } from '@inertiajs/react';

export default function ConfirmRead({ id }) {
    const { data, setData, post, processing, errors } = useForm({
        id_code: '',
        _method: 'PATCH',
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('contracts.read', id));
    };
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-black px-4">
            <img
                className="mx-auto block w-32"
                src="/icons/logo.png"
                alt="logo"
            />
            <p className="text-center text-2xl font-semibold text-white">
                لرؤية العقد المرجو إدخال رقم الهوية الخاص بك
            </p>
            <form onSubmit={submit} className='w-full'>
                <CustomInput
                    placeholder="رقم الهوية"
                    width="w-full max-w-lg"
                    name="id_code"
                    id="confirm-id_code"
                    value={data.id_code}
                    error={errors.id_code}
                    onChange={(e) =>
                        setData('id_code', formatIdCode(e.target.value))
                    }
                />
                <SubmitButton loading={processing}>عرض العقد</SubmitButton>
            </form>
        </div>
    );
}
