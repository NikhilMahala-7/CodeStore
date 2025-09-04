import UserDock from "../UserDock/Dock.js"
const UserWorkSpace = () => {
    return (
        <div id="UserWorkSpace" style={{height : "100vh" , width : "100vw" , overflow : "hidden" , position : "relative" , minHeight : "760px" , minWidth : "1300px"}}>
            <div id="UserWallpaper"></div>
            <UserDock/>
        </div>
    )
}

export default UserWorkSpace ; 