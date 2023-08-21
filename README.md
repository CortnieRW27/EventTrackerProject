### Description

During this project I worked on the back end of the Event Tracker that will eventually become the newest and greatest way to track your favorite beers and beer events. I got all CRUD operations working in postman and then went back to input error handling. I can now list all beers in my database, find one by its ID, create a new one, update a beer, and also delete one. My update from this weekend is now a fully functioning front end that is loaded and navigated through dynamically using JavaScript and AJAX. The final addition to this project was the Angular front end that now allows a user to see a list of beers, create a beer, update a beer, and delete one all through a dynamic html page created with Angular. 

#### Technology Used

### REST Endpoints 

| HTTP Verb | URI                      | Request Body | Response Body |
|-----------|--------------------------|--------------|---------------|
| GET       | `/api/hoptrack`          |              | List of beers |
| GET       | `/api/hoptrack/{beerId}` |              | Single beer | 
| POST      | `/api/hoptrack`          | Representation of a beer| Created beer|
| PUT       | `/api/hoptrack/{beerId}` | Representation of a new version of a beer | Updated beer|
| DELETE    | `/api/hoptrack/{beerId}` |              |                | 

Chrome 
Eclipse 
Git Hub 
Terminal
Postman
MYSQL
Angular

#### Lessons Learned

-	Use of Postman

-	Better understanding of CRUD methods

-	Using a service layer with the Service Impl and the Repository

-	The communication between the Repo, Service layer, and the controllers

-	More experience with MYSQL Workbench
	
-	Better understanding of Angular, how the services and the component classes work together

-	How the back in works and the connection with the front end

-	Understanding css and bootstrap more 

-	Observables and Subscribe