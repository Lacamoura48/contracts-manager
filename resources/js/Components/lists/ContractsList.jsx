import { MessageCircleWarning } from 'lucide-react';
import ContractLine from '../cards/ContractLine';
import Pagination from '../pagination/Pagination';

function ContractsList({ contracts }) {
    return (
        <>
            {contracts?.data?.length ? (
                <>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {contracts.data.map((contract) => {
                            return (
                                <ContractLine
                                    key={contract.id}
                                    contract={contract}
                                />
                            );
                        })}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Pagination data={contracts} />
                    </div>
                </>
            ) : (
                <p className="flex flex-col items-center justify-center gap-3 py-8 text-center text-3xl text-gray-600">
                    <MessageCircleWarning size={100} />
                    لا يوجد أي زبائن
                </p>
            )}
        </>
    );
}

export default ContractsList;
