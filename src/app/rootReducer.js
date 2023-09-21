import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from '../features/navigationSlice';
import realtimeReducer from '../features/realtimeSlice';
import forecastReducer from '../features/forecastSlice';
import viewReducer from '../features/viewSlice';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  realtime: realtimeReducer,
  forecast: forecastReducer,
  view: viewReducer
});

export default rootReducer;