import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactTabulator } from 'react-tabulator'

export default function Notice() {
  const [gridHeader] = useState([
    {
      title: '번호',
      field: 'no',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 70
    },
    {
      title: '제목',
      field: 'title',
      headerHozAlign: 'center',
      hozAlign: 'left',
      cellClick: (e, cell) => handleCellClick(e, cell)
    },
    {
      title: '작성자',
      field: 'createdBy',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 150
    },
    {
      title: '작성일시',
      field: 'createdAt',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 150
    }
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
        title: '[공지] 주 52시간 변경 안내',
        createdBy: '홍**(abc)',
        createdAt: '2022.12.19'
      },
      {
        no: 2,
        title: '[공지] 비용 청구서 작성 안내',
        createdBy: '김**(terax)',
        createdAt: '2022.12.19'
      },
      {
        no: 1,
        title: '[공지] 사이트 이용 안내',
        createdBy: '조**(qmoq)',
        createdAt: '2022.12.19'
      }
    ])
  }

  const handleCellClick = (e, cell) => {
    // https://github.com/ngduc/react-tabulator/issues/260 - cellClick issue
    e.preventDefault()
    navigate(`/notice/${cell._cell.row.data.no}`)
  }

  return (
    <div>
      <h1>공지사항 목록</h1>
      <ReactTabulator columns={gridHeader} data={gridData} />
    </div>
  )
}