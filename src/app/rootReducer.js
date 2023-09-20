import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from '../features/navigationSlice';
import realtimeReducer from '../features/realtimeSlice';
import forecastReducer from '../features/forecastSlice';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  realtime: realtimeReducer,
  forecast: forecastReducer,
});

export default rootReducer;