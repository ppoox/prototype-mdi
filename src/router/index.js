import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import deliveryRouter from './children/delivery'
import storeRouter from './children/store'
import noticeRouter from './children/notice'
import orderRotuer from './children/order'
import displayRouter from './children/display'
import systemRouter from './children/system'
import memberRouter from './children/member'
import productRouter from './children/product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...noticeRouter,
      ...memberRouter,
      ...productRouter,
      ...deliveryRouter,
      ...storeRouter,
      ...displayRouter,
      ...orderRotuer,
      ...systemRouter
    ]
  }
])

export default router
