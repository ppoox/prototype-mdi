import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './reducers/menuSlice'
import tabSlice from './reducers/tabSlice'

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    tab: tabSlice.reducer
  }
})

export default store
