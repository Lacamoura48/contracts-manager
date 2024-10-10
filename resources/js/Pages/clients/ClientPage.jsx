import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { formatMoroccanDate } from '@/utils/functions';

export default function ClientPage({ client }) {
    console.log(client);

    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle={client.full_name}
                headerLink={{
                    label: 'رجوع إلى قائمة زبناء',
                    url: '/clients',
                }}
            >
                <div className="max-w-2xl">
                    <p className="mb-4 text-center text-sm text-gray-400 md:text-start">
                        أضيف يوم{' '}
                        {formatMoroccanDate(new Date(client.created_at))}
                    </p>
                    <p className="mx-auto w-fit rounded-md bg-gray-200 px-3 py-1 font-bold md:mx-0">
                        {client.id_code}
                    </p>
                    <hr className="my-8" />
                    <table className="mx-auto max-w-full md:mx-0">
                        <tr>
                            <th className="w-1/2 px-2 py-4 text-right">
                                رقم الهاتف
                            </th>
                            <td className="w-1/2 px-2 text-left">
                                {client.phone}
                            </td>
                        </tr>
                        <tr>
                            <th className="w-1/2 px-2 py-4 text-right">
                                اسم الزوجة
                            </th>
                            <td className="w-1/2 px-2 text-left">
                                {client.wife_name}
                            </td>
                        </tr>
                        <tr>
                            <th className="w-1/2 px-2 py-4 text-right">
                                هاتف الزوجة
                            </th>
                            <td className="w-1/2 px-2 text-left">
                                {client.wife_phone}
                            </td>
                        </tr>
                        <tr>
                            <th className="w-1/2 px-2 py-4 text-right">
                                العنوان
                            </th>
                            <td className="w-1/2 px-2 text-left">
                                {client.address}
                            </td>
                        </tr>
                    </table>
                    <h2 className="my-8 text-center text-lg font-bold underline md:text-start">
                        صورة الهوية (وجه وظهر){' '}
                    </h2>
                    <img
                        className="mb-4 block rounded-xl"
                        src={client.id_photo_front}
                        alt=""
                    />
                    <img
                        className="mb-4 block rounded-xl"
                        src={client.id_photo_back}
                        alt=""
                    />
                </div>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}
