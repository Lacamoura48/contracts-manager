import { EllipsisVertical, PenBox, Trash2 } from 'lucide-react';
import Dropdown from '../Dropdown';
function ContractDropdown({ contractId }) {
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
                <Dropdown.Link
                    href={route('contracts.destroy', contractId)}
                    method="delete"
                    as="button"
                >
                    <Trash2 className="inline-block" /> حذف
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    );
}

export default ContractDropdown;
