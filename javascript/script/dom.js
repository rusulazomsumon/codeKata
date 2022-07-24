// Selector in DOM

// Examine the documents objects
// var doc = console.log(document.all);
// var doc = console.log(document.URL);
// var doc = console.log(document.title);

// getElementByID
// var addConform = document.getElementById("addWordBtn");
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
// ******((((((2. Create Element: Using Dom(Without HTML directly) ))))))*******
////////////////////////////////////////////////////////////////////////

// //create the html elements and store in a variable 
// var newDiv = document.createElement('div');
// //add id 
// newDiv.id = 'card';

// //add classsName 
// newDiv.className = 'card1';

// //add atribute to our div
// newDiv.setAttribute('title', 'card div section');

// //add valute to created div
// var newDivText = document.createTextNode('Simple Dom Application');

// //add textNode to created div 
// newDiv.appendChild(newDivText);

// //now set the positon where we want set the dive. 
// // আমরা নতুন div কে under body .keyword-collector এর ভিতর h1 এর উপরে দেখাব 
// var container = document.querySelector('body .keyword-collector');
// var h1 = document.querySelector('body h1');
// container.insertBefore(newDiv, h1);

//styling the div (newDiv) from DOM
// newDiv.style.fontSize = "16px";
// newDiv.style.textAlign = "center";
// newDiv.style.color = "#ffffff";
// newDiv.style.paddingTop = "5px";




/////////////////////////////////////////////////////////////////////////
// ******((((((3. eventListener from W3School) ))))))*******
////////////////////////////////////////////////////////////////////////

// ***[[[  Alert Massage Button  ]]]*** 
// var addConform = document.getElementById("addWordBtn");
// addConform.addEventListener("click",alertMsg);

// // alert function 
// function alertMsg(){
//     alert("Are you sure to insert?");
// }


// // ***[[[  Add Multiple eventListener for same Event  ]]]*** 
//  // **same event multiple function 
//  var addConform = document.getElementById("addWordBtn");
//  addConform.addEventListener("click",alertMsg); 
//  addConform.addEventListener("click",alertMsg2); 
// // alert function 1 
// function alertMsg(){
//     alert("Alert Massage 1");
// }
// // alert function 2
// function alertMsg2(){
//     alert("Alert Massage 2 also executed");
// }

// ***[[[  Add Multiple eventListener for same Multiple Event  ]]]*** 
 // **multiple event multiple function 
//  var addConform = document.getElementById("addWordBtn");
//  addConform.addEventListener("mouseover",statsMouseOver); 
//  addConform.addEventListener("click",statsClick); 
//  addConform.addEventListener("mouseout",statsMouseOut); 

// // mouseover status 
// function statsMouseOver(){
//     var mouseStats = document.getElementById("stat");
//     mouseStats.innerHTML = "Mouse Over!";
//     //to show all record 
//     // mouseStats.innerHTML += "Mouse Over!";
// }

// // mouseClick status 
// function statsClick(){
//     var mouseStats = document.getElementById("stat");
//     mouseStats.innerHTML = "Clicked!";
// }

// // mouseover status 
// function statsMouseOut(){
//     var mouseStats = document.getElementById("stat");
//     mouseStats.innerHTML = "Mouse Out!";
// }

// // **** as value of textbox 
// // mouseover status 
// function statsMouseOver(){
//     var mouseStats = document.getElementById("textBox");
//     mouseStats.value = "MouseIsOver";
//     //to show all record 
//     // mouseStats.innerHTML += "Mouse Over!";
// }

// // mouseover status 
// function statsClick(){
//     var mouseStats = document.getElementById("textBox");
//     mouseStats.value = "cliked";
//     //to show all record 
//     // mouseStats.innerHTML += "Mouse Over!";
// }

// // mouseover status 
// function statsMouseOut(){
//     var mouseStats = document.getElementById("textBox");
//     mouseStats.value = "MouseIsOut";
//     //to show all record 
//     // mouseStats.innerHTML += "Mouse Over!";
// }


/////////////////////////////////////////////////////////////////////////
// ******((((((3.2 eventListener to window objects) ))))))*******
////////////////////////////////////////////////////////////////////////

// ********* Projects: Resize Window genarate Random Number ************
//adding evenLiatener
// var windowEvent = window.addEventListener("resize", resizeFunc);

// //function description 
// function resizeFunc(){
//     //creating random fraction number 
//     var ranNum = Math.random();

//     //flot to integer conversion , multiple by 10 for 0 - 9 , Math.floor() nearest number
//     ranNum = Math.floor(ranNum*10);
    
//     // display the random number in windos inside the stat.div 
//     //select the div 
//     var statDiv = document.getElementById("stat");
//     statDiv.innerHTML = "Random Number: "+ranNum;
// }


/////////////////////////////////////////////////////////////////////////
// ******((((((4: Event Propogation (i. Bubbling ii. Capturing)) ))))))*******
////////////////////////////////////////////////////////////////////////

// ********* Projects: ************


/////////////////////////////////////////////////////////////////////////
// ******((((((5: removeEventListener)) ))))))*******
////////////////////////////////////////////////////////////////////////

// ********* Projects: Resize Window genarate Random Number কিন্তু stop button এ click করলে আর কাজ করবে না  ************
// adding evenLiatener
// var windowEvent = window.addEventListener("resize", resizeFunc);

// //function description 
// function resizeFunc(){
//     //creating random fraction number 
//     var ranNum = Math.random();

//     //flot to integer conversion , multiple by 10 for 0 - 9 , Math.floor() nearest number
//     ranNum = Math.floor(ranNum*10);
    
//     // display the random number in windos inside the stat.div 
//     //select the div 
//     var statDiv = document.getElementById("stat");
//     statDiv.innerHTML = "Random Number: "+ranNum;
//     // styling text of statDiv
//     statDiv.style.fontWeight = "600";
// }
// // ***********[[[[[[[[[[[Removing Event Listener]]]]]]]]]]]**************
// var stopBtn = document.getElementById("stopBtn");
// stopBtn.addEventListener("click", function(){
//     var windowEvent = window.removeEventListener("resize", resizeFunc); 
// });

// var cntnBtn = document.getElementById("cntnBtn");
// cntnBtn.addEventListener("click", function(){
//     var windowEvent = window.addEventListener("resize", resizeFunc); 
// });