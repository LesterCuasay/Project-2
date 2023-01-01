# __General Knowledge Quiz - Portfolio Project 2__

Welcome to my Quiz!

This general knowledge quiz tests the minds ranging from young to old. The questions are randomly generated and are presented with four possible answers to choose from but only one being the correct answer. After finishing the quiz, the score will be feedbacked to the user and they can restart the quiz if they choose to.

![amiresponsive](assets/docs/amiresponsive.png "amiresponsive")

## Live Site
[General Knowledge Quiz](https://lestercuasay.github.io/Project-2/)

## Repository
https://github.com/LesterCuasay/Project-2

## __Table of Contents__
- [Objective](#objective)
- [Goals](#goals)
- [UX & Design](#ux--design)
    - [User Stories](#user-stories)
- [Initial Concept](#initial-concept)
    - [Wireframes](#wireframes)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
- [Features](#features)
    - [Logo and Navigation Bar](#logo-and-navigation-bar)
    - [Main Image](#main-image)
    - [Footer](#footer)
    - [Back to Top](#back-to-top)
    - [Contact Form](#contact-form)
    - [Back to Home](#back-to-home)
    - [Video](#video)
- [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
- [Testing](#testing)
- [Bugs](#bugs)
    - [Current Bugs](#current-bugs)
    - [Resolved Bugs](#resolved-bugs)
- [Deployment](#deployment)
    - [GitHub Pages](#github-pages)
    - [Forking the GitHub Repository](#forking-the-github-repository)
    - [Making a Local Clone](#making-a-local-clone)
- [Credits](#credits)

***
## __Objective__
In this project I intend to make a quiz that is responsive with mobile, tablet and desktop. The project is also intended to implement the use of HTML, CSS and Javascript.
___
### __Goals__
In this project I intent to create a quiz that tests the knowledge of the users no matter their age group.

- An intro page showing rules of the quiz.
- A well structured quiz area.
- A feature showing if the answer was correct or incorrect.
- An opportunity to restart the quiz to get a better result.

***
## __UX & Design__

### User Stories
 - As a first time user, I want to be able to figure out what the application is intented for so that I can use it with ease.
 - As a user, I want clear indication whether I got the answer correct or incorrect so that I am aware.
 - As a user, I want to be able to see my score at the end so that I can check how I did.
 - As a returning user, I want to be able to restart the quiz so that I can try and improve my score.
 
 ***
 ## __Initial Concept__

 I hope to deliver a quiz that is simple to use for the user with no conflicting colours to distract them. The application also needs to be easily navigated throughout different devices such as desktop, tablet or mobile devices.

 ### Wireframes
 ___
 As part of the planning stage, I created wireframes for desktop and mobile using [Figma](https://www.figma.com/). This allowed me to have a scratch idea on how to go ahead with the application.

 The layout I created on figma, I have followed throughout making the application but throughout the project I have added more features to make it better for users to use.

 ![intro-page](assets/docs/figma-intro.png "intro")
 - The layout throughout the application is consitent to the intro page making the application flow thus being easier to navigate for users.

 ![quiz](assets/docs/figma-quiz.png "quiz")
 - The only difference in this layout is the text indicating to users that the quiz has started.

### Colour Scheme
___
![colourscheme](assets/docs/colour-scheme.png "colour scheme")

I used [Coolors.co](https://coolors.co/) to choose my colour scheme.

The body background I have chosen for this application is #5c6d99 which is Blue Yonder. The background for the main areas I used #fff which is White and the text colour for that being #131515 Eerie Black.

But in some cases where the background is #5c6d99 for the buttons I used #fff as the text colour for better readability.

I have also used #54648c Dark Blue Gray as a hover effect on the buttons.

### Typography
___

For the Application, I am using [Google Fonts](https://fonts.google.com/). 
I decided to use Catamaran as the heading text for the application and Neuton for the rest of the text.

For the font pairings I used [Fontjoy](https://fontjoy.com/)

![fontpairing](assets/docs/font-generator.png "fontpairing")

***
## __Features__

![start-quiz](assets/docs/start-quiz.png "start-quiz")
- This feature is located at the intro page of the quiz, clicking this button will start the quiz.

![question-tally](assets/docs/question-tally.png "question-tally")
- This feature shows how many question is left and what number of question you are on. It will increment every time the next question button is clicked.

![time-left](assets/docs/time-left.png "time-left")
- This feature is a countdown, the user has 30 seconds to answer the question and move on to the next question.

![correct](assets/docs/correct.png "correct")
![incorrect](assets/docs/incorrect.png "incorrect")
- This features lets the user know if the answer they have chosen is correct or wrong when they click the "Next Question" button.

![time-out](assets/docs/time-out.png "time-out")
- When the timer reaches 0 the user will be alerted that they have ran out of time and the quiz will reload back to the intro page.
![reload](assets/docs/reload.png "reload")

![pick-answer](assets/docs/pick-answer.png "pick-answer")
- This feature pops up when the user tries to click the "Next Question" button without picking an option.

![next](assets/docs/next.png "next")
- This feature enables the user to move on to the next question after picking an answer to the question.

![all-right](assets/docs/all-right.png "all-right")
- This feature pops up at the end of the quiz if the user got all of the questions right.

![half-right](assets/docs/half-right.png "half-right")
- This feature pops up at the end of the quiz if the user got half of the questions right.

![less-than-half](assets/docs/less-than-half.png "less-than-half")
- This feature pops up at the end of the quiz if the user got less than half of the questions right.

![try-again](assets/docs/try-again.png "try-again")
- At the results page, if the user wants to restart the quiz they will be able to by clicking this button and it will take them back to the intro page.

![footer](assets/docs/footer.png "footer")
- This feature is seen both at the intro page and the quiz page, they are links to my [LinkedIn](https://www.linkedin.com/in/lester-cuasay/) profile and [GitHub](https://github.com/LesterCuasay?tab=repositories) profile.
