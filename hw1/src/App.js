import user from './data/user.json';
import data from './data/data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'
import { Statistics } from './components/statistics';
import { Profile } from "./components/profile";
import {FriendList} from './components/friendList'
import {TransactionsHistory} from './components/transactionsHistory'
function App() {
  return (
    <div>
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  <Statistics title="Upload stats" stats ={data}/>
  <FriendList friends ={friends}/>
  <TransactionsHistory  items = {transactions}/>
    </div>
  );
}

export default App;
