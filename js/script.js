/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

//Wanted amount of items per page
const itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page){
   //Initializes the required Beginning of the student list, and End of the student list
   const startIndex = (page * itemsPerPage) - itemsPerPage; 
   const endIndex = page * itemsPerPage;

   //Locates, anitializes and clears the Student List
   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = "";

   //Loops through the data-list, from startIndex to endIndex
   for (let i = 0; i < data.length; i++){
      if(i >= startIndex && i < endIndex){
         //creates the Li with className 'student-item cf' and appends it to the studentList
         const li = document.createElement('li');
         li.className = 'student-item cf';
         
         //creates the div with className 'student-details' and appends it to the list item
         const div = document.createElement('div');
         div.className = 'student-details';

         //creates the img with className 'avatar', creates the src with image reference from data and alt-text 'Profile Picture' and appends it to the div
         const img = document.createElement('img');
         img.className = 'avatar';
         const src = document.createElement('src')
         img.src = data[i].picture.large;
         img.alt = 'Profile Picture';

         //creates the H3 with className 'searchID', sets the text to first and last name from data, and inserts it after the img
         const h3 = document.createElement('h3');
         h3.className = 'searchID';
         h3.innerText = `${data[i].name.first} ${data[i].name.last}`;
         
         //creates the email span with className 'email', sets the text to the email from data, and inserts it after the H3
         const span = document.createElement('span');
         span.className = "email";
         span.innerText = data[i].email;

         //creates the div with className 'joined-details' and appends it to the list item
         const divDate = document.createElement('div');
         divDate.className = 'joined-details';

         //creates the span with className 'date', text-content from data and appends it to the div
         const spanDate = document.createElement('span');
         spanDate.className = "date";
         span.innerText = `Joined ${data[i].registered.date}`;
         
         //appends li to student list - div to li - img, h3 & span to div - divDate to list item - spanDate to divDate
         studentList.appendChild(li);
         li.appendChild(div);
         div.appendChild(img);
         div.appendChild(h3);
         div.appendChild(span);
         li.appendChild(divDate);
         divDate.appendChild(spanDate);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   //sets the number of pages equal to the list length divided by items per page, rounded up, so there will always be pages enough for the data list
   const numOfPages = Math.ceil(list.length / itemsPerPage);
   const linkList = document.querySelector('.link-list');

   //clears the current button lists for new selection
   linkList.innerHTML = '';

   //iterates through the button list, creates list item for each button
   for (let i = 0; i < numOfPages; i++){
      const li = document.createElement('li');

      //creates a button for each li, with inner text 1 above current 'i' index
      const button = document.createElement('button');
      button.innerText = [i+1];

      //appends list item to link list, and button to list item
      linkList.appendChild(li);
      li.appendChild(button);
   }
   //sets the first button in list to active (always starts at page 1)
   document.querySelector('button').className = 'active';

   //event listener waiting for click on linkList, checks if target is a 'BUTTON', and clears currently active button, and set new target as active.
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = ''
         e.target.className = 'active';

         //calls the showPage function with a new page target number, equal to inner text of target button
         showPage(data, e.target.innerText);
      }
   });
}

function searchField(list){
   header = document.querySelector('header');

   const label = document.createElement('label');
   label.setAttribute("for", "search");
   label.className = 'student-search';

   const span = document.createElement('span');
   span.innerText = 'Search by name';

   const input = document.createElement('input');
   input.setAttribute('id', 'search');
   input.setAttribute('placeholder', 'Search by name ....');

   const button = document.createElement('button');
   button.setAttribute('type', 'button');

   const img = document.createElement('img');
   img.setAttribute('src', 'img/icn-search.svg');
   img.setAttribute('alt', 'Search icon');

   header.appendChild(label);
   label.appendChild(span);
   label.appendChild(input);
   label.appendChild(button);
   button.appendChild(img);

/* <label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label> */
}

// Call functions
showPage (data, 1);
addPagination (data);
searchField(data);