/*global$*/



var url = "https://teamtreehouse.com/darlenealcorn.json";

$.getJSON(url, function(data) {
  var name = data.name;

  var points = data.points.JavaScript;
  var points_py = data.points.Python;
  var total = data.points.total;
  var badges = data.badges;

  $('#name').text("username: " + name);
  $('#points').text("javascript points: " + points);
  $('#points-python').text("python points: " + points_py);
  $('#total').append('<p>total points: ' + total + '</p>');
  $('#badges').text('number of badges earned: ' + badges.length);
  
  $.each(badges, function(index, badges){
    $('#list').append('<li>' + badges.name + '</li>').hide(); 
  });
  
    $('#see').click(function(){
    $('#list').toggle("slow");
   });

});
// end getJson




