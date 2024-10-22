import ContractLine from '../cards/ContractLine';
import Pagination from '../pagination/Pagination';

function ContractsList({ contracts }) {
    return (
        <table className="mt-12 w-full">
            <thead>
                <tr className="w-full border-b-2 border-b-black">
                    <th
                        scope="col"
                        className="small:text-xs hidden pb-4 text-start text-base md:block"
                    >
                        الحالة
                    </th>
                    <th
                        scope="col"
                        className="small:text-xs me-5 pb-4 text-start md:pr-10"
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
