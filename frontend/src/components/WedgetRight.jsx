import Suggestions from "./Suggestions"
import FriendReq from "./friendReq"


function WedgetRight() {
  return (
    <div className=" md:mr-8 md:mt-20 container md:w-1/5 p-0 md:fixed md:right-2">
        <FriendReq/>
        <Suggestions/>
    </div>
  )
}

export default WedgetRight