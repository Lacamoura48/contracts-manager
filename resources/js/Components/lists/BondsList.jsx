import BondLine from '../cards/BondLine';

function BondsList({ bonds }) {
    let foundCurrent = false;
    return (
        <table className="mt-8 w-full">
            <tbody>
                {bonds.map((line, index) => {
                    const currentOne = !foundCurrent && line.status !== 'paid';
                    if (currentOne) {
                        foundCurrent = true;
                    }
                    return (
                        <BondLine
                            current={currentOne}
                            key={line.id}
                            bond={line}
                            lastBond={index + 1 === bonds.length}
                        />
                    );
                })}
            </tbody>
        </table>
    );
}

export default BondsList;
