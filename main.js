// EXAMINE THE DOCUMENT OBJECT //
// console.log(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'Hello';

// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);

// GET ELEMENT BY ID //

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>'


// 

// GET ELEMENTS BY CLASS NAME //
//  var items = document.getElementsByClassName('title');
// console.log(items);
// items[0].style.color = 'green';
// items[0].style.fontWeight = 'bold';












// console.dir(document);
// console.log(document.domain);
// console.log(document.documentURI);
// console.log(document.title)
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);

// //get element by id
// // //console.log(document.getElementById('header-Title'));
//  var headerTitle=document.getElementById('header-title');
//  console.log(headerTitle);
// //  headerTitle.textContent= "Hello";
// //  headerTitle.innerText = "GoodBye";
//  //headerTitle.textContent = "Hello";
//  //headerTitle.innerText = "GoodBye";
//  //headerTitle.textContent ="good bye";
//  //var items= document.getElementsByClassName('list-group-item');
//  //console.log(items);
//  //console.log(items[1]);
//  //items[1].textContent = "Hello2";
// //var header = document.querySelector('#main-header');
// // headerTitle.innerHTML = '<h3>Hello</h3>';
// // var header = document.getElementById('main-header');
// // header.style.borderBottom = 'solid 3px #000';


// get elements by class name //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'yellow';

// for(var i=0;i<items.length;i++){
//     items[i].style.color = 'green';
//     items[i].style.fontWeight = 'bold';
// }


// //items[1].sty


//get elements by tag name //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4'
// }

// // QUERY SELECTOR
//  var header = document.querySelector('#main-header');
//  header.style.borderBottom = 'solid 4px #ccc';

//  var input = document.querySelector('input');
//  input.value = 'Hello world';

//  var submit = document.querySelector('input[type="submit"]');
//  submit.value="SEND";

//  var item = document.querySelector('.list-group-item');
//  item.style.color = 'red';


// //query selector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
 
// var input = document.querySelector('input');
// input.value = 'Hello World'


var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = "green";

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';

// QUERY SELECTOR ALL //
 
// var titles = document.querySelectorAll('.title');
// console.log(titles);

var odd = document.querySelectorAll('li:nth-child(odd)');


 for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}

var secondItem = document.querySelectorAll('li:nth-child(2)');

for(var i=0;i<secondItem.length;i++){
    secondItem[i].style.color = 'green';
}





