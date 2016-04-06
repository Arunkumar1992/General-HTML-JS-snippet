var allvals="";
var alltext ="";
$('#idofselect').find('option').each(function(){
  allvals+=$(this).val()+"\n"
     alltext+=$(this).text();
});
console.log(allvals);
console.log(alltext);
