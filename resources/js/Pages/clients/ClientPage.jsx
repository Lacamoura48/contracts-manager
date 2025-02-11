import ClientPDFButton from '@/Components/buttons/pdfs/ClientPDFButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { formatMoroccanDate } from '@/utils/functions';
import { PenBox, Phone, PlusCircle, Scroll, Undo2, Upload } from 'lucide-react';

export default function ClientPage({ client }) {

    const state = client.state || '';
    const building = client.building || '';
    const appart = client.appart || '';
    const area = client.area || '';
    const address = state + '، ' + area + ' ' + building + ' ' + appart;
    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle={client.full_name}
                headerLink={[
                    {
                        label: 'رجوع إلى قائمة زبناء',
                        url: '/clients',
                        icon: Undo2,
                    },
                    {
                        label: 'إنشاء عقد',
                        url: `/contracts/create?client_id=${client.id}`,
                        icon: PlusCircle,
                    },
                    {
                        label: 'تعديل على الزبون',
                        url: route('clients.edit', client.id),
                        icon: PenBox,
                    },
                    {
                        label: 'عقود الزبون',
                        url: '/contracts?client_id=' + client.id,
                        icon: Scroll,
                    },
                    {
                        label: 'دفعات الزبون',
                        url: '/bonds?client_id=' + client.id,
                        icon: Upload,
                    },
                ]}
            >
                <div className="max-w-2xl">
                    <p className='font-medium text-lg'>({client.nickname})</p>
                    <p className="mb-4 text-center text-sm text-gray-400 md:text-start">
                        أضيف يوم{' '}
                        {formatMoroccanDate(new Date(client.created_at))}
                    </p>
                    <a
                        href={'tel:' + client.phone}
                        className="mx-auto flex w-fit flex-row-reverse items-center gap-1 rounded-md bg-gray-200 px-3 py-1 font-bold md:mx-0"
                    >
                        <Phone size={20} /> {client.phone}
                    </a>
                    <div className="mt-6 flex justify-center md:justify-normal">
                        <ClientPDFButton client={client} address={address} />
                    </div>
                    <hr className="my-5" />
                    <table className="mx-auto max-w-full md:mx-0">
                        <tr>
                            <th className="w-1/2 px-2 py-4 text-right">
                                رقم ثانوي
                            </th>
                            <td className="w-1/2 px-2 text-left">
                                {client.phone2}
                            </td>
                        </tr>
                        <tr>
                            <th className="w-1/2 px-2 py-4 text-right">
                                البريد الإلكتروني
                            </th>
                            <td className="w-1/2 px-2 text-left">
                                {client.email}
                            </td>
                        </tr>
                        <tr>
                            <th className="w-1/2 px-2 py-4 text-right">
                                رقم الهوية
                            </th>
                            <td className="w-1/2 px-2 text-left">
                                {client.id_code}
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
                            <td className="w-1/2 px-2 text-left">{address}</td>
                        </tr>
                        <tr>
                            <th className="w-1/2 px-2 py-4 text-right">
                                ملاحظات
                            </th>
                            <td className="w-1/2 px-2 text-left">
                                {client.notes}
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
