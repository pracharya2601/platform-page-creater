import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Context, createWrapper, HYDRATE } from "next-redux-wrapper";

import studio from 'store/studio';

const reducer = combineReducers({
  studio,
})

export const makeStore = (context: Context) => configureStore({ reducer})

export const wrapper = createWrapper(makeStore, {debug: true})