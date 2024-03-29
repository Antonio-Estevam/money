import { useContext} from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SerchForm } from "./components/SerchForm";
import { PriceHighlight, TransectionsContainer, TransectionsTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utiils/formater";


export function Transections(){

    const {transactions} = useContext(TransactionContext)

    return(
        <div>
            <Header/>
            <Summary/>

            <TransectionsContainer>
            <SerchForm/>
                <TransectionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                            <td width={"50%"} >{transaction.description}</td>
                            <td>
                                <PriceHighlight variant={transaction.type}>
                                    {transaction.type === "outcome" && "- "}
                                {priceFormatter.format(transaction.price)}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{dateFormatter.format(new Date (transaction.createdAt))}</td>
                        </tr>

                            )
                        })}
                    </tbody>
                </TransectionsTable>
            </TransectionsContainer>
        </div>
        ) 
}