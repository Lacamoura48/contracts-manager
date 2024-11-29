import { router } from '@inertiajs/react';
import { EllipsisVertical, PenBox, Trash2 } from 'lucide-react';
import Dropdown from '../Dropdown';
function ContractDropdown({ contractId }) {
    function trashContract() {
        router.post(route('contracts.trash', contractId), { _method: 'patch' });
    }
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <button className="h-8 w-8 rounded-full bg-gray-200">
                    <EllipsisVertical className="mx-auto" />
                </button>
            </Dropdown.Trigger>

            <Dropdown.Content>
                <Dropdown.Link href={route('contracts.edit', contractId)}>
                    <PenBox className="inline-block" /> تعديل
                </Dropdown.Link>
                <button
                    onClick={trashContract}
                    className="px-4 py-1 text-gray-700"
                >
                    <Trash2 className="inline-block" /> حذف
                </button>
            </Dropdown.Content>
        </Dropdown>
    );
}

export default ContractDropdown;
