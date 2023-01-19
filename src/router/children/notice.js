import Notice from '../../pages/notice'
import NoticeDetail from '../../pages/notice/NoticeDetail'

const noticeRouter = [
  {
    path: '/notice',
    element: <Notice />,
  },
  {
    path: '/notice/:no',
    element: <NoticeDetail />,
  },
]

export default noticeRouter
