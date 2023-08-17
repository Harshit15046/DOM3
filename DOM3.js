//Examine the Document Object
console.log(document);
//  var currentdomain=document.domain;
//  console.log(currentdomain);
// console.log(document.title);
//  console.log(document.doctype);
//  console.log(document.URL);

//  document.title=123;
//   console.log(document.head);
//   console.log(document.body);
//   console.log(document.all);
//  console.log(document.all[10]);

 //document.all[10].textContent='harshit';
//  console.log(document.forms);
//  console.log(document.links);

//  console.log(document.images);

 //console.log(document.forms);
   
 //Get Element by ID

  //console.log(document.getElementById('header-title'));
   
  var headerTitle=document.getElementById('header-title');
  var header=document.getElementById('main-header');
  //console.log(headerTitle);
  // headerTitle.textContent='harshit';
  // headerTitle.innertext='GoodBye';

  //headerTitle.style.borderBottom='solid 3px #000';
  header.style.borderBottom='solid 3px #000';

  //GetElement by className

  var items=document.getElementsByClassName('list-group-item') ;

  for(var i=0; i<items.length;i++)
  {
       items[i].style.fontWeight='bold';
  }

//   console.log(items);
//   console.log(items[1]);
//   items[1].textContent='hello';
//   items[1].style.fontWeight='bold';
//   items[1].style.backgroundColor='yellow';

  //gives error

   //items.style.backgroundColour='green';
   for(var i=0; i<items.length;i++)
  {
    items[2].style.backgroundColor='green';
   }

// Get the <ul> element by its ID
 // var itemList = document.getElementById('items');

// Create a new <li> element
//var  newListItem = document.createElement('li');

//newListItem.textContent = 'item 5'; // Change the text content of the new item

// Append the new <li> element to the <ul> element
//itemList.appendChild(newListItem);

// Change the background color of the 2nd item
var seconditem = document.querySelector('#items li:nth-child(2)');
seconditem.style.backgroundColor = 'green';

// Make the 3rd item invisible
var thirditem = document.querySelector('#items li:nth-child(3)');
thirditem.style.display = 'none';


