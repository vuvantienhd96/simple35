import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './features/counter/couterReducer';

export default configureStore({
  reducer: {
    counter: CounterReducer,
    // some reducer here...
  }
})