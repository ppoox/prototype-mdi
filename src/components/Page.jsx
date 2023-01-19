import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #cecece;
  display: flex;
  justify-content: center;
  & > div {
    width: 90%;
    height: ${props => props.height || '100%'};
  }
`

export default function Page() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}
