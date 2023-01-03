import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Notice from '../pages/notice'
import NoticeDetail from '../pages/notice/NoticeDetail'
import Member from '../pages/member'
import MemberDetail from '../pages/member/MemberDetail'
import Product from '../pages/product'
import ProductDetail from '../pages/product/ProductDetail'
import Delivery from '../pages/delivery'
import Store from '../pages/store'
import Display from '../pages/display'
import Order from '../pages/order'
import System from '../pages/system'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/notice',
        element: <Notice />
      },
      {
        path: '/notice/:no',
        element: <NoticeDetail />
      },
      {
        path: '/member',
        element: <Member />
      },
      {
        path: '/member/:no',
        element: <MemberDetail />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/product/:no',
        element: <ProductDetail />
      },
      {
        path: '/delivery',
        element: <Delivery />
      },
      {
        path: '/store',
        element: <Store />
      },
      {
        path: '/display',
        element: <Display />
      },
      {
        path: '/order',
        element: <Order />
      },
      {
        path: '/system',
        element: <System />
      }
    ]
  }
])

export default router
