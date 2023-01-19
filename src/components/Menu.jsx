import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import BoldText from '../assets/js/bold'
import { menuState } from '../store/atoms/menu-atom'
import { tabSelector } from '../store/selectors/tab-selector'

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

export default function Menu() {
  const menus = useRecoilValue(menuState)
  const setAddTab = useSetRecoilState(tabSelector('add'))

  const handleClickMenu = menuNo => {
    const menu = menus.find(menu => menu.no === menuNo)
    setAddTab(menu)
  }

  return (
    <MenuArticle>
      <p>
        <BoldText size="20">메뉴</BoldText>
      </p>
      <ul>
        {menus.map(menu => (
          <MenuItem key={menu.no} onClick={() => handleClickMenu(menu.no)}>
            <span>{menu.name}</span>
          </MenuItem>
        ))}
      </ul>
    </MenuArticle>
  )
}
