import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactTabulator } from 'react-tabulator'

export default function Product() {
  const [gridHeader] = useState([
    {
      title: '상품코드',
      field: 'productCode',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 120,
    },
    {
      title: '상품명',
      field: 'productName',
      headerHozAlign: 'center',
      hozAlign: 'center',
      cellClick: (e, cell) => handleCellClick(e, cell),
    },
    {
      title: '브랜드',
      field: 'brandName',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 120,
    },
    {
      title: '가격',
      field: 'price',
      formatter: 'money',
      formatterParams: {
        decimal: ',',
        thousand: ',',
        symbol: '원',
        symbolAfter: 'p',
        precision: false,
      },
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 120,
    },
    {
      title: '카테고리',
      field: 'category',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 200,
    },
    {
      title: '판매상태',
      field: 'sellStatus',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 120,
    },
    {
      title: '최종수정자',
      field: 'modifiedBy',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 150,
    },
    {
      title: '최종수정일',
      field: 'modifiedAt',
      headerHozAlign: 'center',
      hozAlign: 'center',
      width: 150,
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
        productCode: 2022121904,
        productName: '스마트폰 거치대',
        brandName: 'Luelago',
        price: '30000',
        category: '스마트폰>주변기기',
        sellStatus: '판매중',
        modifiedBy: '고**(ppoox)',
        modifiedAt: '2022.12.19',
      },
      {
        productCode: 2022121903,
        productName: '스마트폰 거치대',
        brandName: 'Baseus',
        price: '12000',
        category: '스마트폰>주변기기',
        sellStatus: '판매중',
        modifiedBy: '고**(ppoox)',
        modifiedAt: '2022.12.19',
      },
      {
        productCode: 2022121902,
        productName: '스마트폰 거치대',
        brandName: 'Domeros',
        price: '149000',
        category: '컴퓨터>주변기기',
        sellStatus: '판매중',
        modifiedBy: '고**(ppoox)',
        modifiedAt: '2022.12.19',
      },
      {
        productCode: 2022121901,
        productName: '스마트폰 거치대',
        brandName: 'Domeros',
        price: '119000',
        category: '컴퓨터>주변기기',
        sellStatus: '판매중단',
        modifiedBy: '고**(ppoox)',
        modifiedAt: '2022.12.19',
      },
    ])
  }

  const handleCellClick = (e, cell) => {
    e.preventDefault()
    navigate(`/product/${cell._cell.row.data.productCode}`)
  }
  return (
    <div>
      <h1>상품관리 목록</h1>
      <ReactTabulator columns={gridHeader} data={gridData} />
    </div>
  )
}
