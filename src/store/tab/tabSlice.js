import { createSlice } from '@reduxjs/toolkit'

const SESSION_STORAGE_KEY = 'ppoox-mdi-tabs'
const setTabsAtSessionStorage = (tabs) => {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(tabs))
}
const getTabsFromSessionStorage = () => {
  return JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY))
}

const initialState = {
  tabs: getTabsFromSessionStorage() || [],
  maxLength: 5
}

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    add(state, action) {
      if (!state.tabs.map((t) => t.no).includes(action.payload.no)) {
        if (state.tabs.length >= state.maxLength) {
          state.tabs = [{ ...action.payload, opened: true }, ...state.tabs]
        } else {
          state.tabs = [...state.tabs, { ...action.payload, opened: true }]
        }
      } else {
        state.tabs = [
          state.tabs.find((t) => t.no === action.payload.no),
          ...state.tabs.filter((t) => t.no !== action.payload.no)
        ]
      }
      setTabsAtSessionStorage(state.tabs)
    },
    remove(state, action) {
      state.tabs = state.tabs.filter((t) => t.no !== action.payload)
      setTabsAtSessionStorage(state.tabs)
    },
    removeAll(state, action) {
      state.tabs = []
      setTabsAtSessionStorage([])
    },
    mark(state, action) {
      state.tabs = state.tabs.map((t) => {
        t.opened = t.no === action.payload
        return t
      })
      setTabsAtSessionStorage(state.tabs)
    }
  }
})

export const { add, remove, removeAll, mark } = tabSlice.actions
export default tabSlice
