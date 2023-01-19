import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import LogoImage from '../assets/image/ppoox.png'
import BoldText from '../assets/js/bold'
import { useResetRecoilState } from 'recoil'
import { tabSelector } from '../store/selectors/tab-selector'

const Wrapper = styled.section`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cecece;
  padding: 8px 4vw;
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

export default function Header() {
  const resetTabs = useResetRecoilState(tabSelector('reset'))
  const navigate = useNavigate()

  const handleClickLogo = () => {
    navigate('/')
    resetTabs()
  }

  return (
    <Wrapper>
      <Logo onClick={handleClickLogo}>
        <img src={LogoImage} alt="logo" />
      </Logo>
      <Info>
        <p>
          <a href="/#">
            <BoldText color="#8c52ff" decoration="underline">
              Admin
            </BoldText>
            님
          </a>
          &nbsp;반갑습니다!
        </p>
        <p>
          <a href="/#">
            <BoldText color="#cecece" decoration="underline" size="14">
              로그아웃
            </BoldText>
          </a>
        </p>
      </Info>
    </Wrapper>
  )
}
