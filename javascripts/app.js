/*
 * NOTE: Did not have time to figure out proper structure to match mobile layout.  
 */

$(document).ready(function(){

  $.getJSON('javascripts/avocado.json', function(obj){
    var index, image, name, description;

    $.each(obj, function(key, value){
      index = key + 1;
      image = '<img class="img-fluid" src="images/' + value.img  + '" />';
      name = value.name;
      description = value.description;

      $('#products').append(
        '<div class="row mt-lg flex">' +
        '<div class="column large-1 large-offset-2"><p class="index">' + index + '</p></div>' +
        '<div class="column large-2">' + image + '</div>' +
        '<div class="column large-5">' +
        '<h3>' + name +'</h3>' +
        '<p>' + description + '</p>' +
        '</div>' +
        '</div>'
      );

    });

  });

});
