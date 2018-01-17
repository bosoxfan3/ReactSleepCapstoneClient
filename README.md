RestFull
========

Table of Contents
-----------------
1. [Purpose](https://github.com/bosoxfan3/RestFull#purpose)
2. [Screenshots](https://github.com/bosoxfan3/RestFull#screenshots)
3. [Getting Started](https://github.com/bosoxfan3/RestFull#getting-started)
4. [Technologies Used](https://github.com/bosoxfan3/RestFull#technologies-used)

Purpose
-------
### What Is RestFull?
[RestFull](https://restfull.netlify.com/) is an app for tracking your sleep and factors that may influence the quality of your sleep. Simply fill out the form after a night of sleep, and it will show various statistics and trends in your sleep length and quality.

### Why Use RestFull?
Restfull was created to help people become more self-aware about their sleep habits. By charting how external factors such as caffeine and blue light exposure from devices affects your mood, RestFull makes it easy for users to extrapolate potential lifestyle changes that could improve their sleep and overall well-being.

Screenshots
-----------
**Landing Page:** Users can learn about RestFull, sign up, log in, or try it out with a demo account.
![Landing Page](/src/screenshots/3.png)

**Sleep Statistics Page:** Users can see graphs and charts displaying statistics such as average hours of sleep, morning mood vs caffeine usage, and average mood when the user exercises before sleeping.
![Sleep Statistics Page](/src/screenshots/2.png)

**My Sleeps Page:** This page displays all of the information from the nights of sleep the user has submitted. Nights of sleep can be edited or deleted.
![My Sleeps Page](/src/screenshots/4.png)

**Add Sleep Page:** This page allows the user to submit new nights of sleep. This is the same form used for editing nights of sleep.
![Add Sleep Page](/src/screenshots/5.png)

Getting Started
---------------
### Installing
```
>   git clone https://github.com/bosoxfan3/RestFull.git
>   cd RestFull
>   npm install
```
### Launching
```
>   npm start
```
Then open [`localhost:3000`](http://localhost:3000) in a browser.
**You will need to either sign up, log in, or use the demo account to access the main functions of RestFull**

### Testing
```
>   npm test
```

Technologies Used
-----------------
RestFull is a React app created with create-react-app. It utilizes Enzyme for testing. 

An accompanying RestFullAPI is a Node Javascript App created with Express. It utilizes MongoDB to track users and their nights of sleep. Developers will need to install MongoDB for full functionality.
### Front End
  * Javascript - Used to build all components and testing
  * CSS - Used for styling components
  * Enzyme - Used for testing components
  * TravisCI - Used for continuous integration and deployment
  * Netlify - Used for hosting

### Back End
  [RestFullAPI](https://github.com/bosoxfan3/RestFullAPI)
  * Node.js - Used for constructing the API
  * Express - Used for constructing the API
  * MongoDB - Used for the database
  * Mocha and Chai - Used for testing routes
  * TravisCI - Used for continuous integration

### Security
  * Bcrypt.js - Used to encrypt user passwords
  * Passport - Used to control authorized endpoints