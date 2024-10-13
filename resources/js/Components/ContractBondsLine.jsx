const ContractBondsLine = ({ bonds }) => {
    // Function to determine the color of the disc based on status
    const getDiscColor = (status) => {
        switch (status) {
            case 'paid':
                return 'bg-green-500';
            case 'late':
                return 'bg-red-500';
            default:
                return 'bg-gray-300'; // Default for unknown statuses
        }
    };

    return (
        <div className="flex gap-1">
            {bonds.map((bond, index) => (
                <div
                    key={index}
                    className={`h-4 w-4 rounded-full ${getDiscColor(bond.status)}`}
                    title={`الدفعة ${index + 1}: ${bond.status}`}
                />
            ))}
        </div>
    );
};

export default ContractBondsLine;
