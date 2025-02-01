import { data } from '../data'

export function getCategoryById(id: number) {
    return data.categories.find(category => category.id === id);
}

export function getAllCategories() {
    return data.categories;
}
