import React, { useState } from 'react'
import { Maincom } from '../Structrue/Maincom'

export const Component2 = () => {
  const [runCodeData] = useState(null);
const codesnip = {
    java: `public class MultithreadingExample {
      public static void main(String[] args) {
          // Create and start two threads
          Thread thread1 = new Thread(new MyRunnable("Thread 1"));
          Thread thread2 = new Thread(new MyRunnable("Thread 2"));
          thread1.start();
          thread2.start();
      }
  
      // Runnable implementation representing a task to be executed by a thread
      private static class MyRunnable implements Runnable {
          private final String name;
  
          MyRunnable(String name) {
              this.name = name;
          }
  
          
          public void run() {
              for (int i = 0; i < 5; i++) {
                  System.out.println(name + ": " + i);
                  try {
                      // Introducing a short delay to simulate work being done by the thread
                      Thread.sleep(1000);
                  } catch (InterruptedException e) {
                      e.printStackTrace();
                  }
              }
          }
      }
  }
  
    
`}

    const answer = {
      java: `public class MultithreadingExample {
        public static void main(String[] args) {
            // Create and start two threads
            Thread thread1 = new Thread(new MyRunnable("Thread 1"));
            Thread thread2 = new Thread(new MyRunnable("Thread 2"));
            thread1.start();
            thread2.start();
        }
    
        // Runnable implementation representing a task to be executed by a thread
        private static class MyRunnable implements Runnable {
            private final String name;
    
            MyRunnable(String name) {
                this.name = name;
            }
    
            @Override
            public void run() {
                for (int i = 0; i < 5; i++) {
                    System.out.println(name + ": " + i);
                    try {
                        // Introducing a short delay to simulate work being done by the thread
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
    
      `}
  return (
    <>
      <Maincom title={"Generics and Type Erasure"}

       game={'https://html-classic.itch.zone/html/8547146/web/index.html'}
       url={'https://videoconsole-lac.vercel.app/?url=https://www.youtube.com/embed/_Ss42Vb1SU4'}
       
        steps={['Understanding the Deck Class:  The Deck class represents a generic deck of cards.You can create a deck of playing cards or Uno cards using this class.',
          
          'Adding Cards to the Deck:  Use the addCard method of the Deck class to add cards to the deck.For playing cards, create instances of the PlayingCard class and add them to the playing card deck.For Uno cards, create instances of the UnoCard class and add them to the Uno card deck.',
          
          'Testing Type Erasure:  Use the Main class to create instances of decks and add cards to them.Try to perform type-specific operations, such as checking the type of cards in a deck.Note how type erasure affects the ability to perform type-specific operations at runtime.',
          
          'Run and Observe:  Compile and run the program.Observe the output and verify that decks of both playing cards and Uno cards can be created successfully.Notice how type erasure affects type-specific operations, such as checking the type of cards in a deck.',
          
          'Experiment and Learn:  Feel free to experiment with the code.Try adding more features to the game or modifying existing ones.Explore how generics and type erasure behave in different scenarios.',
          
          'Conclusion:  The game serves as a hands-on learning experience to understand how generics and type erasure work in Java.By experimenting with the provided code and observing the behavior, you will gain a better understanding of these concepts.'
          ]}
         answer={answer}
         codesnip={codesnip}

      />

    </>
  )
}

export const ChildComponent = ({ runCodeData}) => {
  
  return (
    
    <div className='testcase' >
      {runCodeData === true && <p className='blutext'>Ready to Run  </p>}
      {runCodeData === false && <p className='redtext '>Test case Failed ! </p>}
      {runCodeData === null && <p className='blutext'>Waiting for code comparison...</p>}
    </div>
    
  )
}
