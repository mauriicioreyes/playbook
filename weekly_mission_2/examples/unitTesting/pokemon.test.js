import Pokemon from './pokemon'

// test('Test 1) Mi prueba', () => {
//     expect(4 + 2).toBe(60);
// });

test('1) Create a new object pokemon', () => {
    const myPokemon = new Pokemon("Pikachu")
    expect(myPokemon.name).toBe('Pikachu') // Corrige esta prueba
});
