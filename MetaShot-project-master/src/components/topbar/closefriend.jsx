import "./closefriend.css"

export default function CloseFriend({user}) {
  return (
    <li className="sidebarfreind"><img className="sidebarfriendimg" src={user.profilePicture} alt="" />
    <span className="sidebarfriendname">{user.username} </span></li>
  )
}
