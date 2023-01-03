import React from 'react'
import { Link } from 'react-router-dom'

function NoticeDetail() {
  return (
    <div>
      <h1>공지사항 상세</h1>
      <Link to="/notice">뒤로</Link>
    </div>
  )
}

export default NoticeDetail
