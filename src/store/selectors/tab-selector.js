import { selectorFamily } from 'recoil'
import { setTabsAtSessionStorage } from '../../utils/tab-storage'
import { tabState } from '../atoms/tab-atom'

export const tabSelector = selectorFamily({
  key: 'tabSelector',
  get: ({ get }) => get(tabState),
  set:
    action =>
    ({ get, set }, tab) => {
      let tabs = get(tabState)

      switch (action) {
        case 'add':
          tabs = addTabWithOpenAndSort(tabs, tab).map(t =>
            modifyOpen(t, tab.no),
          )
          break
        case 'modifyOpen':
          tabs = tabs.map(t => modifyOpen(t, tab.no))
          break
        case 'modifyUrl':
          break
        case 'remove':
          tabs = tabs
            .filter(t => t.no !== tab.no)
            .map(t => modifyOpen(t, calculateOpenTabNo(tabs, tab)))
          break
        case 'reset':
          tabs = []
          break
        default:
      }

      set(tabState, tabs)
      setTabsAtSessionStorage(tabs)
    },
})

const modifyOpen = (tab, tabNo) => {
  return { ...tab, opened: tab.no === tabNo }
}

const calculateOpenTabNo = (tabs, tab) => {
  if (tab.opened && tabs.length > 1) {
    const removeTabIndex = tabs.findIndex(t => t.no === tab.no)
    return tabs[removeTabIndex + (removeTabIndex === tabs.length - 1 ? -1 : 1)]
      ?.no
  }
  return tabs.find(t => t.opened)?.no
}

const addTabWithOpenAndSort = (previousTabs, menu) => {
  if (previousTabs.map(t => t.no).includes(menu.no)) {
    if (previousTabs.length > 5) {
      return [
        previousTabs.find(t => t.no === menu.no),
        ...previousTabs.filter(t => t.no !== menu.no),
      ]
    } else {
      return [...previousTabs]
    }
  } else {
    if (previousTabs.length >= 5) {
      return [{ ...menu, opened: true }, ...previousTabs]
    } else {
      return [...previousTabs, { ...menu, opened: true }]
    }
  }
}
