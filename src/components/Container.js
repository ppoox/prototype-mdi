import React from 'react'
import styled from 'styled-components'
import Content from './Content'
import Menu from './Menu'

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: space-between;
`

function Container() {
  return (
    <Wrapper>
      <Menu />
      <Content />
    </Wrapper>
  )
}

export default Container
