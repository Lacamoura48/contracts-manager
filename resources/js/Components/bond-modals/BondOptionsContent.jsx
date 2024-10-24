import { useForm } from '@inertiajs/react';
import ProofInput from '../cards/ProofInput';
import CustomInput from '../inputs/CustomInput';
import SubmitButton from '../SubmitButton';

export default function BondOptionsContent({ proof, closeHandler }) {
    const { data, setData, post, processing, errors } = useForm({
        payement_date: proof.payement_date,
        title: proof.title,
        postable: proof.postable,
        proof_image: proof.proof_image,
        _method: 'PATCH',
    });
    function submitForm(e) {
        e.preventDefault();
        post(route('bonds.update', proof.id), { onSuccess: closeHandler });
    }
    return (
        <div>
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
                <SubmitButton loading={processing}>go go</SubmitButton>
            </form>
        </div>
    );
}
