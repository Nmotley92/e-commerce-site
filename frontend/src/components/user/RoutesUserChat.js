import { Outlet } from "react-router-dom";
import UserChat from "./UserChat";

const RoutesUserChat = () => {
    return (
        <><UserChat /> <Outlet /></>
    );
};

export default RoutesUserChat