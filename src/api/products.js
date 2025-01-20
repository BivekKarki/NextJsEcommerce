import config from '@/config/config.js';
import axios from "axios";


async function getAllProducts() {
    const response = await axios.get(`${config.apiUrl}/api/products?limit=10&sort={"createdAt":-1}`);
    return response.data;
}

async function getProductById(id){
    const response = await axios.get(`${config.apiUrl}/api/products/${id}`);
    return response.data;
}

async function addProduct(data) {
    const response = await axios.post(`${config.apiUrl}/api/products`, data, {
        headers: {
            Authorization: `Bearer ${config.apiToken}`,
        },
    });
    
    return response.data;
}

async function editProduct(id,data){
    const response = await axios.put(`${config.apiUrl}/api/products/${id}`, 
        data, 
        {
            headers: {
                Authorization: `Bearer ${config.apiToken}`,
            },
    })

    return response.data;
}

export {getAllProducts, getProductById, addProduct, editProduct};
