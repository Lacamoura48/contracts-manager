import ContractPDF from "@/Components/ContractPDF";

export default function LiveContract({ contract }) {
    return <div>
            <ContractPDF contract={contract} />
         </div>;
}
