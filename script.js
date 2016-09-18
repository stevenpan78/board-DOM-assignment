var vowels = ['a','e','i','o','u'];
var litag = document.getElementsByTagName("li");

for(var i=0; i<litag.length; i++){
	litag[i].firstChild.nodeValue = vowels[i];
  if(i%2==0) litag[i].style.backgroundColor="cyan"
  else litag[i].style.backgroundColor="magenta";
}