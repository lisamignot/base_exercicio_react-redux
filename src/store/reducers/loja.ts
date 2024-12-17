import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type lojaState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: lojaState = {
  itens: [],
  favoritos: []
}

const lojaSlice = createSlice({
  name: 'loja',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado ao carrinho')
      } else {
        state.itens.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favoritos.find((p) => p.id === produto.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { adicionar, favoritar } = lojaSlice.actions
export default lojaSlice.reducer
