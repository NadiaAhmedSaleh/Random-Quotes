

function changeQuote(){

var authorName=["Oscar Wild", "Ralph Waldo Emerson" , "Andre Gide", "Mark Twain", "Neil Gaiman"];
var qoute=["“Be yourself; everyone else is already taken.”", "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”" , "“It is better to be hated for what you are than to be loved for what you are not.”" 
, "“Good friends, good books, and a sleepy conscience: this is the ideal life.”" , "“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”"];
var num =Math.floor( Math.random()* authorName.length);
document.getElementById('author').innerHTML = authorName[num];
document.getElementById('name').innerHTML = qoute[num];

}

changeQuote();

