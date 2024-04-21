import React from 'react'
import { Maincom } from '../Structrue/Maincom';
export const Component3 = () => {
  const codesnip = {
    java: `public class ExceptionHandlingExample {
      public static void main(String[] args) {
          try {
              // Code that may throw an exception
              int result = divide(10, 0); // Attempting to divide by zero
              System.out.println("Result: " + result); // This line will not be executed if an exception occurs
          } catch (ArithmeticException e) {
              // Handling the exception
              System.out.println("An ArithmeticException occurred: " + e.getMessage());
          }
      }
  
      // Method that may throw an exception
      public static int divide(int dividend, int divisor) {
          return dividend / divisor; // This line may throw an ArithmeticException if divisor is 0
      }
  }
  
 
    `}
    const answer = {
      java: `public class ExceptionHandlingExample {
        public static void main(String[] args) {
            try {
                // Code that may throw an exception
                int result = divide(10, 0); // Attempting to divide by zero
                System.out.println("Result: " + result); // This line will not be executed if an exception occurs
            } catch (ArithmeticException e) {
                // Handling the exception
                System.out.println("An ArithmeticException occurred: " + e.getMessage());
            }
        }
    
        // Method that may throw an exception
        public static int divide(int dividend, int divisor) {
            return dividend / divisor; // This line may throw an ArithmeticException if divisor is 0
        }
    }
    
      `}
  return (
    <>
    <Maincom  title={"Exception Handling"}
    game={"https://dineshdiv.github.io/memory-matching/"}
    url={'https://videoconsole-lac.vercel.app/'}
     steps={['Starting the : Run the MemoryGame class as the main class to start the game.',
      
      'Flipping Cards : You will see a grid of face-down cards displayed on the screen.Use the keyboard or mouse to select and flip over pairs of cards.Each card has an image associated with it, but the images are hidden initially.',
      
      'Finding Matching Pairs : When you flip over two cards, their images will be revealed.If the images match, the cards remain face up, and you continue to search for more pairs.If the images do not match, the cards are flipped face down again, and you continue to search for matching pairs.',
      
      'Game Progress : Continue flipping pairs of cards until you have successfully matched all pairs.The game will keep track of your progress and display the number of pairs matched.',
      
      'Memory Management and Garbage Collection : Throughout the game, Javas memory management and garbage collection mechanisms automatically handle the allocation and deallocation of memory for cards that are no longer in use.Cards that are no longer part of the current game become eligible for garbage collection, ensuring efficient use of memory resources.',
      
      'Game Over : Once you have successfully matched all pairs of cards, the game will display a "Congratulations" message indicating that you have won.',
      
      'Restarting the Game : To play again, simply run the MemoryGame class again to start a new game.',
      
      'Conclusion : The memory card matching game provides an enjoyable and interactive experience while also demonstrating Javas memory management and garbage collection capabilities.By playing the game, you can gain a better understanding of how Java handles memory allocation and deallocation, ensuring optimal performance and resource utilization.'

     ]}
     answer={answer}
     codesnip={codesnip}
     />
    </>
  )
}
