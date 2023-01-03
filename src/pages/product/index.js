import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Th = styled.th`
  background-color: #cecece;
  width: ${(props) => props.width}px;
`

function Product() {
  return (
    <div>
      <h1>상품관리 목록</h1>
      <table>
        <thead>
          <tr>
            <Th width="80">상품코드</Th>
            <Th width="170">상품명</Th>
            <Th width="80">브랜드</Th>
            <Th width="70">가격</Th>
            <Th width="130">카테고리</Th>
            <Th width="70">판매상태</Th>
            <Th width="90">최종 수정자</Th>
            <Th width="90">최종 수정일</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022121904</td>
            <td>
              <Link to="/product/2022121904">스마트폰 거치대</Link>
            </td>
            <td>Luelago</td>
            <td>30,000</td>
            <td>스마트폰{'>'}주변기기</td>
            <td>판매중</td>
            <td>고**(ppoox)</td>
            <td>2022.12.19</td>
          </tr>
          <tr>
            <td>2022121903</td>
            <td>
              <Link to="/product/2022121903">C to C 케이블</Link>
            </td>
            <td>Baseus</td>
            <td>12,000</td>
            <td>스마트폰{'>'}주변기기</td>
            <td>판매중</td>
            <td>고**(ppoox)</td>
            <td>2022.12.19</td>
          </tr>
          <tr>
            <td>2022121902</td>
            <td>
              <Link to="/product/2022121902">옵티컬 스위치 키보드 (NEW)</Link>
            </td>
            <td>Domeros</td>
            <td>149,000</td>
            <td>컴퓨터{'>'}주변기기</td>
            <td>판매중</td>
            <td>고**(ppoox)</td>
            <td>2022.12.19</td>
          </tr>
          <tr>
            <td>2022121901</td>
            <td>
              <Link to="/product/2022121901">옵티컬 스위치 키보드</Link>
            </td>
            <td>Domeros</td>
            <td>119,000</td>
            <td>컴퓨터{'>'}주변기기</td>
            <td>판매중단</td>
            <td>고**(ppoox)</td>
            <td>2022.12.19</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Product
