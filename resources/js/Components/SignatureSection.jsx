import { router } from '@inertiajs/react';
import { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Modal from './Modal';
import PrimaryButton from './PrimaryButton';
import FileInput from './inputs/FileInput';

function SignatureSection({
    show,
    signature,
    signatureProof,
    id,
    closeHandler,
}) {
    const sigCanvas = useRef({});
    const [currentSignature, setCurrentSignature] = useState();
    const [currentProof, setCurrentProof] = useState();
    const clear = () => {
        sigCanvas.current.clear();
    };
    const saveSignature = (dataURL) => {
        router.post(
            route('contracts.sign', id),
            {
                signature: dataURL,
                _method: 'patch',
            },
            { onSuccess: () => setCurrentSignature(true) },
        );
    };
    const save = () => {
        if (sigCanvas.current.isEmpty()) return;
        const dataURL = sigCanvas.current
            .getTrimmedCanvas()
            .toDataURL('image/png');

        saveSignature(dataURL);
    };
    function submitProof(e) {
        e.preventDefault();
        router.post(
            route('contracts.signProof', id),
            {
                signature_proof: currentProof,
                _method: 'PATCH',
            },
            { onSuccess: closeHandler },
        );
    }

    return (
        <Modal show={show}>
            {signature || currentSignature ? (
                <div className="flex flex-col items-center py-4">
                    <h2 className="text-black">
                        <span className="font-bold text-gray-600">
                            الخطوة الثانية:
                        </span>{' '}
                        يرجى تحميل صورة هويتك، كدليل على أنك مالك التوقيع
                    </h2>
                    <form
                        className="flex w-full flex-col gap-4 px-5 py-4"
                        onSubmit={submitProof}
                    >
                        <FileInput
                            name="signature_proof"
                            label="صورة بطاقة الهوية"
                            imageSelected={currentProof}
                            onChange={(e) => setCurrentProof(e.target.files[0])}
                            id="signature_proof_input"
                        />
                        <div className="flex gap-2">
                            <PrimaryButton>إرسال</PrimaryButton>
                            <PrimaryButton onClick={closeHandler} type="button">
                                رجوع
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="flex flex-col items-center py-4">
                    <h2 className="text-black">
                        <span className="font-bold text-gray-600">
                            الخطوة الأولى:
                        </span>{' '}
                        الرجاء التوقيع في المنطقة أدناه
                    </h2>
                    <SignatureCanvas
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
                        <PrimaryButton onClick={closeHandler}>
                            رجوع
                        </PrimaryButton>
                    </div>
                </div>
            )}
        </Modal>
    );
}

export default SignatureSection;
