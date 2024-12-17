import { useDispatch, useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import { useGetProdutosQuery } from '../services/api'
import { RootReducer } from '../store'
import { favoritar } from '../store/reducers/loja'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.loja.favoritos)
  const dispatch = useDispatch()

  if (isLoading) return <h2>Carregando itens...</h2>

  const favoritados = (produto: ProdutoType) => {
    return favoritos.some((favorito) => favorito.id === produto.id)
  }

  const addFavoritos = (produto: ProdutoType) => {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={favoritados(produto)}
            key={produto.id}
            produto={produto}
            favoritar={addFavoritos}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
