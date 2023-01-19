import React from 'react'
import styled from 'styled-components'
import Page from './Page'
import Tab from './Tab'

const ContentArticle = styled.article`
  width: 88%;
  border: 1px solid #cecece;
`

export default function Content() {
  return (
    <ContentArticle>
      <Tab />
      <Page />
    </ContentArticle>
  )
}