//popup
var open = document.querySelector (".write-to-us");
var popup = document.querySelector (".modal-content");
var close = popup.querySelector (".modal-content-close");
var form = popup.querySelector (".mail-form");
var name = popup.querySelector ("[name='user-name']");
var mail = popup.querySelector ("[name='e-mail']");
var message = popup.querySelector ("[name='message']");
var storageName = localStorage.getItem ("name");
var storageMail = localStorage.getItem ("mail");
var overlay = document.querySelector (".modal-overlay");

open.addEventListener ("click", function(event) {
  event.preventDefault();
	popup.classList.add ("modal-content-show");
	overlay.classList.add ("modal-overlay-show");
  if (storageName) {
    name.value = storageName;
    mail.focus();
  } else if (storageMail) {
    mail.value = storageMail;
    message.focus();
  } else {
    name.focus();
  }
});

close.addEventListener ("click", function(event) {
  event.preventDefault();
	popup.classList.remove ("modal-content-show");
	overlay.classList.remove ("modal-overlay-show");
});

form.addEventListener ("submit", function(event) {
  if (!name.value || !mail.value || !message.value) {
    event.preventDefault();
    console.log ("Нужно заполнить поля формы");
  } else {
    localStorage.setItem ("name", name.value);
    localStorage.setItem ("mail", mail.value);
  }
});

overlay.addEventListener ("click", function(event) {
	event.preventDefault();
	popup.classList.remove ("modal-content-show");
	overlay.classList.remove ("modal-overlay-show");
});

//scroll
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 0, 15000 ],
    slide: function( event, ui ) {
      $( "#amount-form" ).val( ui.values[ 0 ] );
      $( "#amount-to" ).val( ui.values[ 1 ] );
      }
  });
  $( "#amount-for" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( "#amount-to" ).val( $( "#slider-range" ).slider( "values", 1 ) );

//изменения при вводе в первый элемент
  $("input#amount-form").change(function(){
    var value1=$("input#amount-form").val();
    var value2=$("input#amount-to").val();

    if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $("input#amount-form").val(value1);
    }
    $("slider-range").slider("values",0,value1);
  });

//изменения при вводе во второй элемент
  $("input#amount-to").change(function(){
    var value1=$("input#amount-form").val();
    var value2=$("input#amount-to").val();

    if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $("input#amount-to").val(value2);
    }
    $("slider-range").slider("values",1,value2);
  });

        /*//фильтрация ввода поля - разобраться почему ломает
        jQuery('#amount-for', '#amount-form').keypress(function(event){
          var key, keyChar;
          if(event) var event = window.event;

          if(event.keyCode) key = event.keyCode;
          else if(event.which) key = event.which;

          if (key==null || key==0 || key==13 || key==9 || key==46 || key==37 || key==39)
            return true;
          keyChar=String.fromCharCode(key);

          if(|/\d/.test(keyChar)) return false;
        });*/
});