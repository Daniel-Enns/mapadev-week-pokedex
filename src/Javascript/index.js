/* 
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao do pokeomn correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos 
-1 listagem
-2 cartao do pokemon

precisamos criar duas variaveis no js para trabalhar com o cartao na tela

vamos precisar trabalhar com um evento de click feito pelo usuario na lsitagem de pokemon

-vamos remover a classe aberto só cartão que esta aberto 
-ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar 
-remover a class ativo que marca o pokémon selecionado
-adicionar a class ativo no item da lista selecionado 
*/

//precisamos criar duas variaveis no js para trabalhar com o cartao na tela
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de click feito pelo usuario na lsitagem de pokemon


    pokemon.addEventListener('click', () => {
        console.log(pokemon)
        //  -vamos remover a classe aberto só cartão que esta aberto 
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //-ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar 
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado  
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //-remover a class ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo') 

        //-adicionar a class ativo no item da lista selecionado 
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})


