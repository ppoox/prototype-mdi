import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menu/menuSlice'
import tabSlice from './tab/tabSlice'

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    tab: tabSlice.reducer
  }
})

export default store
