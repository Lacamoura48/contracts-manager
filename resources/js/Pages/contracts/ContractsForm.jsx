import { autocompleteFetch } from '@/actions/autocomplete';
import AutocompleteInput from '@/Components/inputs/autocomplete/Autocomplete';
import CustomInput from '@/Components/inputs/CustomInput';
import CustomSelect from '@/Components/inputs/CustomSelect';
import FileInput from '@/Components/inputs/FileInput';
import SubmitButton from '@/Components/SubmitButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { formatFilterDate } from '@/utils/functions';
import { useForm } from '@inertiajs/react';
import { PlusCircle, Undo2 } from 'lucide-react';
function ContractsForm(props) {
    const contract = props.contract;
    const queryParams = new URLSearchParams(window.location.search);

    const initialValues = contract
        ? {
              client_id: contract.client_id,
              total_price: contract.total_price,
              contract_type: contract.contract_type,
              start_date: contract.start_date,
              _method: 'PATCH',
          }
        : {
              client_id: queryParams.get('client_id') || '',
              total_price: '',
              contract_type: '',
              start_date: formatFilterDate(new Date()),
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
        if (contract) {
            post(route('contracts.update', contract.id));
        } else {
            post(route('contracts.store'), {
                forceFormData: true,
            });
        }
    };
    console.log(+data.contract_type);

    return (
        <AuthenticatedLayout>
            <InsideLayout
                headerTitle="إضافة عقد جديد"
                headerLink={[
                    {
                        label: 'رجوع إلى قائمة العقود',
                        url: route('contracts.index'),
                        icon: Undo2,
                    },
                    {
                        label: 'إضافة زبون جديد',
                        url: route('clients.create'),
                        icon: PlusCircle,
                    },
                ]}
            >
                <form onSubmit={submit} className="max-w-2xl py-8">
                    <div className="mb-4 flex gap-3">
                        <AutocompleteInput
                            placeholder={'إختر زبونا '}
                            dataFunction={async (fetchParams) =>
                                autocompleteFetch('clients', fetchParams)
                            }
                            defaultValue={data.client_id}
                            choiceHandler={(choice) =>
                                setData('client_id', choice)
                            }
                            listItemAtributeName={'full_name'}
                            id="client-contract-form"
                            label="الزبون"
                            error={errors.client_id}
                        />
                        <CustomInput
                            type="number"
                            label="المبلغ"
                            placeholder="المبلغ بالدرهم"
                            min="0"
                            onChange={handleOnChange}
                            defaultValue={data.total_price}
                            name="total_price"
                            id="contracts-total_price"
                            error={errors.total_price}
                        />
                    </div>
                    <div className="mb-4 flex gap-3">
                        <CustomSelect
                            onChange={handleOnChange}
                            label="عدد الدفعات"
                            id="contracts-contract_type"
                            name="contract_type"
                            defaultSelected={8}
                        >
                            <option value={0}>بدون إقساط</option>
                            <option value={4}>4 دفعات</option>
                            <option value={6}>6 دفعات</option>
                            <option value={8}>8 دفعات</option>
                            <option value={10}>10 دفعات</option>
                            <option value={12}>12 دفعات</option>
                        </CustomSelect>
                        <CustomInput
                            type="date"
                            label="تاريخ أول دفعة"
                            min={formatFilterDate(new Date())}
                            onChange={handleOnChange}
                            defaultValue={data.start_date}
                            name="start_date"
                            id="contracts-start_date"
                            error={errors.start_date}
                        />
                    </div>
                    <div className="my-8 grid grid-cols-2 gap-3">
                        {[...Array(+data.contract_type).keys()].map((dof) => {
                            return (
                                <FileInput
                                    key={dof}
                                    name={`proof${dof + 1}`}
                                    id={`contract-proof-${dof + 1}`}
                                    label={`إثبات الدفعة ${dof + 1}`}
                                    imageSelected={data[`proof${dof + 1}`]}
                                    defaultImage={
                                        contract?.bonds[dof].proof_image
                                    }
                                    onChange={(e) =>
                                        setData(
                                            `proof${dof + 1}`,
                                            e.target.files[0],
                                        )
                                    }
                                />
                            );
                        })}
                    </div>
                    <div>
                        <SubmitButton loading={processing}>
                            {contract ? 'تحديث' : 'إرسال'}
                        </SubmitButton>
                    </div>
                </form>
            </InsideLayout>
        </AuthenticatedLayout>
    );
}

export default ContractsForm;
