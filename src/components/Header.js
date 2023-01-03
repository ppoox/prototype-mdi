import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import LogoImage from '../assets/image/ppoox.png'
import { useDispatch } from 'react-redux'
import { removeAll } from '../store/tab/tabSlice'

const Wrapper = styled.section`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cecece;
  padding: 8px 44px;
`

const Logo = styled.article`
  & > img {
    cursor: pointer;
    width: 100px;
    height: 100px;
  }
`

const Info = styled.article`
  display: flex;
  align-items: center;
  & > p {
    margin: 10px;
    & > a {
      cursor: pointer;
    }
  }
`

const Bold = styled.b`
  text-decoration: underline;
  color: ${(props) => props.color || '#000'};
  ${(props) => props.size && `font-size: ${props.size}px;`}
`

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onClickLogo = () => {
    navigate('/')
    dispatch(removeAll())
  }
  return (
    <Wrapper>
      <Logo onClick={onClickLogo}>
        <img src={LogoImage} alt="logo" />
      </Logo>
      <Info>
        <p>
          <a href="/#">
            <Bold color="#8c52ff">Admin</Bold>님
          </a>
          &nbsp;반갑습니다!
        </p>
        <p>
          <a href="/#">
            <Bold color="#cecece" size="14">
              로그아웃
            </Bold>
          </a>
        </p>
      </Info>
    </Wrapper>
  )
}

export default Header
