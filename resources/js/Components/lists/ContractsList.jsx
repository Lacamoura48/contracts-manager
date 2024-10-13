import { formatMoroccanDate } from '@/utils/functions';
import { Circle } from 'lucide-react';
import ContractBondsLine from '../ContractBondsLine';

function ContractsList({ contracts }) {
    console.log(contracts.data);

    return (
        <table className="mt-12 w-full">
            <thead>
                <tr className="w-full border-b-2 border-b-black">
                    <th
                        scope="col"
                        className="small:text-xs me-5 pb-4 text-start text-base"
                    >
                        الحالة
                    </th>
                    <th
                        scope="col"
                        className="small:text-xs me-5 pb-4 text-start"
                    >
                        اسم الزبون
                    </th>
                    <th
                        scope="col"
                        className="small:text-xs me-5 pb-4 text-start"
                    >
                        تاريخ الدفع التالي
                    </th>
                    <th
                        scope="col"
                        className="small:text-xs me-5 pb-4 text-start"
                    >
                        الدفعات
                    </th>
                </tr>
            </thead>
            <tbody>
                {contracts.data.map((line) => {
                    return (
                        <tr key={line.id}>
                            <td className="small:text-xs me-5 border-b py-4 text-start">
                                <Circle />
                            </td>
                            <td className="small:text-xs me-5 border-b py-4 text-start">
                                {line.client.full_name}
                            </td>
                            <td className="small:text-xs me-5 border-b py-4 text-start">
                                {formatMoroccanDate(
                                    new Date(line.bonds[0].payement_date),
                                )}
                            </td>
                            <td className="small:text-xs me-5 border-b py-4 text-start">
                                <ContractBondsLine bonds={line.bonds} />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default ContractsList;
