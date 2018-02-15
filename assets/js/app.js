$(document).ready(function(){
 $.ajax({
   url: 'https://pokeapi.co/api/v2/pokemon/',
   type: 'GET',
   success: function (results) {
     //console.log(results.sprites.front_default);
     for (var i = 1; i <= 802; i++) {
       var url = results.results[i].url;
       $.ajax({
         url: url,
         type: 'GET',
         success: function (data) {
           var imgPokemon = $('<div class="panel panel-default"><div class="panel-body"><img src=' + data.sprites.front_default +' id=' + i + '></div><p>' + data.name + '</p></div>');

           $('.pokemon').append(imgPokemon);
         }
       })
     }
   }
 });
})
/*
$('#mostrar').click(function () {
  var num = $('#pokes').val();
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/'+num,
    type: 'GET',
    success: function (results) {
      console.log(results.sprites.front_default);
      var imgPokemon = $('<img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png id=' + i + '>');
      $('.pokemon').append(imgPokemon);
    }
});

}) 
*/

/**
 * $(document).ready(function () {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/',
  }).done(pokemon) si todo sale bien, ejecuta la funcion pokemon
  .fail(handleError); si hay algun error, ejecuta la funcion handleError 
});

 función que se ejecuta para mostrar los pokemon 
function pokemon() {
   recorriendo la api 
  for (var i = 1; i <= 802; i++) {
    var imgPokemon = $('<img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png id=' + i + '>');
    $('.pokemon').append(imgPokemon);
  }
}

function handleError(e) {
  console.log('Se ha presentado un error');
}
 */