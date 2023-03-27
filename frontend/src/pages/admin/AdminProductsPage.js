import ProductsPageComponent from "./components/productsPageComponent";
import axios from "axios";

const fetchProducts = async(abctrl) => {
    const { data } = await axios.get('/api/products/admin', {
        signal: abctrl.signal,
    })
    return data;
}

const deleteProduct= async (productId) => {
    const {data} = await axios.delete(`/api/procuts/admin/${productId}`);
    return data
}

const AdminProductsPage = async () => {
    return <ProductsPageComponent fetchProducts={fetchProducts} deleteProduct={deleteProduct} />
};

export default AdminProductsPage;
