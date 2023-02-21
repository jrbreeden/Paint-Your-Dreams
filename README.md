# Paint-Your-Dreams
Premise: 
The windows game paint used to be one of my favorite computer games as a child and I like going to art museums. I want to use my love for art to create a fun app for people of all ages.

 # Gamelink
 https://paintdreams.herokuapp.com/

The User Story:
 * The user will log in
* The user will be able to view painters
 * The user will be able to leave reviews for the painters

## Wireframes:
 <img width="1616" src="img/Screen Shot 2022-06-17 at 12.11.02 PM.png">

## The ERD: 
<img width ="1616" src="img/Paint Your Heart Out ERD.png">

Routes:
 * Index:
   * GET/reviews
* Show:
  * GET/reviews/:id
* New:
   * GET reviews/new
* Edit
  * GET /reviews/:id/edit
* Create
  * POST / reviews
* Update
  * PUT /reviews/:id
* Destroy
   * DELETE /reviews/:id

Technologies Used:
* CSS
* Express
* Liquid
* MongoDB
* Heroku

How To Use:
   * Log in
   * Enter your information
   * Add your favorite painters
   * Create reviews for painters
   * Edit painters
   * Delete painters
   
MVP Requirements:
* A user will be able to log in
* The user will be able to enter their name, a bio, and their email address
* The user will be able to add their favorite painters
* The user will be able to leave reviews for the painters

Stretch goals / ICE BOX:
   * Font Design
   * Sound
   * Paintings
   * Be able to edit and delete reviews
   