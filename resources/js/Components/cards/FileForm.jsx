import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import Checkbox from '../Checkbox';
import CustomInput from '../inputs/CustomInput';
import FileInput from '../inputs/FileInput';
import SubmitButton from '../SubmitButton';

export default function FileForm({ closeHandler, contract_id }) {
    const [errors, setErrors] = useState(false);
    const { data, setData, post, processing } = useForm({
        title: '',
        image: null,
        as_note: false,
    });
    function submitForm(e) {
        e.preventDefault();
        if (!data.title && !data.image) {
            setErrors('يجب ملء أحد المدخلات لإضافة ملحق');
            return;
        }
        post(route('files.store', contract_id), {
            forceFormData: true,
            onFinish: closeHandler,
        });
    }
    return (
        <form
            onSubmit={submitForm}
            className="flex flex-col gap-5 rounded-lg border-2 border-gray-200 px-2 py-5 font-medium"
        >
            <CustomInput
                placeholder="عنوان للملحق"
                onChange={(e) => setData('title', e.target.value)}
                name="title"
                id="title-files"
                error={errors}
            />
            <FileInput
                imageSelected={data.image}
                onChange={(e) => setData('image', e.target.files[0])}
                name="image"
                id="image-files"
                label="صورة الملحق"
            />
            <div>
                <Checkbox
                    onChange={(e) => setData('as_note', e.target.checked)}
                    id={`asNoteInput`}
                    defaultChecked={data.as_note}
                />
                <label className="mr-2 font-normal" htmlFor={`asNoteInput`}>
                    تضاف لملاحظات العقد
                </label>
            </div>
            <SubmitButton loading={processing}>إضافة</SubmitButton>
        </form>
    );
}
