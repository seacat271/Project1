import user from './data/user.json';
import data from './data/data.json'
import { Statistics } from './components/statistics';
import { Profile } from "./components/profile";
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
  <FriendList/>
    </div>
  );
}

export default App;
