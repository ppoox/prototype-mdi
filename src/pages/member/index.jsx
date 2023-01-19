import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactTabulator } from 'react-tabulator'

export default function Member() {
  const [gridHeader] = useState([
    {
      title: '번호',
      field: 'no',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 70,
    },
    {
      title: '아이디',
      field: 'id',
      headerHozAlign: 'center',
      hozAlign: 'center',
      cellClick: (e, cell) => handleCellClick(e, cell),
    },
    {
      title: '이름',
      field: 'name',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 120,
    },
    {
      title: '성별',
      field: 'gender',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 120,
    },
    {
      title: '이메일',
      field: 'email',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 200,
    },
    {
      title: '휴대폰',
      field: 'phone',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 200,
    },
    {
      title: '등급',
      field: 'grade',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 120,
    },
    {
      title: '상태',
      field: 'status',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 120,
    },
  ])
  const [gridData, setGridData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchGridData()
  }, [])

  const fetchGridData = () => {
    setGridData([
      {
        no: 3,
        id: 'xcs******',
        name: '홍**',
        gender: '여성',
        email: 'a*****@ppoox.kr',
        phone: '010-****-****',
        grade: 'Silver',
        status: '정상',
      },
      {
        no: 2,
        id: 'poi******',
        name: '김**',
        gender: '남성',
        email: 'r*****@ppoox.kr',
        phone: '010-****-****',
        grade: 'Gold',
        status: '휴면',
      },
      {
        no: 1,
        id: 'yr1******',
        name: '조**',
        gender: '여성',
        email: 'q*****@ppoox.kr',
        phone: '010-****-****',
        grade: 'VIP',
        status: '정상',
      },
    ])
  }

  const handleCellClick = (e, cell) => {
    e.preventDefault()
    navigate(`/member/${cell._cell.row.data.no}`)
  }
  return (
    <div>
      <h1>회원관리 목록</h1>
      <ReactTabulator columns={gridHeader} data={gridData} />
    </div>
  )
}
