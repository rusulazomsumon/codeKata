// Selector in DOM

// Examine the documents objects
// var doc = console.log(document.all);
// var doc = console.log(document.URL);
// var doc = console.log(document.title);

// getElementByID
// Using getElementById after selection we have 
// change Text, color and background 
// var heading = document.getElementById("headline");
// heading.innerHtml = "Keyword Collector";
// heading.style.color = "#e4e434";
// heading.style.backgroundColor = "#000000";

// ******GetElementsByClass*******
// var Keywords = document.getElementsByClassName("list-item");
// console.log(Keywords); // return collection 

// chane content of 3rd lists item 
// var Keywords = document.getElementsByClassName("list-item");
// // Keywords[2].textContent = "ML";
// //change background of Odd numbers 
// for(var i=0; i<Keywords.length; i=i+2){
//     Keywords[i].style.backgroundColor = '#e4e434';
// }

// ******GetElementsByTagName*******

// Same as class name  , retun collection 
// var Keywords = document.getElementsByTagName('li');
// for(var i=1; i<Keywords.length; i=i+2){
//     // change the backgroundColor of eventh list 
//     Keywords[i].style.backgroundColor = '#e4e434';
// }

// ******((((((querySelector))))))*******
// var mainBody = document.querySelector('body'); //accessing body 
// mainBody.style.border = "3px solid #000000";
// ====Acceing class like css====== 
// var KwywordCollector = document.querySelector('.keyword-collector'); 
// KwywordCollector.style.border = "3px solid #000000";
// ====Acceing id like css====== 
// var headline = document.querySelector('#headline'); 
// headline.style.border = "3px solid #000000";

// ******((((((querySelector দিয়ে input fild এর valu set করা))))))*******
// var input = document.querySelector('input');
// // input.value = 'ML - Deep Learning'; 
// input.placeholder = 'Enter a Related Keyword'; //set placeholder 
// ******((((((querySelector দিয়ে input fild এর sumit button, valu set করা))))))*******
// var submitBtn = document.querySelector('input[type="submit"]');
// submitBtn.value = 'Add Now';
// ******((((((querySelector দিয়ে কোন লিস্ট select করলে by defult 1st value return করে, ))))))*******
// var listItem = document.querySelector('.list-item');
// // listItem.style.color="#000000"; //1st list item is black color 
// var listItem = document.querySelector('.list-item:last-child');
// listItem.style.color="#000000"; //4th list item is black color 

// ******((((((querySelectorAll , return the collection of array, need index ))))))*******
// var listItems = document.querySelectorAll('.list-item');
// // listItems[0].style.color="#000000"; //adding css color 1st list item 0 index 
// //to apply same property to all needs for loop 
// for(var i=0;i<listItems.length;i++){
//     listItems[i].style.color="#000000";
// }

// var OddlistItems = document.querySelectorAll('.list-item:nth-child(odd)');
// //css psudo selector for selection odd 
// for(var i=0;i<OddlistItems.length;i++){
//     OddlistItems[i].style.color="#000000";
// }
// ******(((((( Traversing The Dom: parent node using querySelector ))))))*******
// var keywordItems = document.querySelector('.Keyword-lists');
// console.log(keywordItems);
// keywordItems.style.backgroundColor = "#000000";
// keywordItems.parentNode.style.border = "5px solid #000000"; //chenge keyword collectors border. parents of keyword-lists  
// var listItems = document.querySelector('.list-item');
// listItems.parentNode.parentNode.parentNode.style.border = "5px solid #000000"; //chenge keyword collectors border. parents of keyword-lists  
/////////////////////////////////////////////////////////////////////////////////
// ******(((((( Traversing The Dom: parent Elements using querySelector ))))))*******
//////////////////////////////////////////////////////////////////////////////////
// Aslike parent Node
// var listItems = document.querySelector('.list-item');
// listItems.parentElement.parentElement.parentElement.style.border = "5px solid #000000";

// 55555555 Traversing The Dom: ChildNode using querySelector 55555555
// var keywordItems = document.querySelector('ul');
// keywordItems.children[1].style.border = "2px solid #000000"; 
// var listItems = document.querySelector('.list-item');
// listItems.parentNode.parentNode.parentNode.style.border = "5px solid #000000";
//*********first child & Last chils************ */
// var keywordItems = document.querySelector('ul');
// console.log(keywordItems.firstChild);
// keywordItems.firstChild.textContent = "AI"; 
// keywordItems.lastChild.textContent = "AI"; 

//*********firstElementChild & lastElementChild************ */
// var keywordItems = document.querySelector('ul');
// keywordItems.firstElementChild.textContent = "AI"; 
// keywordItems.lastElementChild.textContent = "Big Data"; 

//*********nextSibling and nextElementSibling & (previous)************ */
// var title = document.querySelector('h3');
// title.nextSibling.textContent = "AI"; 
// title.nextElementSibling.textContent = "Big Data";
// ******* previousElementsSibling
// var unorderdList = document.querySelector('ul');
// unorderdList.previousElementSibling.textContent = "My Keyword Collections";

/////////////////////////////////////////////////////////////////////////
// ******(((((( ))))))*******
////////////////////////////////////////////////////////////////////////


