import { NextPage, GetStaticProps} from 'next'
import { Layout } from '../components/layout'

import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  // console.log(pokemons);

  return (
    <Layout title='Listado de Pokemons'>
      <ul>
        {
          pokemons.map( (poke) => (
            <li key={poke.id}># {poke.id} - {poke.name} </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);

  // console.log(data);

  const pokemons: SmallPokemon[] = data.results.map( ( poke, i ) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`  
  })
  );


/*   let pokemons: SmallPokemon[] = data.results;
  const urlApiPokemon = `https://pokeapi.co/api/v2/pokemon/`;
  pokemons = pokemons.map( (pokemon) => {
    let id = parseInt(pokemon.url.slice(urlApiPokemon.length, -1 ));
    return {
    ...pokemon, 
    id,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
  }
}); */

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
