import Rootslice from "./RootSlice";

import {combineReducers } from 'redux';
import {configureStore} from '@reduxjs/toolkit'

 const reducer = combineReducers({
     root:Rootslice
 })
 const store = configureStore({
      reducer
 })

export default store;