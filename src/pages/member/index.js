import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Th = styled.th`
  background-color: #cecece;
  width: ${(props) => props.width}px;
`

function Member() {
  return (
    <div>
      <h1>회원관리 목록</h1>
      <table>
        <thead>
          <tr>
            <Th width="50">번호</Th>
            <Th width="120">아이디</Th>
            <Th width="120">이름</Th>
            <Th width="80">성별</Th>
            <Th width="180">이메일</Th>
            <Th width="180">휴대폰번호</Th>
            <Th width="80">등급</Th>
            <Th width="80">상태</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>xcs******</td>
            <td>
              <Link to="/member/3">홍**</Link>
            </td>
            <td>여성</td>
            <td>a*****@ppoox.kr</td>
            <td>010-****-****</td>
            <td>Silver</td>
            <td>정상</td>
          </tr>
          <tr>
            <td>2</td>
            <td>poi******</td>
            <td>
              <Link to="/member/2">김**</Link>
            </td>
            <td>남성</td>
            <td>r*****@ppoox.kr</td>
            <td>010-****-****</td>
            <td>Gold</td>
            <td>휴면</td>
          </tr>
          <tr>
            <td>1</td>
            <td>yr1******</td>
            <td>
              <Link to="/member/1">조**</Link>
            </td>
            <td>여성</td>
            <td>q*****@ppoox.kr</td>
            <td>010-****-****</td>
            <td>VIP</td>
            <td>정상</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Member
