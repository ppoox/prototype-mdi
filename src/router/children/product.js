import Product from '../../pages/product'
import ProductDetail from '../../pages/product/ProductDetail'

const productRouter = [
  {
    path: '/product',
    element: <Product />
  },
  {
    path: '/product/:no',
    element: <ProductDetail />
  }
]

export default productRouter
