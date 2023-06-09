import { GetStaticProps, NextPage } from 'next'
import PokemonCard from '../components/pokemon/PokemonCard';
import { Inter } from 'next/font/google'
import { Layout } from '../components/layouts/Layout';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { Grid } from '@nextui-org/react';


const inter = Inter({ subsets: ['latin'] })
interface Props {
  pokemons: SmallPokemon[]

}

const HomePage = ({ pokemons }: Props) => {
  return (
    <Layout titulo='Listado Pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((poke) => (
            <PokemonCard key={poke.id} pokemon={poke} />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
