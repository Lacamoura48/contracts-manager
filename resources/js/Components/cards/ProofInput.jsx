import { useEffect, useState } from 'react';
import Checkbox from '../Checkbox';
import CustomInput from '../inputs/CustomInput';
import FileInput from '../inputs/FileInput';

export default function ProofInput({ number, changeHandler, proof }) {
    const [currentData, setCurrentData] = useState({
        proof_image: null,
        id: number,
        title: proof?.title || '',
        postable: proof?.postable !== undefined ? proof?.postable : true,
        payement_date: proof?.payement_date || null,
    });

    useEffect(() => {
        changeHandler(currentData);
    }, [currentData]);
    return (
        <div className="flex flex-col gap-2 rounded-2xl border-2 border-slate-200 px-2 py-3">
            <FileInput
                key={number}
                name={`proof${number + 1}`}
                id={`contract-proof-${number + 1}`}
                label={`إثبات الدفعة ${number || ''}`}
                imageSelected={currentData.proof_image}
                defaultImage={proof?.proof_image}
                onChange={(e) =>
                    setCurrentData((p) => {
                        return { ...p, proof_image: e.target.files[0] };
                    })
                }
            />
            <CustomInput
                placeholder="ملاحظة"
                defaultValue={currentData.title}
                onChange={(e) =>
                    setCurrentData((p) => {
                        return { ...p, title: e.target.value };
                    })
                }
            />
            <div>
                <label className="ml-2" htmlFor={`proofCheck${number}`}>
                    قابل للدفع
                </label>
                <Checkbox
                    onChange={(e) =>
                        setCurrentData((p) => {
                            return { ...p, postable: e.target.checked };
                        })
                    }
                    id={`proofCheck${number}`}
                    defaultChecked={currentData.postable}
                />
            </div>
        </div>
    );
}
