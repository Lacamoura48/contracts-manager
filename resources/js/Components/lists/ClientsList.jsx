import ClientCard from '../cards/ClientCard';
import Pagination from '../pagination/Pagination';

function ClientsList({ clients }) {
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
                <p className="py-8 text-center text-3xl text-gray-600">
                    no clients yet.
                </p>
            )}
        </>
    );
}

export default ClientsList;
