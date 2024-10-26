import BondLine from '../cards/BondLine';

function BondsList({ bonds }) {
    return (
        <div className="mt-8 w-full">
            {bonds.map((line) => {
                return <BondLine key={line.id} bond={line} />;
            })}
        </div>
    );
}

export default BondsList;
