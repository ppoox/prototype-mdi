import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { add as addTab, mark as markTab } from '../store/reducers/tabSlice'
import BoldText from '../assets/js/bold'

const MenuArticle = styled.article`
  text-align: center;
  width: 12%;
  border: 1px solid #cecece;
  & > p {
    height: 30px;
    padding: 30px 0;
    text-align: center;
    border-bottom: 1px solid #cecece;
  }
`

const MenuItem = styled.li`
  padding: 5px 0px;
  margin: 25px 10px;
  border-bottom: 1px solid #cecece;
  cursor: pointer;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
function Menu() {
  const menus = useSelector((state) => state.menu.menus)
  const dispatch = useDispatch()

  const onClickMenu = (menuNo) => {
    const menu = menus.find((menu) => menu.no === menuNo)
    dispatch(addTab(menu))
    dispatch(markTab(menu.no))
  }

  return (
    <MenuArticle>
      <p>
        <BoldText size="20">메뉴</BoldText>
      </p>
      <ul>
        {menus.map((menu) => (
          <MenuItem key={menu.no} onClick={() => onClickMenu(menu.no)}>
            <span>{menu.name}</span>
          </MenuItem>
        ))}
      </ul>
    </MenuArticle>
  )
}

export default Menu
