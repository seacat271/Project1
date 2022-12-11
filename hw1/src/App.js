
import {user, data, transactions,friends} from './data';
import { Statistics } from './components/Statistic/Statistics';
import { Profile } from "./components/Profile/Profile";
import {FriendList} from './components/Friends/FriendList'
import {TransactionsHistory} from './components/Transaction/TransactionsHistory'
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
