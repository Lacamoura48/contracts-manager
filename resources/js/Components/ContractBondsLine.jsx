const ContractBondsLine = ({ bonds }) => {
    return (
        <div className="flex flex-wrap gap-1">
            {bonds.map((bond, index) => (
                <div key={index} className={`h-4 w-4 rounded-full ${bond}`} />
            ))}
        </div>
    );
};

export default ContractBondsLine;
