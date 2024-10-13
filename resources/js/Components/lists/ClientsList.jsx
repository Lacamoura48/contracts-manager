import { MessageCircleWarning } from 'lucide-react';
import ClientCard from '../cards/ClientCard';
import Pagination from '../pagination/Pagination';

function ClientsList({ clients }) {
    console.log(clients);
    
    return (
        <>
            {clients?.data?.length ? (
                <>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {clients.data.map((client) => {
                            return (
                                <ClientCard key={client.id} client={client} />
                            );
                        })}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Pagination data={clients} />
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

export default ClientsList;
