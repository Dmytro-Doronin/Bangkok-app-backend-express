import {ProductInputModel} from "../types/productType";
import {ProductModel} from "../db/schemes";
import {buildFilter} from "../utils/sortData";

export class BlogQuery {
    async getAllProductsInDb(sortData: ProductInputModel) {
        const pageNumber = sortData.pageNumber ?? 1
        const pageSize = sortData.pageSize ?? 10

        const filter = buildFilter(sortData)

        try {
            const products = await ProductModel
                .find(filter)
                .skip((+pageNumber - 1) * +pageSize)
                .limit(+pageSize)
                .lean()

            const totalCount = await ProductModel.countDocuments(filter)

            const pagesCount = Math.ceil(totalCount / +pageSize)


            return {
                pagesCount,
                page: +pageNumber,
                pageSize: +pageSize,
                totalCount,
                items: products
            }
        } catch (e) {
            throw new Error('Does not get all blogs')
        }

    }
}