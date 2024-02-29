[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# teamprofilegenerator
This App will take inputs into the CLI, for basic employee info and create a team profile web page based on the given info.
To do this I have used inquirer, fs, path, from the node package libraries.
first I have created a recursive function within the .prompts,
I have used a range of prompt types from a basic input, email, number and list,
Doing this has allowed a basic level validation of the data been inputted into the prompts.
I have also used a when clause in the office number, github user name, and school prompts,
the reason for this is because not every team member needs all this information and the 
nature of the when clause means those prompts will only be called if the condition is met I.E 
if you select the role of manager the next prompt is asking for office number.
then at the end of the prompts you get a boolean prompt of yes or no to do you want to add another employee.
To allow the accurate construction of the html document at the end I have built this APP based on 4 class files,
1 parent class 'Employee.js' and 3 sub-classes 'Manager.jd', Engineer.js', and 'Intern.js'.


# License
MIT
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
## Table of Contents

* [Installation](#installation)
* [License](#license)


## Installation

This codebase will run locally or in an online environment, 
There's all you should need to do is open you're terminal or cmd program in the same directory as the code,
 then run the command,
npm i 
if you run this command in the root of your directory after cloning my repo to your local machine then you will install all the dependencies needed in this project.
then setup the directory structure as follows:

>> root directory;
> index.js

>package.json

>> lib (directory)

> Employee.js

> Engineer.js

> Intern.js

> Manager.js

>> output (Empty directory)

>>src (directory)

> page-template.js

Once these files are correctly placed you can directly load the index.js file in your cmd window with the command "node index.js"


## License

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

--

## Tests

This webpage has been tested using Git Pages [Click here to visit my live  git page]( https://baxt01.github.io/teamprofilegenerator/)


## Screenshots

 ![My Repo](https://github.com/baxt01/baxt01ReadmeGenerator/blob/main/images/repo.png) 
  ![live pages](https://github.com/baxt01/baxt01ReadmeGenerator/blob/main/images/livepages.png) 
