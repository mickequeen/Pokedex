$(document).ready(function(){
  var arr = [];
 $.ajax({
   url: 'https://pokeapi.co/api/v2/pokemon/?limit=50',
   type: 'GET',
   success: function (results) {
     //console.log(results.sprites.front_default);
     for (var i = 1; i <= 802; i++) {
       var url = results.results[i].url;
       $.ajax({
         url: url,
         type: 'GET',
         success: function (data) {
          
          arr.push(data.id);
          arr.sort();
          arr.forEach( function(e){
              /*console.log(e)*/
          });
          var imgPokemon = $('<div class="col-lg-2 col-md-2 col-sm-3 col-xs-6"><div class="panel panel-default" id="panel_' + data.id + '"><div class="panel-body"><a data-toggle="modal" href="#myModal"><button class="touch" value= "' + data.id + '"><img src=' + data.sprites.front_default +' id=' + data.id + '></button></a></div><p>' + data.name + '</p></div></div>');
          $('.pokemon').append(imgPokemon);
          /*
          *colorear según tipo
          */
          if (data.types[0].type.name === 'fire') {
            $('#panel_' + data.id).addClass('fireColor')
          } if (data.types[0].type.name === 'water') {
            $('#panel_' + data.id).addClass('waterColor')
          } if (data.types[0].type.name === 'normal') {
            $('#panel_' + data.id).addClass('normalColor')
          } if (data.types[0].type.name === 'poison') {
            $('#panel_' + data.id).addClass('poisonColor')
          } if (data.types[0].type.name === 'fairy') {
            $('#panel_' + data.id).addClass('fairyColor')
          } if (data.types[0].type.name === 'flying') {
            $('#panel_' + data.id).addClass('flyingColor')
          } if (data.types[0].type.name === 'grass') {
            $('#panel_' + data.id).addClass('grassColor')
          } if (data.types[0].type.name === 'ground') {
            $('#panel_' + data.id).addClass('groundColor')
          } if (data.types[0].type.name === 'electric') {
            $('#panel_' + data.id).addClass('electricColor')
          } if (data.types[0].type.name === 'fighting') {
            $('#panel_' + data.id).addClass('fightingColor')
          } if (data.types[0].type.name === 'psychic') {
            $('#panel_' + data.id).addClass('psychicColor')
          } 
          /*
          *función al clickear pokemons (llenado de modal)
          */
          $('#panel_'+ data.id).click(function(){
            /*
            *limpiar datos creados en modal
            */
            $('.modal-title , #type , #secondType , #number, #ability').empty();
            $('#title').append(data.name);
            $('#number').append('N° Pokédex: #' + data.id);
            /*
            *mostrar habilidades
            */
            if (data.abilities[1] == undefined) {
              $('#ability').append('Ability: ' + data.abilities[0].ability.name);
            } if (data.abilities[2] == undefined) {
              $('#ability').append('Abilities: ' + data.abilities[0].ability.name + ', ' + data.abilities[1].ability.name) ;
            } else {
              $('#ability').append('Abilities: ' + data.abilities[0].ability.name + ', ' + data.abilities[1].ability.name + ', ' + data.abilities[2].ability.name)
            }
            if (data.types[1] == undefined) {
            $('#type').append('Type: ' + data.types[0].type.name);
            } else {
              $('#type').append('Type: ' + data.types[0].type.name + '/' + data.types[1].type.name)
            }
           })
         }
       })
     }
   }
 });
});

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