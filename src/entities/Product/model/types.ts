export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
  isAddedToCart: boolean
}

export interface IProductsResponse {
  limit: number
  skip: number
  products: IProduct[]
  total: number
}
