/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

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
         studentList.appendChild(li);
         
         //creates the div with className 'student-details' and appends it to the list item
         const div = document.createElement('div');
         div.className = 'student-details';
         li.appendChild(div);

         //creates the img with className 'avatar', creates the src with image reference from data and alt-text 'Profile Picture' and appends it to the div
         const img = document.createElement('img');
         img.className = 'avatar';
         const src = document.createElement('src')
         img.src = data[i].picture.large;
         img.alt = 'Profile Picture';
         div.appendChild(img);

         //creates the H3 with className 'searchID', sets the text to first and last name from data, and inserts it after the img
         const h3 = document.createElement('h3');
         h3.className = 'searchID';
         h3.innerText = `${data[i].name.first} ${data[i].name.last}`;
         img.insertAdjacentElement("afterend", h3);
         
         //creates the email span with className 'email', sets the text to the email from data, and inserts it after the H3
         const span = document.createElement('span');
         span.className = "email";
         span.innerText = data[i].email;
         h3.insertAdjacentElement("afterend", span);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
showPage (data, 1);