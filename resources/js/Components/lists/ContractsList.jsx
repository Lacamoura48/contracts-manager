import ContractLine from '../cards/ContractLine';
import Pagination from '../pagination/Pagination';

function ContractsList({ contracts }) {
    return (
        <table className="mt-12 w-full">
            <thead>
                <tr className="w-full">
                    <th
                        scope="col"
                        className="hidden rounded-full bg-black px-2 py-1 text-start text-sm text-white md:block"
                    >
                        الحالة
                    </th>
                    <th
                        scope="col"
                        className="mb-2 rounded-full bg-black px-2 py-1 text-start text-sm text-white md:pr-10"
                    >
                        الزبون
                    </th>
                    <th
                        scope="col"
                        className="mb-2 rounded-full bg-black px-2 py-1 text-start text-sm text-white"
                    >
                        تاريخ الدفعة القادمة
                    </th>
                    <th
                        scope="col"
                        className="mb-2 rounded-full bg-black px-2 py-1 text-start text-sm text-white"
                    >
                        حالةالدفعات
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {contracts.data.map((line) => {
                    return <ContractLine key={line.id} contract={line} />;
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={4}>
                        <div className="mt-12 flex justify-center">
                            <Pagination data={contracts} />
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}

export default ContractsList;
