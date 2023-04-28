# Tome-Phone
Ecommerce Website: 

Tome Phones 

 
Group Members: 

Shauna Martyn 

Dara Lenaghan 

 

Supervisor: 

Martin Hynes 


Ecommerce Website 

In this project we aimed to create a fully functional ecommerce website, called Tome Phones, that offers an extensive range of quality mobile phones from all the leading brands. The website is user-friendly and easy to navigate. It can be operated from a customer's point of view where they can add products to their basket or it can be used by an administrator to update, change descriptions, images, and query stock.  

Requirements of the project:  

Product Management: The website should have a product management system that allows administrators to add, update and delete products from the database. The features should include product listing, product images, descriptions, pricing, and stock management.  

Shopping Cart: The website should have a shopping cart functionality that allows users to add products to their basket, view the basket and proceed to the checkout. The features should include basket total, and the ability to add/remove items in the basket.  

Order Management: The website should have an order management system the allows administrators to manage orders, process payments, update and check the status of an order and check order payment type.  

Responsive design: The website should have a responsive design that is optimised for different devices and screen sizes. It should provide a seamless and user-friendly experience on desktops, tablets, and smartphones.  

Payment Gateway Integration: The website should integrate with popular payment gateways to enable online payments. E.g., PayPal, Apple Pay.  

Security and Privacy: The website should implement measures such as SSL encryption, secure login, and checkout. 

Performance and Load times: The website should be optimised for performance and load times considering varying network speeds and bandwidth limitations.  

Database Management: The website should have a robust database management system that ensures data integrity, security, and scalability. The features should include database backups, data encryption and efficient query processing. E.g., MongoDB.  

Architecture (MERN App): 

Client-side (front-end): 

React – Interface, user interaction, client-side routing. 

Client interacts with server using REST API’s.  

Server-side (Backend): 

Node and Express, TypeScript.  

Handles server-side routing and REST API’s.  

Communicates with the database using MongoDB, Node.js and mongoose.  

Database: 

MongoDB – stores data in JSON document.  

Data is accessed through server-side using MongoDB.  

API: 

REST API’s - Handles communication between client and server.  

Deployment: 

Deployed on Azure or Heroku.  

Database is hosted on MongoDB.  

Technologies: 

This project was made using MERN (MongoDB, Express, React and Node.js stack. These were all used in creation of the back end of the website. HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript were all used in the development of the front-end. We choose to use HTML, CSS, and JavaScript as we have had previous experience using them over the past few years. We more recently created a project for one of our modules using MERN so we decided to see if we could create a similar project on a larger scale.  

Database design 

We used a Mondo DB for this project. The database was used to store the images of the products and update the stock and descriptions.  

Project plan and design methodology: 

Project Overview 

Define the project's objective and deliverables.  

Set project timelines and milestones.  

Requirements Gathering: 

Create a list of requirements and functionalities for the website.  

Design and User Experience: 

Create mock-ups for the website's layout.  

Define the user experience including creating a flow for the website and user interactions.  

Technology Stack and Development: 

Choose the technology stack for the website including front-end and back-end technologies.  

Develop the front-end using HTML, CSS, and JavaScript.  

Develop the back end using the appropriate technologies such as Node.js and MongoDB for the database.  

Develop the back-ends functionalities including the shopping basket, payment gateway and user authentication.  

Conduct testing to ensure the websites functionality, performance, and security.  

Content creation: 

Create relevant content for the website including product descriptions and images.  

Integrate the content seamlessly with the website to not interfere with the user experience.  

Testing and Development: 

Conduct testing including product browsing, adding to the cart, payment processing and user authentication.  

Address any bugs or issues identified during testing and make necessary improvements.  

Deployment: 

Deploy the website to a server such as Azure or Heroku.  

Maintenance: 

Provide ongoing maintenance to the website to ensure continued performance and security.  

Creating the frontend: 

We wanted a website that is visually appealing, easy to use, optimised for mobile devices and provides a seamless and enjoyable shopping experience for users. The website name and logo should appear on every page including the admin pages. We choose the colours and fonts for the website so it would have a sleek look and not take away from the products. The frontend of the project contains the product page, home page and cart page. These components are then connected to the backend API (Application Programming Interfaces) using Axios to fetch data from MongoDB. Authentication and authorisation which involves creating login and registration pages and implementing a token-based authentication system. This system involves generating a JSON web token (JWT) on the server-side and sending it to the client for secure user authentication. Finally, a payment gateway needs to be implemented to handle payments made by customers. This involves integrating a third-party payment API such as PayPal to handle credit card payments securely.  

Creating the backend: 

We designed the database schema and created the collections in MongoDB. The schema defines the structure of each document including the fields and their datatypes. The backend implements the necessary APIs (Application Programming Interfaces) that are responsible for creating, reading, updating, and deleting data from the database. The APIs are responsible for handling requests from the frontend and sending responses back with the requested data. User authentication and authorisation which involves creating middleware to validate JWT tokens and restrict access to certain APIs based on user roles and permissions. A third-party payment gateway can be integrated to the front-end or back-end of the project to handles credit card payments. Continuous testing and debugging of the backend should be done throughout development. Once completed the backend can be deployed to a cloud hosting platform such as Heroku, Google Cloud, AWS (Amazon Web Services) or Azure.  

Deployment: 

The backend server for the website was deployed on Heroku.  

Testing Plan: 

Unit Testing: Conduct unit testing for each individual component in the MERN stack including React components. Write unit tests for the backend Node.js code that interacts with MongoDB.  

Integration Testing: In the frontend conduct integration testing to ensure that different components and modules of the website work together correctly. Write unit tests for the Node.js code that interacts with MongoDB. 

Database Testing: Test the functionality of the Mongo DB database by using tools such as Mongo DB compass to inspect and verify the data stored in the database. Conduct stress tests to ensure that the database can handle high traffic and substantial amounts of data.  

Security Testing: Carry out security testing to identify and fix any vulnerabilities in the websites front end and back-end components.  

Usability testing: Conduct usability testing to evaluate the websites user interface and user experience. Test the websites usability on different devices, browsers, and operating systems. 

Regression Testing: Run regression tests to ensure that the changes or updates to the websites do not introduce new bugs or issues.  

Issues, limitations and known bugs: 

The biggest issue when creating this website was trying to host the backend on a server. We first tried to host the website on an Azure server. We encountered issues with access to the code from Azure. It did not show any issues when it was created however it failed to deploy correctly despite numerous attempts. We then decided to go a different route and try and deploy the website on a Heroku server instead. When we first tried this, we encountered a similar issue as with the Azure server. When we recreated the project and created a new GitHub repo for the project and generated new JSON packages it worked, and we were able to view our backend server on a URL created on the Heroku platform. We also ran into issues with GitHub when we could not get upload our code to the same repository every time and we had to create new projects in GitHub to continue with our work.  

Conclusions and learnings from the project: 

In has been a great learning experience designing and creating an ecommerce website. Throughout the development process we have applied our skills in creating the front-end and backend, including using React, Express, Node.js, typescript and MongoDB. The MERN stack provided a solid foundation for building an interactive user interface and managing data in the database. The use of MongoDB as the backend database has allowed for efficient data storage and retrieval making the website fast and responsive. As part of the development, we have also implemented comprehensive testing strategies. This has ensured a reliable and secure website with and provides a smooth user experience.  

In conclusion we are both proud of the successful development of our ecommerce website using the MERN stack and MongoDB. It has been a challenging but rewarding experience to create a functional and user-friendly website.  

 
