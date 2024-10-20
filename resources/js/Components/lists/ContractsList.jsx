import ContractLine from '../cards/ContractLine';

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
                        className="small:text-xs me-5 pb-4 pr-10 text-start"
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
                    return <ContractLine key={line.id} contract={line} />;
                })}
            </tbody>
        </table>
    );
}

export default ContractsList;
