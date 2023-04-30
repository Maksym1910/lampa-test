export interface IProduct {
  id: number
  title: string
  description: string
  category: string
  price: number
  quantity: number
}

export interface IProductsResponse {
  limit: number
  skip: number
  products: IProduct[]
  total: number
}
