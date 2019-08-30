$(document).ready(function(){
  $(function(){
    $("#aftermath").hide();
  });
  $("#button1").click(function(){
    $("#aftermath").show();
    $("#footer").css("margin-top","5px");
  });
  $("#button2").click(function(){
    $("#newArea").select();
    document.execCommand('copy');
    setTimeout(
      function()
      {
       alert('Successfully copied to the clipboard!!!!!!!!!');
     }, 1000);
  });

});

function bracRemover(){
  var actualText //this is the actual text which the user pastes
  var regexPattern //regex pattern of the substring we are looking forward to remove
  var newText //the new text which the user wants.

  //fetching the user input
  actualText=document.getElementById('actualText').value;
  //converting into string
  actualText=String(actualText);
  //regex pattern
  regexPattern=/\[[0-9]*\]/g;
  //replacing the string
  newText=actualText.replace(regexPattern,'');
  //pasting the results onto the webapp
  document.getElementsByName('newText')[0].value=newText;
}
