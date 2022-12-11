import PropTypes from 'prop-types';
import { FriendsListItem } from "./FriendsListItem"


export const FriendList = ({friends}) => {
    return(<ul>
{friends.map(({id, name, avatar, isOnline}) => {
    return <FriendsListItem key = {id} name ={name} avatar = {avatar} isOnline ={isOnline}/>
})}
  </ul>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired
}