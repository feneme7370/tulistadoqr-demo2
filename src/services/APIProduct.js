import api from "../lib/axios";

// tomar api de productos, ya tiene la url el termino api
export default {
    getProducts(){
        return api.get('/products/3')
        // return api.get('/list.php?c=list')
    },
    getCategories(){
        return api.get('categories/3')
    },
    getLevels(){
        return api.get('levels/3')
    },
    getCompanies(){
        return api.get('companies/3')
    },
}