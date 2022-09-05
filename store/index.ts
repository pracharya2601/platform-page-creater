import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Context, createWrapper, HYDRATE } from "next-redux-wrapper";

import studio from 'store/studio';
import editor from 'store/editor';

const reducer = combineReducers({
  studio,
  editor,

})

export const makeStore = (context: Context) => configureStore({ reducer })

export const wrapper = createWrapper(makeStore, { debug: true })