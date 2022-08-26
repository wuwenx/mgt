import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './home/index';

export default configureStore({
  reducer: {
    home: homeSlice,
  },
});
