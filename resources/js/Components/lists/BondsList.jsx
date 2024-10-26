import BondLine from '../cards/BondLine';

function BondsList({ bonds }) {
    let foundCurrent = false;
    return (
        <div className="mt-8 w-full">
            {bonds.map((line) => {
                const currentOne = !foundCurrent && line.status !== 'paid';
                if (currentOne) {
                    foundCurrent = true;
                }
                return <BondLine key={line.id} bond={line} />;
            })}
        </div>
    );
}

export default BondsList;
