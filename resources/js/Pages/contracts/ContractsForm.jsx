import { autocompleteFetch } from '@/actions/autocomplete';
import ProofInput from '@/Components/cards/ProofInput';
import AutocompleteInput from '@/Components/inputs/autocomplete/Autocomplete';
import CustomInput from '@/Components/inputs/CustomInput';
import CustomSelect from '@/Components/inputs/CustomSelect';
import SubmitButton from '@/Components/SubmitButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InsideLayout from '@/Layouts/InsideLayout';
import { formatFilterDate } from '@/utils/functions';
import { useForm } from '@inertiajs/react';
import { PlusCircle, Undo2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
function ContractsForm(props) {
    const contract = props.contract;
    const queryParams = new URLSearchParams(window.location.search);
    const startAmountInput = useRef();

    const initialValues = contract
        ? {
              client_id: contract.client_id,
              total_price: contract.bonds_sum_amount,
              contract_type: contract.bonds_count,
              start_date: formatFilterDate(
                  new Date(contract.bonds[0].created_at),
              ),
              start_amount: contract.bonds[0].amount,
              height: contract.height,
              width: contract.width,
              intensity: contract.intensity,
              work_duration: contract.work_duration,
              notes: contract.notes,
              _method: 'PATCH',
          }
        : {
              client_id: queryParams.get('client_id') || '',
              total_price: '',
              contract_type: 3,
              start_amount: '',
              start_date: formatFilterDate(new Date()),
              bonds_array: [],
              height: '',
              width: '70cm',
              intensity: '20kg/H',
              work_duration: '',
              notes: '',
          };

    const { data, setData, post, processing, errors } = useForm({
        ...initialValues,
    });
    function proofChangeHandler(dataPassed) {
        const res = data.bonds_array.map((proof) => {
            if (proof.id == dataPassed.id) {
                return dataPassed;
            } else {
                return proof;
            }
        });
        setData('bonds_array', res);
    }
    const generateProofsInputs = (num) => {
        return [...Array(num).keys()].map((dof) => {
            const proofId = dof + 1;
            return {
                id: proofId,
                proof_image: data.bonds_array[dof]?.proof_image || null,
                title: data.bonds_array[dof]?.title || '',
                postable:
                    data.bonds_array[dof]?.postable !== undefined
                        ? data.bonds_array[dof]?.postable
                        : true,
            };
        });
    };
    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value,
        );
    };
    useEffect(() => {
        if (+data.total_price > 0) {
            if (+data.contract_type !== 3) {
                const amountToShow = (
                    +data.total_price / +data.contract_type
                ).toFixed(2);
                setData({
                    ...data,
                    start_amount: amountToShow,
                    bonds_array:
                        !contract && generateProofsInputs(+data.contract_type),
                });
                startAmountInput.current.value = amountToShow;
            } else {
                const amountToShow = (+data.total_price / 2).toFixed(2);
                setData({
                    ...data,
                    start_amount: amountToShow,
                    bonds_array:
                        !contract && generateProofsInputs(+data.contract_type),
                });
                startAmountInput.current.value = amountToShow;
            }
        }
    }, [data.contract_type, data.total_price]);
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        if (contract) {
            post(route('contracts.update', contract.id));
        } else {
            post(route('contracts.store'), {
                forceFormData: true,
            });
        }
    };
    console.log('bondsarray', data.bonds_array);

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
                            defaultValue={data.contract_type}
                            error={errors.contract_type}
                        >
                            <option value={3}>بدون إقساط</option>
                            <option value={4}>4 دفعات</option>
                            <option value={6}>6 دفعات</option>
                            <option value={8}>8 دفعات</option>
                            <option value={10}>10 دفعات</option>
                            <option value={12}>12 دفعات</option>
                        </CustomSelect>
                    </div>
                    <div className="mb-4 flex gap-3">
                        <CustomInput
                            type="date"
                            label="تاريخ أول دفعة"
                            min={contract ? null : formatFilterDate(new Date())}
                            onChange={handleOnChange}
                            defaultValue={data.start_date}
                            name="start_date"
                            id="contracts-start_date"
                            error={errors.start_date}
                        />
                        <div className={`relative w-full`}>
                            <label
                                className="mb-1 block text-black"
                                htmlFor="contracts-start_amount"
                            >
                                مبلغ أول دفعة
                            </label>
                            <input
                                id="contracts-start_amount"
                                type="number"
                                placeholder="المبلغ بالدرهم"
                                min={1}
                                max={data.total_price}
                                onChange={handleOnChange}
                                ref={startAmountInput}
                                defaultValue={data.start_amount}
                                name="start_amount"
                                className={`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black ${
                                    errors.start_amount
                                        ? 'bg-red-100'
                                        : 'bg-gray-100'
                                } placeholder:text-placeholder rounded-lg`}
                            />
                            <span className="text-xs text-red-600">
                                {errors.start_amount}
                            </span>
                        </div>
                    </div>
                    <div className="mb-4 flex gap-3">
                        <CustomInput
                            type="number"
                            label="مدة الانجاز"
                            placeholder="عدد أيام"
                            onChange={handleOnChange}
                            defaultValue={data.work_duration}
                            name="work_duration"
                            id="contracts-work_duration"
                            error={errors.work_duration}
                        />
                    </div>
                    {!contract && (
                        <div className="my-8 grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2">
                            {data.bonds_array.map((proof) => {
                                return (
                                    <ProofInput
                                        key={proof.id}
                                        number={proof.id}
                                        changeHandler={proofChangeHandler}
                                    />
                                );
                            })}
                        </div>
                    )}
                    <div className="my-4">
                        <h2 className="mb-3 text-2xl font-bold">
                            معلومات عن المنتج
                        </h2>
                        <div className="mb-8 flex gap-2">
                            <CustomSelect
                                onChange={handleOnChange}
                                defaultValue={data.intensity}
                                name="intensity"
                                id="contracts-intensity"
                                label="كثافة"
                            >
                                <option value="20kg/H">20kg/H</option>
                                <option value="25kg/H">25kg/H</option>
                                <option value="30kg/H">30kg/H</option>
                            </CustomSelect>
                            <CustomSelect
                                onChange={handleOnChange}
                                defaultValue={data.width}
                                name="width"
                                id="contracts-width"
                                label="عرض"
                            >
                                <option value="70cm">70cm</option>
                                <option value="75cm">75cm</option>
                                <option value="80cm">80cm</option>
                            </CustomSelect>
                            <CustomInput
                                onChange={handleOnChange}
                                defaultValue={data.height}
                                name="height"
                                id="contracts-height"
                                label="ارتفاع"
                            />
                        </div>
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
