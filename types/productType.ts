import {productType} from "./appTypes";

export type ProductInputModel = {
    productType?: productType
    spiciness?: number
    nuts?: boolean
    vegetarian?: boolean
    pageNumber?: number
    pageSize?: number
}