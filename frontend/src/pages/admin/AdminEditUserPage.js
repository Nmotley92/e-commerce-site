import EditUserPageComponent from "./components/EditUserPageComponent";
import axios from "axios";

const fetchUser = async (userId) => {
    const { data } = await axios.get(`/api/users/${userId}`);
    return data;
}

const updateUserApiRequest = (name, lastName, email, isAdmin) => {
    console.log(name, lastName, email, isAdmin);
}

const AdminEditUserPage = () => {
  
  return <EditUserPageComponent updateUserApiRequest={updateUserApiRequest} fetchUser={fetchUser} />;
};

export default AdminEditUserPage;

