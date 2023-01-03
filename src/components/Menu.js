import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { add as addTab, mark as markTab } from '../store/tab/tabSlice'

const Bold = styled.b`
  color: ${(props) => props.color || '#000'};
  ${(props) => props.size && `font-size: ${props.size}px;`}
`

const Article = styled.article`
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

const Li = styled.li`
  padding: 5px 0px;
  margin: 25px 10px;
  border-bottom: 1px solid #cecece;
  cursor: pointer;
  vertical-align: middle;
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
    <Article>
      <p>
        <Bold size="20">메뉴</Bold>
      </p>
      <ul>
        {menus.map((menu) => (
          <Li key={menu.no} onClick={() => onClickMenu(menu.no)}>
            <span>{menu.name}</span>
          </Li>
        ))}
      </ul>
    </Article>
  )
}

export default Menu
