import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
    const myPokemon = new Pokemon("Pikachu")
    expect(myPokemon.name).toBe('Pikachusssss') // Corrige esta prueba
});