import {
    formatMoroccanDate,
    getDiscColor,
    getNextPaymentDate,
} from '@/utils/functions';
import { router } from '@inertiajs/react';
import { useMemo } from 'react';
import ContractBondsLine from '../ContractBondsLine';

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
    const getStatusFromClasses = (classes) => {
        if (classes.includes('bg-red-500'))
            return {
                label: 'متعترة الدفع',
                color: 'bg-red-100 text-red-500',
            };
        if (classes.includes('bg-orange-300'))
            return {
                label: 'متأخر',
                color: 'bg-orange-100 text-orange-500',
            };
        if (classes.includes('bg-blue-500'))
            return {
                label: 'مستحق الدفع',
                color: 'bg-blue-100 text-blue-500 animate-pulse',
            };
        const allGreen = classes.every((c) => c === 'bg-green-500');
        if (allGreen)
            return {
                label: 'مدفوع',
                color: 'text-green-500 bg-green-100',
            };
        return {
            label: 'قادم',
            color: 'text-gray-500 bg-gray-200',
        }; // Default case if none of the conditions match
    };
    const status = useMemo(
        () => getStatusFromClasses(discColors),
        [discColors],
    );
    return (
        <tr onClick={navigateToContract} className="cursor-pointer">
            <td className="hidden border-b py-4 text-start md:block">
                <span
                    className={`block rounded-lg py-2 text-center font-bold ${status.color}`}
                >
                    {status.label}
                </span>
            </td>
            <td className="mr-5 border-b py-4 pr-10 text-start">
                {contract.client.full_name}
            </td>
            <td className="me-5 border-b py-4 text-start">
                {formatMoroccanDate(
                    new Date(getNextPaymentDate(contract.bonds)),
                )}
            </td>
            <td className="me-5 w-28 border-b py-4 text-start md:w-44 lg:w-72">
                <ContractBondsLine bonds={discColors} />
            </td>
        </tr>
    );
}

export default ContractLine;
