import OrderDetailPageComponent from "../../components/OrderDetailPageComponent";

import axios from "axios";

const getOrder = async(id) => {
  const {data} = await axios.get("/api/orders/user/" + id);
  return data
}

const markasDelivered = async(id) => {
  const {data} = await axios.put("/api/orders/delivered/" + id);
  if(data) {
    return data;
  }
}
  
  const AdminOrderDetailsPage = () => {
    return <OrderDetailPageComponent getOrder={getOrder} markasDelivered={markasDelivered} />
  };
  
  export default AdminOrderDetailsPage;
  
  