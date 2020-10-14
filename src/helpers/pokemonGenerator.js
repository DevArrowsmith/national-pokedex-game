import dexGenerator from './dexGenerator';
import answerGenerator from './answerGenerator';
import compilePokemon from './compilePokemon';

const pokemonGenerator = async (numPokemon) => {
  const dex = dexGenerator(numPokemon);
  const answer = answerGenerator(dex);
  const pokemon = await compilePokemon(dex);
  const pokemonData = {
    answer,
    pokemon,
  };
  return pokemonData;
};

export default pokemonGenerator;