import { router } from '@inertiajs/react';
import { useEffect } from 'react';

function ClientPage({ client }) {
    useEffect(() => {
        // const res = router.get('/clients/38/id_card');
        
        // console.log(res);
    }, []);

    return (
        <div>
            <img src={client.id_photo_front} alt="" />
        </div>
    );
}

export default ClientPage;
