import React, { useEffect, useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { remove as removeTab, mark as markTab } from '../store/tab/tabSlice'
const Article = styled.article`
  width: 88%;
  border: 1px solid #cecece;
`

const TabNames = styled.div`
  position: relative;
  & > span {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 10px;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #cecece;
    cursor: pointer;
  }
  & > ul {
    height: 30px;
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`

const TabContents = styled.div`
  border: 1px solid #cecece;
  display: flex;
  justify-content: center;
  & > div {
    width: 90%;
    height: 85vw;
  }
`

const TabName = styled.li`
  padding: 5px 10px;
  border: 1px solid #cecece;
  & > span {
    cursor: pointer;
  }
`

const TabClose = styled.span`
  cursor: pointer;
  padding: 0px 5px;
  background-color: #e6e6e6;
  border-radius: 50%;
  z-index: 999;
  & > img {
    width: 10px;
    height: 10px;
    margin-bottom: 1px;
  }
`

function Content() {
  const maxLength = useSelector((state) => state.tab.maxLength)
  const tabs = useSelector((state) => state.tab.tabs)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const prevOpenedTabRef = useRef()

  useEffect(() => {
    const openedTab = tabs.find((t) => t.opened)
    if (!openedTab) {
      navigate('/')
    } else if (prevOpenedTabRef.current !== openedTab) {
      prevOpenedTabRef.current = openedTab
      navigate(openedTab?.url || '/')
    }
  }, [tabs, navigate])

  const onClickRemove = (tab) => {
    if (tab.opened && tabs.length > 1) {
      const tabIndex = tabs.findIndex((t) => t.no === tab.no)
      if (tabIndex === tabs.length - 1) {
        dispatch(markTab(tabs[tabIndex - 1].no))
      } else {
        dispatch(markTab(tabs[tabIndex + 1].no))
      }
    }

    dispatch(removeTab(tab.no))
  }

  const onClickTabName = (tab) => {
    dispatch(markTab(tab.no))
  }

  const onClickMoreTab = () => {
    alert(
      `초과목록 노출 - ${tabs
        .slice(maxLength)
        .map((t) => t.name)
        .join(',')}`
    )
  }

  return (
    <Article>
      <TabNames id="tabList ">
        <ul>
          {tabs.slice(0, maxLength).map((tab, index) => (
            <TabName className={tab.opened ? 'mark' : ''} key={index}>
              <span onClick={() => onClickTabName(tab)}>{tab.name}</span>
              <TabClose onClick={() => onClickRemove(tab)}>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/null/delete-sign.png"
                  alt="delete"
                />
              </TabClose>
            </TabName>
          ))}
          {tabs.length > maxLength ? (
            <TabName>
              <span onClick={onClickMoreTab}>....</span>
            </TabName>
          ) : (
            ''
          )}
        </ul>
      </TabNames>
      <TabContents>
        <Outlet />
      </TabContents>
    </Article>
  )
}

export default Content
