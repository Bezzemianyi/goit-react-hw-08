import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:[]
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        deleteTodo: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        addTodo: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const contactsReducer = slice.reducer
export const { deleteTodo, addTodo } = slice.actions;