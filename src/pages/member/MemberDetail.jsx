import React from 'react'
import { Link } from 'react-router-dom'

export default function MemberDetail() {
  return (
    <div>
      <h1>회원관리 상세</h1>
      <Link to="/member">뒤로</Link>
    </div>
  )
}