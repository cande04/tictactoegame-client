# Cory's README for tic-tac-toe game



## List of Technologies

- HTML
- CSS
- Javascript
- jQuery

## Planning
Planning began very high level - I knew I would need to begin with a basic 3x3 game board and a simple game logic. After I constructed the foundation, I planned to create forms to collect user information and store game data. With any remaining time, I wanted to enhance the UI with bootstrap and css formatting and styling.

## User Stories

- As a player, I can select the spot to place my input so I can have control over how I play the game.
- As a player, I can see where the last player played so I can choose where to play next
- As a player, I want an alert to play so I know when to go next
- As a player, I want an alert when the game is over so that I know who won the game and when to start a new one
- As a player, I want a button to start a new game so I can begin a new game
- As a player, I want to be able to login so that my playing history is tracked


## Wireframes
![Imgur](https://i.imgur.com/dUQoneC.jpg)

## Development and Problem Solving
I learned the hard way how important committing early and often is. The first day I deleted all of my work and had to start over from scratch. Fortunately, it happened in the beginning of the project... unfortunately, the set back cost me a day of work.

At first, I found the game logic to be fairly initimidating. To simplify it, I created code that was anything but DRY. Once this was successful, I refactored the code so it was more modularized. Moving forward, I'm not sure if this is best practice from a time persepctive but it definitely helped me in these early learning stages.

One of the biggest problems I faced in this project was creating a function to check for a draw / tie. I created a turn counter to switch from player to player and also used this to check for a draw. It worked perfectly except for the very last play - if the last play was a winning combination, it recognized it as a tie, not a win. After many attempts to de-bug, I knew it had something to do with timing of the turn incrementer and the checkForWinner function. Despite my debugging attempts and additional eyes from instructors, I was unable to find the root cause of the issue. That said, instead of using the turn counter, I decided to take a different approach to solve the problem - to draw a tie, my function now looks for an empty string in the store.game.cells array. If there is no empty string, and no winner is identified, then it draws the tie.

## Future Iterations

I would have liked to attempt a multi-player game, but unfortunately ran out of time. In the future, I would like to add a bit of AI to the game - instead of playing against a friend, I would like to create a game that plays against the computer.

From a pure aesthetics persepctive, the UI could definitely use some updating. I know that simple changes to the CSS and bootstrap formatting would make a world of a difference. I hope with more experience, I can implement these changes fairly quickly.

I would have also liked to add a little more creativity and styling to the gameboard, player messages, and alerts - it's pretty boring as it stands now.
