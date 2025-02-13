import { configureStore } from "@reduxjs/toolkit";

import { contactsReduser } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
    reducer: {
        contactsData: contactsReduser,
        filter: filterReducer
    },
})
