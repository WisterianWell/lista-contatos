import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  termo: string
  numero: string
  email: string
}

const initialState: FiltroState = {
  termo: '',
  numero: '',
  email: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = filtroSlice.actions

export default filtroSlice.reducer
