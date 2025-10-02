import { FilterQuery } from 'mongoose'
import {ProductType} from "../types/appTypes";
import {ProductInputModel} from "../types/productType";

export function buildFilter(sortData: ProductInputModel): FilterQuery<ProductType> {
    const filter: FilterQuery<ProductType> = {}

    if (sortData.productType && sortData.productType !== 'all') {
        filter.productType = sortData.productType
    }

    if (sortData.spiciness && sortData.spiciness > 0) {
        filter.spiciness = sortData.spiciness
    }

    if (sortData.nuts === true) {
        filter.nuts = true
    }

    if (sortData.vegetarian === true) {
        filter.vegetarian = true
    }

    return filter
}