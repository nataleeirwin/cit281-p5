# Project 5

This project was an optional extra credit projectrd that involved creating a monster game that runs. It's learning objectives included gain experience working with classes, including class constructors and methods,interpreting existing code to design a new class, including constructor and methods, and executing and debugging Node.js code using VSCode, including module breakpoints.

It also involved working with the concept of a gaming loop and  working with objects and arrays by using Array map() and forEach() methods.

Source code for this project can be found [here](https://github.com/nataleeirwin/cit281-p5)

### Elements

- Add _listMonsters()_ method that will list each of the monsters to the console. 
- Create a Monster class that uses:
      * constructor():
          * Accepts an object parameter, deconstructs the object into the following variables and matching            this class properties, with the specified default values
                * monsterName, defaults to "Unknown".
                * minimumLife, defaults to 0, represents the minimum life value for the monster to be                      considered alive.
                * currentLife, defaults to 100, represents the current life value that when decreases                       below minimumLife indicates the monster has died.
- The constructor MUST accept an object, and use parameter object deconstruction to extract the parameter variables, and default object values, as specified
- Sets the this class property isAlive to either true or false, depending on if the monster's currentLife >= minimumLife.
     * The setting of isAlive MUST use a single line of code to set the initial Boolean value based on            currentLife >= minimumLife.
- updateLife():
Accepts an integer, lifeChangeAmount, that represents the amount of life change, either positive or negative. If the monster currentLife amount drops below 0, set the currentLife to 0. If currentLife < minimumLife, set isAlive to true.
 * Your code MUST not use  any if() statements, using one line statement constructions, such as the ternary operator ( ? : ).

## Here is what the expected output was supposed to be

![Screenshot of expected output](https://github.com/nataleeirwin/cit281-p5/blob/main/p5%20files/Example%20output%20p5.png)
