import { atom } from 'recoil'

export const menuState = atom({
  key: 'menuState',
  default: [
    {
      no: 1,
      name: '공지사항',
      url: '/notice',
    },
    {
      no: 2,
      name: '회원관리',
      url: '/member',
    },
    {
      no: 3,
      name: '상품관리',
      url: '/product',
    },
    {
      no: 4,
      name: '점포관리',
      url: '/store',
    },
    {
      no: 5,
      name: '주문관리',
      url: '/order',
    },
    {
      no: 6,
      name: '배송관리',
      url: '/delivery',
    },
    {
      no: 7,
      name: '전시관리',
      url: '/display',
    },
    {
      no: 8,
      name: '시스템관리',
      url: '/system',
    },
  ],
})
