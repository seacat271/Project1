import { FriendsListItem } from "./friendsListItem"


export const FriendList = ({friends}) => {
    return(<ul>
{friends.map(({name, avatar, isOnline}) => {
    return <FriendsListItem key = {name} name ={name} avatar = {avatar} isOnline ={isOnline}/>
})}
  </ul>)
}