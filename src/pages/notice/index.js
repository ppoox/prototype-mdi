import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
`

const Th = styled.th`
  background-color: #cecece;
  width: ${(props) => props.width}px;
`
const Td = styled.td`
  text-align: ${(props) =>
    props.align === 'left'
      ? 'left'
      : props.align === 'right'
      ? 'right'
      : 'center'};
`

function Notice() {
  return (
    <div>
      <h1>공지사항 목록</h1>
      <Table>
        <thead>
          <tr>
            <Th width="50">글번호</Th>
            <Th width="400">제목</Th>
            <Th width="100">작성자</Th>
            <Th width="100">작성일</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>3</Td>
            <Td align="left">
              <Link to="/notice/3">[공지] 주 52시간 변경 안내</Link>
            </Td>
            <Td>홍**(abc)</Td>
            <Td>2022.12.19</Td>
          </tr>
          <tr>
            <Td>2</Td>
            <Td align="left">
              <Link href="/notice/2">[공지] 비용 청구서 작성 안내</Link>
            </Td>
            <Td>김**(terax)</Td>
            <Td>2022.12.19</Td>
          </tr>
          <tr>
            <Td>1</Td>
            <Td align="left">
              <Link href="/notice/1">[공지] 사이트 이용 안내</Link>
            </Td>
            <Td>조**(qmoq)</Td>
            <Td>2022.12.19</Td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Notice
