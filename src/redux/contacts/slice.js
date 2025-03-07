import { createSlice } from "@reduxjs/toolkit"
import {deleteContact,fetchContacts, addContact } from "./operations"
import { logoutThunk } from "../auth/operations"

const initialState = {
    items: [],
    isLoading: false,
    isError:false
}

const slice = createSlice({
    name: 'contacts',
    initialState, 
    extraReducers: builder => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false

        })
        .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true
        })
        .addCase(logoutThunk.fulfilled, (state, action) => {
            state.isLoading = true
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload )
        }) 
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload)
        })

    }
})

export const contactsReducer = slice.reducer

