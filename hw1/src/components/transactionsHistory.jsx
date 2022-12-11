import PropTypes from 'prop-types'
import { Transaction } from "./Transaction"

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

TransactionsHistory.propTypes ={
  items: PropTypes.arrayOf(PropTypes.shapeOf({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
}