import BondLine from '../cards/BondLine';

function BondsList({ bonds, noActions }) {
    return (
        <div className="mt-8 w-full">
            {bonds.map((line) => {
                return (
                    <BondLine noActions={noActions} key={line.id} bond={line} />
                );
            })}
        </div>
    );
}

export default BondsList;
