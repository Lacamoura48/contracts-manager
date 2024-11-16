import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, router, useForm, usePage } from '@inertiajs/react';
import { PenLine } from 'lucide-react';
import { useRef, useState } from 'react';
import ReactSignatureCanvas from 'react-signature-canvas';

export default function UpdateProfileInformation({ status, className = '' }) {
    const user = usePage().props.auth.user;
    const [showSignature, setshowSignature] = useState(false);
    const {
        data,
        setData,
        post: patch,
        errors,
        processing,
        recentlySuccessful,
    } = useForm({
        name: user.name,
        email: user.email,
        code: user.code,
        company: user.company,
        address: user.address,
        phone: user.phone,
        _method: 'patch',
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };
    const sigCanvas = useRef({});
    const clear = () => {
        sigCanvas.current.clear();
    };
    const saveSignature = (dataURL) => {
        router.post(
            route('profile.signature'),
            {
                signature: dataURL,
                _method: 'patch',
            },
            { onSuccess: () => setshowSignature(false) },
        );
    };
    const save = () => {
        if (sigCanvas.current.isEmpty()) return;
        const dataURL = sigCanvas.current
            .getTrimmedCanvas()
            .toDataURL('image/png');

        saveSignature(dataURL);
    };
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    معلومات الملف الشخصي
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    قم بتحديث معلومات ملفك الشخصي وعنوان بريدك الإلكتروني.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="الاسم" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div>
                    <InputLabel htmlFor="company" value="اسم الشركة" />
                    <TextInput
                        id="company"
                        className="mt-1 block w-full"
                        value={data.company}
                        onChange={(e) => setData('company', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.company} />
                </div>
                <div>
                    <InputLabel htmlFor="code" value="رقم الرخصة" />
                    <TextInput
                        id="code"
                        className="mt-1 block w-full"
                        value={data.code}
                        onChange={(e) => setData('code', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.code} />
                </div>
                <div>
                    <InputLabel htmlFor="phone" value="رقم الهاتف" />

                    <TextInput
                        id="phone"
                        className="mt-1 block w-full"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.phone} />
                </div>
                <div>
                    <InputLabel htmlFor="address" value="العنوان" />

                    <TextInput
                        id="address"
                        className="mt-1 block w-full"
                        value={data.address}
                        onChange={(e) => setData('address', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.address} />
                </div>
                <div>
                    <InputLabel htmlFor="email" value="البريد الإلكتروني" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            عنوان بريدك الإلكتروني غير موثق.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                انقر هنا لإعادة إرسال رسالة التوثيق.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                تم إرسال رابط توثيق جديد إلى بريدك الإلكتروني.
                            </div>
                        )}
                    </div>
                )}
                <div className="flex gap-4">
                    <button
                        onClick={() => setshowSignature(true)}
                        className="relative top-1 rounded-xl border border-black bg-black px-4 py-3 pr-1 text-sm text-white transition-colors duration-500 hover:bg-gray-800 hover:text-white"
                    >
                        <PenLine size={20} className="ml-2 inline" />
                        تغيير توقيع
                    </button>
                    {user.signature && (
                        <img
                            className="w-24"
                            src={user.signature}
                            alt="user signature"
                        />
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>حفظ</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">تم الحفظ.</p>
                    </Transition>
                </div>
            </form>
            <Modal show={showSignature}>
                <div className="flex flex-col items-center py-4">
                    <h2 className="text-black">
                        الرجاء التوقيع في المنطقة أدناه
                    </h2>
                    <ReactSignatureCanvas
                        ref={sigCanvas}
                        penColor="black"
                        canvasProps={{
                            width: 400,
                            height: 250,
                            className:
                                'sigCanvas border-2 border-gray-600 rounded-xl mb-3',
                        }}
                    />
                    <div className="flex gap-2">
                        <PrimaryButton onClick={save}>تأكيد</PrimaryButton>
                        <PrimaryButton onClick={clear}>
                            إعادة المحاولة
                        </PrimaryButton>
                        <PrimaryButton onClick={() => setshowSignature(false)}>
                            رجوع
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </section>
    );
}
