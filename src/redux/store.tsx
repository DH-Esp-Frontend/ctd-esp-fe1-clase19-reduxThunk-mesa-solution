import { configureStore} from "@reduxjs/toolkit";
import pokemonsSlice from "../redux/slice";


const store = configureStore({
  reducer:pokemonsSlice
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

