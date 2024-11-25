import BondLine from '../cards/BondLine';

function BondsList({ bonds, noActions }) {
    return (
        <div className="mt-8 w-full">
            {bonds.map((line, index) => {
                return (
                    <BondLine
                        noActions={noActions}
                        ranking={index + 1}
                        key={line.id}
                        bond={line}
                        last={index === bonds.length - 1}
                    />
                );
            })}
        </div>
    );
}

export default BondsList;
