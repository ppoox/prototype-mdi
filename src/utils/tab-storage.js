const SESSION_STORAGE_KEY = 'ppoox-mdi-tabs'

const setTabsAtSessionStorage = (tabs) => {
  if (tabs) sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(tabs))
}

const getTabsFromSessionStorage = () => {
  const items = sessionStorage.getItem(SESSION_STORAGE_KEY)
  return items ? JSON.parse(items) : []
}

export { setTabsAtSessionStorage, getTabsFromSessionStorage }
