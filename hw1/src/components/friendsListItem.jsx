import PropTypes from 'prop-types'
export const FriendsListItem = ({avatar, name, isOnline}) => {
    return (<li >
    <span></span>
    <img src={avatar} alt="User avatar" width="48" />
    <p >{name}</p>
  </li>)
}

FriendsListItem.propTypes ={
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}