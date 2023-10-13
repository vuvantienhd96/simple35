import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './features/counter/couterReducer';

export default configureStore({
  reducer: {
    couter: CounterReducer,
    // some reducer here...
  }
})