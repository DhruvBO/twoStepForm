import { combineReducers } from "redux";

import formData from "./slices/formData/";

const rootReducer = combineReducers({ formData });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
