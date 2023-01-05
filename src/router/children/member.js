import Member from '../../pages/member'
import MemberDetail from '../../pages/member/MemberDetail'

const memberRouter = [
  {
    path: '/member',
    element: <Member />
  },
  {
    path: '/member/:no',
    element: <MemberDetail />
  }
]

export default memberRouter
