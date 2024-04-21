import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component5 = () => {
  const codesnip = {
    java: `// Enum declaration for representing choices in Rock-Paper-Scissors game
    enum Choice {
        ROCK, PAPER, SCISSORS;
    
        // Method to determine the winner of a game round
        public Result playAgainst(Choice opponent) {
            if (this == opponent) {
                return Result.DRAW;
            }
            switch (this) {
                case ROCK:
                    return (opponent == SCISSORS) ? Result.WIN : Result.LOSE;
                case PAPER:
                    return (opponent == ROCK) ? Result.WIN : Result.LOSE;
                case SCISSORS:
                    return (opponent == PAPER) ? Result.WIN : Result.LOSE;
                default:
                    throw new IllegalStateException("Unexpected value: " + this);
            }
        }
    }
    
    // Enum to represent the result of a game round
    enum Result {
        WIN, LOSE, DRAW
    }
    
    public class Main {
        public static void main(String[] args) {
            // Player and opponent choices
            Choice playerChoice = Choice.ROCK;
            Choice opponentChoice = Choice.SCISSORS;
    
            // Determine the result of the game round
            Result result = playerChoice.playAgainst(opponentChoice);
    
            // Display the result
            System.out.println("Player chose: " + playerChoice);
            System.out.println("Opponent chose: " + opponentChoice);
            System.out.println("Result: " + result);
        }
    }
    
    
    `}
    const answer = {
      java: `\n
      //create a let variable
      let num = "10";
      let blue = "10";
      
      // define let (result) = num add 5
      let result = num + 5; // (string concatenation)
      
    // assign == for type coercion
      if (num==blue) {
          console.log("Equal"); //(type coercion: blue is coerced to a number)
      } else {
          console.log("Not equal");
      }
    // assign === for type coercion
      if (num===blue) {
          console.log("Equal");
      } else {
          console.log("Not equal"); // Output: "Not equal" (no type coercion: different types)
      }
     // Output: Not executed (0 coerced to false in a boolean context)
     // Output:  executed (10 coerced to true in a boolean context)
  if (num) {
      console.log("Truthy"); 
  } else {
      console.log("Falsy"); 
  }  
      
      `}
  return (
    <>
    <Maincom  title={"Enums"}
    game={"https://dineshdiv.github.io/rock-paper-enums/"}
    url={'https://videoconsole-lac.vercel.app/'}
      steps={['The game "Rock, Paper, Scissors" is played between the player and the computer.',
      
      'Each player selects one of three options: rock, paper, or scissors.',
      
      'The winner is determined based on the rules:',
      'Rock crushes scissors (rock wins against scissors).',
      'Scissors cuts paper (scissors win against paper).',
      'Paper covers rock (paper wins against rock).',
      
      'If both players choose the same option, the game is a draw.',
      
      'The players choice and the computers choice are revealed simultaneously.',
      
      'The game displays the result: win, lose, or draw.',
    
      ]}
      codesnip={codesnip}
      answer={answer}
      />
    </>
  )
}

