$(document).ready(function(){
  $('.nameModal').modal('show');
});
function enterKeyPress(e){
  var code = (e.keyCode ? e.keyCode : e.which);
  var l = $('.blue').val();
  if(code == 13) { //Enter keycode
    if(l == ''){
      alert('Say Something!!');
    } else {
      $('#naMe').html(l);
      console.log(l);
      $('.nameModal').modal('hide'); 
    }
  }
}

var list = [];
$('#myModal').modal('hide');

function enterPressAlert(e){
  var i = $('.red').val();
  $('#info').val(i);
  var code = (e.keyCode ? e.keyCode : e.which);

  if(code == 13) { //Enter keycode
    if(i == ''){
      alert('Say Something!!');
    } else {
      list.push(i);
      print('.life', '<div class="dif"><p>' + i + '</p></div><br />');
    }
    $('.red').val('');
  }
}

$(document).on('click', '.dif', function(){
  var i = $(this).find('p').html();
  $('#info').val(i);
  edit(i);
});

function print(name, content){
  $(name).append(content);
}

function edit(i){
  $('#edit').val(i);
  $('#myModal').modal('show');
}

$('.edit').click(function(){
  var y = $('#info').val();
  var i = $('#edit').val();
  var l = list.indexOf(y);
  list[l] = i;
  update();
  $('#myModal').modal('hide');
});

function update(){
  $('.life').empty();
  list.forEach(function(input){
    print('.life', '<div class="dif"><p>' + input + '</p></div><br />');
  });
}

$('#btn1').click(function(){
  var y = $('#info').val();
  var l = list.indexOf(y);
  list.splice(l, 1);
  $('#info').val('');
  $('#myModal').modal('hide');
  update();
});

$('.delete').click(function(){
  $('.life').empty();
  list = [];
});