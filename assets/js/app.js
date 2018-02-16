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
          var imgPokemon = $('<div class="panel panel-default" id="panel_' + data.id + '"><div class="panel-body"><a data-toggle="modal" href="#myModal"><button id= "button_' + data.id + '"><img src=' + data.sprites.front_default +' id=' + data.id + '></button></a></div><p>' + data.name + '</p></div>');
          $('.pokemon').append(imgPokemon);
          /*
          *colorear según tipo
          */
          if (data.types[0].type.name === 'fire') {
            $('#panel_' + data.id).addClass('fireColor')
          } if (data.types[0].type.name === 'water') {
            $('#panel_' + data.id).addClass('waterColor')
          }
          $('#button_'+ data.id).click(function(){
            $('.modal-title , #type , #secondType').empty();
            $('#title').append(data.name);
            if (data.types[1] == undefined) {
            $('#type').append('Tipo: ' + data.types[0].type.name);
            } else {
              $('#type').append('Tipo: ' + data.types[0].type.name + '/' + data.types[1].type.name)
            }
           })

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