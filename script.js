(function() {

  var screen= document.querySelector('.screen');
  var buttons= document.querySelectorAll('.btn');
  var clear = document.querySelector('.btn-clear');
  var equal= document.querySelector('.btn-equal');


  buttons.forEach(function(button){

    button.addEventListener('click', function(e){
       var value= e.target.dataset.num;
       screen.value += value;
    
    })
  
   
   equal.addEventListener('click', function(e){
    if(screen.value  === ''){
      screen.value= "";
    }
    else{
        var answer= eval(screen.value);
        screen.value = answer;
    }
})


clear.addEventListener('click', function(e){
screen.value= "";
})

});

   
})();
