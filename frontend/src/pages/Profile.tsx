import DropDowns from "../components/chat/DropDowns"
import ProfileTopSec from "../components/chat/ProfileTopSec"





const Profile = () => {
  return (
    <div className="self-start w-100  px-4 space-y-2">
      <ProfileTopSec />
      <hr className="text-gray-500"/>
      <DropDowns />
      <hr className="text-gray-500"/>
      <DropDowns />
      <hr className="text-gray-500"/>
      <DropDowns />
      <hr className="text-gray-500"/>
    </div>
  )
}

export default Profile