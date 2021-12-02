# Barge Nomination CCI app

## This app creates a common customer interface (cci) for use in commodities physical trading movements by terminalling companies.

## Table of Contents
* [Installation](#installation)
* [Deployed Link](#deployed)
* [Usage](#usage)
* [Images](#images)
* [Contributions](#contributions)
* [Software](#software)
* [Questions](#questions)

## Installation
No installation is necessary - working app is live and deployed on Heroku. If user would like to work with the code locally, npm install in the command line should install all the dependencies as found in the package.jason file. Database will also need to be locally created in mySQL, then seeded with npm run seeds in the command line.

## Deployed 
https://barge-nomination-cci.herokuapp.com


## Usage
In the world of commodities trading (in partcular oil and gas), terminals are third party companies that provide storage facilities for the physical product with is traded on open markets. The terminals need a common customer interface as they typically have multiple customers with multiple tanks at their terminal. The app provides a clean and consise interface for the customer to direct the terminal what to do (in this case a barge nomination) by the customer entering a barge nomination with all the applicable parameters. All physical commodity moves require a third party inspection company on every movement to be the final arbiter of quantity and qulity - this is the third role in the system. This app allows for the customer user - or scheduler- to create, delete, update and comment on a nomination. The inspection company and terminal can look at all the nominations and sort them by counterparty (customer) or inspection company.
All nominations can be commented on by all user type - terminal, scheduler and inspector. This allows for communication between all three parties and can include acknowledgements of receipt or specific instructions.

## Images 
![Home Page](https://github.com/Jsumme1/barge-nomination/blob/main/public/assets/HomePage.JPG)
![Nomination Creation](https://github.com/Jsumme1/barge-nomination/blob/main/public/assets/NomCreate.JPG)
![Single Nom](https://github.com/Jsumme1/barge-nomination/blob/main/public/assets/SingleNom.JPG)


## Contributions
Made by Jennifer Devane, Daniel Allen and Julie Summers

## Software
This app was created using javaScript, jsNode, express (and its various children) dotenv, MySQL2, Sequelize, Flatpickr, Bcrypt, Handlebars, HTML, CSS. Heroku and JAWSbb used for deployment. 


## Questions 
* If you have any questions about the repo, open an issue or contact me directly at <julie.summers2000@gmail.com>.
* You can find more of my work at [https://github.com/Jsumme1](https://github.com/Jsumme1)
