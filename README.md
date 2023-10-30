# 14 Model-View-Controller (MVC): Tech Blog

## Description

This is the week 14 challenge project for the Northwestern coding bootcamp. Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents

- [User Story](#user-story)

- [Installation](#installation)

- [Usage](#usage)

- [Database Schema](#database-schema)

- [License](#license)

- [Github Repo](#github-repo)

- [Video Link](#video-link)

- [Questions](#questions)

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Installation

To insall necessary dependencies, run the following command:

```
npm i
```

## Usage

```md
GIVEN a CMS-style blog site
WHEN the user visit the site for the first time
THEN the user is presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN the user clicks on the homepage option
THEN the user is taken to the homepage
WHEN the user clicks on any other links in the navigation
THEN the user is prompted to either sign up or sign in
WHEN the user chooses to sign up
THEN the user is prompted to create a username and password
WHEN the user clicks on the sign-up button
THEN my user credentials are saved and the user is logged into the site
WHEN the user revisits the site at a later time and choose to sign in
THEN the user is prompted to enter my username and password
WHEN the user is signed in to the site
THEN the user sees navigation links for the homepage, the dashboard, and the option to log out
WHEN the user clicks on the homepage option in the navigation
THEN the user is taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN the user clicks on an existing blog post
THEN the user is presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN the user enters a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN the user clicks on the dashboard option in the navigation
THEN the user is taken to the dashboard and presented with any blog posts the user have already created and the option to add a new blog post
WHEN the user clicks on the button to add a new blog post
THEN the user is prompted to enter both a title and contents for my blog post
WHEN the user clicks on the button to create a new blog post
THEN the title and contents of my post are saved and the user is taken back to an updated dashboard with my new blog post
WHEN the user clicks on one of my existing posts in the dashboard
THEN the user is able to delete or update my post and taken back to an updated dashboard
WHEN the user clicks on the logout option in the navigation
THEN the user is signed out of the site
WHEN the user is idle on the site for more than a set time
THEN the user is able to view posts and comments but the user is prompted to log in again before the user can add, update, or delete posts
```

## Database Schema

This application uses the following database schema:

![database schema.](./public/assets/data%20schema.png)

## License

This project is licensed under MIT License

## Github Repo

https://github.com/ChgDave/CMS-Blog

## Deployed link on heroku

https://blogems-a6ce292e1cff.herokuapp.com/

## Questions

If you have any qustions about the repo, open an issue or contact me directly at chgdave@gmail.com. You can also find more of my work at [chgdave](https://github.com/chgdave).

## Review

You are required to submit BOTH of the following for review:

- The URL of the functional, deployed application.

- The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
