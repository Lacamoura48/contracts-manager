import ClientCard from '../cards/ClientCard';
import Pagination from '../pagination/Pagination';
import EmptyList from './EmptyList';

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
                <EmptyList model="زبائن" />
            )}
        </>
    );
}

export default ClientsList;
