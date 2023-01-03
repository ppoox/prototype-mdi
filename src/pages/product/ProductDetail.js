import React from 'react'
import { Link } from 'react-router-dom'

function ProductDetail() {
  return (
    <div>
      <h1>상품관리 상세</h1>
      <Link to="/product">뒤로</Link>
    </div>
  )
}

export default ProductDetail
