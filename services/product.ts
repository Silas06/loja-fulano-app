import { data } from '../data'

export function getAllProducts() {
    return data.products;
}

export function getProductById(id: number) {
    return data.products.find(product => product.id === id);
}

export function getProductsByCategory(idCategory: number) {
    return data.products.filter(product => product.idCategory === idCategory);
}

