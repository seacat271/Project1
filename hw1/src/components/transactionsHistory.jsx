import { Transaction } from "./transaction"

export const TransactionsHistory = ({items}) => {
    return (<table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
{items.map(({id, type, amount, currency}) => {
    return <Transaction key={id} type = {type} amount = {amount} currency ={currency}/>
})}

    </tbody>
  </table>)
}