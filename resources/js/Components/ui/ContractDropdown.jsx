import { router } from '@inertiajs/react';
import { EllipsisVertical, IterationCw, PenBox, Trash2, X } from 'lucide-react';
import Dropdown from '../Dropdown';
function ContractDropdown({ contractId }) {
    const queryParams = new URLSearchParams(window.location.search);
    function trashContract() {
        router.post(route('contracts.trash', contractId), { _method: 'patch' });
    }
    function deleteContract() {
        router.delete(route('contracts.destroy', contractId));
    }
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <button className="h-8 w-8 rounded-full bg-gray-200">
                    <EllipsisVertical className="mx-auto" />
                </button>
            </Dropdown.Trigger>

            <Dropdown.Content>
                {queryParams.get('trash') != 1 ? (
                    <Dropdown.Link href={route('contracts.edit', contractId)}>
                        <PenBox className="inline-block" /> تعديل
                    </Dropdown.Link>
                ) : (
                    <button
                        onClick={deleteContract}
                        className="block px-4 py-1 text-gray-700"
                    >
                        <X className="inline-block" /> حذف
                    </button>
                )}
                <button
                    onClick={trashContract}
                    className="px-4 py-1 text-gray-700"
                >
                    {queryParams.get('trash') != 1 ? (
                        <>
                            <Trash2 className="inline-block" /> إهمال
                        </>
                    ) : (
                        <>
                            <IterationCw className="inline-block" /> إرجاع
                        </>
                    )}
                </button>
            </Dropdown.Content>
        </Dropdown>
    );
}

export default ContractDropdown;
