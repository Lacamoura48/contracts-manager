import {
    getDiscColor,
    getNextPaymentDate,
    getStatusFromClasses,
} from '@/utils/functions';
import { router } from '@inertiajs/react';
import { useMemo } from 'react';
import ContractBondsLine from '../ContractBondsLine';
import ContractDropdown from '../ui/ContractDropdown';

function ContractLine({ contract }) {
    function navigateToContract() {
        router.get(route('contracts.show', contract.id));
    }
    const discColors = useMemo(
        () =>
            contract.bonds.map((bond) =>
                getDiscColor(bond.status, bond.payement_date),
            ),
        [contract.bonds],
    );
    const status = useMemo(
        () => getStatusFromClasses(discColors),
        [discColors],
    );
    return (
        <tr className="cursor-pointer">
            <td
                onClick={navigateToContract}
                className="hidden border-b py-4 text-start md:block"
            >
                <span
                    className={`block rounded-lg py-2 text-center font-bold ${status.color}`}
                >
                    {status.label}
                </span>
            </td>
            <td
                onClick={navigateToContract}
                className="border-b py-4 text-start md:mr-5 md:pr-10"
            >
                {contract.client.full_name}
            </td>
            <td
                onClick={navigateToContract}
                className="me-5 border-b py-4 text-start"
            >
                {new Date(
                    getNextPaymentDate(contract.bonds),
                ).toLocaleDateString('fr-FR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                })}
            </td>
            <td
                onClick={navigateToContract}
                className="me-5 w-28 border-b py-4 text-start md:w-44 lg:w-72"
            >
                <ContractBondsLine bonds={discColors} />
            </td>
            <td className="pr-3">
                <ContractDropdown contractId={contract.id} />
            </td>
        </tr>
    );
}

export default ContractLine;
