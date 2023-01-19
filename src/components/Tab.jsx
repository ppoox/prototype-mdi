import React, { useEffect, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { tabState } from '../store/atoms/tab-atom'
import { tabSelector } from '../store/selectors/tab-selector'
import { getTabsFromSessionStorage } from '../utils/tab-storage'

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

export default function Tab() {
  const maxLength = 5
  const [tabs, setTabs] = useRecoilState(tabState)
  const setModifyOpenTab = useSetRecoilState(tabSelector('modifyOpen'))
  const setRemoveTab = useSetRecoilState(tabSelector('remove'))
  const navigate = useNavigate()
  const prevOpenedTabRef = useRef()
  const openedTab = useMemo(() => tabs.find(t => t.opened), [tabs])

  useEffect(() => {
    setTabs(getTabsFromSessionStorage())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (prevOpenedTabRef.current !== openedTab) {
      prevOpenedTabRef.current = openedTab
      navigate(openedTab?.url || '/')
    }
  }, [openedTab, navigate])

  const handleClickRemove = tab => {
    setRemoveTab(tab)
  }

  const handleClickTabName = tab => {
    setModifyOpenTab(tab)
  }

  const handleClickMoreTab = () => {
    alert(
      `초과목록 노출 - ${tabs
        .slice(maxLength)
        .map(t => t.name)
        .join(',')}`,
    )
  }

  return (
    <TabNames>
      <ul>
        {tabs.slice(0, maxLength).map((tab, index) => (
          <TabName className={tab.opened ? 'mark' : ''} key={index}>
            <span onClick={() => handleClickTabName(tab)}>{tab.name}</span>
            <TabClose onClick={() => handleClickRemove(tab)}>
              <img
                src="https://img.icons8.com/ios-glyphs/30/null/delete-sign.png"
                alt="delete"
              />
            </TabClose>
          </TabName>
        ))}
        {tabs.length > maxLength ? (
          <TabName>
            <span onClick={handleClickMoreTab}>....</span>
          </TabName>
        ) : (
          ''
        )}
      </ul>
    </TabNames>
  )
}
