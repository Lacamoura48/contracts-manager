import { useForm } from '@inertiajs/react';
import ProofInput from '../cards/ProofInput';
import CustomInput from '../inputs/CustomInput';
import SubmitButton from '../SubmitButton';

export default function BondOptionsContent({ proof, closeHandler }) {
    const { data, setData, post, processing, errors } = useForm({
        payement_date: proof.payement_date,
        title: proof.title,
        postable: proof.postable,
        action_done: proof.action_done,
        proof_image: proof.proof_image,
        _method: 'PATCH',
    });
    function submitForm(e) {
        e.preventDefault();
        post(route('bonds.update', proof.id), {
            preserveScroll: false,
            onSuccess: closeHandler,
        });
    }
    return (
        <div className="w-full">
            <form onSubmit={submitForm}>
                <ProofInput
                    changeHandler={(d) => setData({ ...data, ...d })}
                    proof={proof}
                />
                <div className="my-3">
                    <CustomInput
                        type="date"
                        label="تاريخ دفعة"
                        onChange={(e) =>
                            setData('payement_date', e.target.value)
                        }
                        defaultValue={data.payement_date}
                        name="payement_date"
                        id="contracts-payement_date"
                        error={errors.payement_date}
                    />
                </div>
                <div className="my-3">
                    <CustomInput
                        label="ملاحظة"
                        onChange={(e) => setData('action_done', e.target.value)}
                        defaultValue={data.action_done}
                        name="action_done"
                        id="contracts-action_done"
                        error={errors.action_done}
                    />
                </div>
                <SubmitButton loading={processing}>تحديث</SubmitButton>
            </form>
        </div>
    );
}
