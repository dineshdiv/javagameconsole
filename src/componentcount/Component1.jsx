import React, { useState } from 'react'
import { Maincom } from '../Structrue/Maincom'


export const Component1 = () => {
  const [runCodeData] = useState(null);


  const codesnip = {
    java: `public class Main {
      public static void main(String[] args) {
          // Create and start a new thread
          Thread thread = new Thread(new MyRunnable());
          thread.start();
          
          // Main thread continues its execution
          for (int i = 0; i < 5; i++) {
              System.out.println("Main Thread: " + i);
              try {
                  Thread.sleep(1000); // Sleep for 1 second
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
      }
  }
  
  class MyRunnable implements Runnable {
      @Override
      public void run() {
          // This code will be executed in a separate thread
          for (int i = 0; i < 5; i++) {
              System.out.println("Child Thread: " + i);
              try {
                  Thread.sleep(1000); // Sleep for 1 second
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
      }
  }
  
  
  `}
  const answer = {
    java: `public class Main {
      public static void main(String[] args) {
          // Create and start a new thread
          Thread thread = new Thread(new MyRunnable());
          thread.start();
          
          // Main thread continues its execution
          for (int i = 0; i < 5; i++) {
              System.out.println("Main Thread: " + i);
              try {
                  Thread.sleep(1000); // Sleep for 1 second
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
      }
  }
  
  class MyRunnable implements Runnable {
      @Override
      public void run() {
          // This code will be executed in a separate thread
          for (int i = 0; i < 5; i++) {
              System.out.println("Child Thread: " + i);
              try {
                  Thread.sleep(1000); // Sleep for 1 second
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
      }
  }
  
  `}

  return (
    <>
      
      <Maincom

        game={'https://dineshdiv.github.io/tictactoe/'}
        url={'https://videoconsole-lac.vercel.app/?url=https://www.youtube.com/embed/iyLqwyFL0Zc'}
        
       
        steps={[
          'Server-Client Model: We have a server program running on a machine and multiple client programs running on different machines. Each client represents a player.',
          'Multithreading on the Server: The server needs to handle multiple client connections concurrently. We can achieve this by using multithreading. Each time a new client connects, the server can spawn a new thread to handle communication with that client while still listening for new connections.',

          'Synchronization: Since multiple threads (each representing a client) will be accessing shared resources (like the game board), we need to ensure thread safety. We can use synchronization to control access to critical sections of code. For example, when a player makes a move, we want to ensure that only one player can modify the game board at a time.',
          
          'Client-Server Communication: Each client will continuously send messages to the server to update the game state (e.g., "Player X placed their mark at position (1,1)"). Similarly, the server will send messages to clients to inform them of the current game state (e.g., "Its now Player Os turn").',
          
          'Concurrency in Game Logic: Apart from handling client-server communication, the server also needs to manage the game logic. This involves determining whether a move is valid, checking for a win or draw, and updating the game state accordingly. These tasks can be executed concurrently to improve performance.',
          
          'Timeouts and Asynchronous Operations: We can implement timeouts for player moves to prevent one player from stalling the game indefinitely. Asynchronous operations can be used to handle timeouts without blocking the main execution thread.',
          
          'Error Handling and Exception Management: Since network operations and multithreading can introduce various types of errors, its crucial to handle exceptions properly to ensure the stability and reliability of the game.'
        ]}
        title={"Concurrency and Multithreading"}
        answer={answer}
        codesnip={codesnip}

      />

    </>
  )
}


export const ChildComponent = ({ runCodeData}) => {
  // const [runCodeData] = useState(null);
  // const updateRunCodeData = (newValue) => {
  //   setRunCodeData(newValue);
  // };
  
  // // Function to simulate an event triggering the update of runCodeData
  // const simulateEvent = () => {
  //   // Example: Simulate an event (e.g., a timer, API response, etc.) that triggers the update of runCodeData
  //   setTimeout(() => {
  //     updateRunCodeData(true); // or false, or null, depending on your logic
  //   }, 2000); // Simulating a 3-second delay before updating runCodeData
  // };

  // // When runCodeData changes, log its value
  // useEffect(() => {
  //   console.log("runCodeData changed:", runCodeData);
  // }, [runCodeData]);

  // // Simulate an event that triggers the update of runCodeData when the component mounts
  // useEffect(() => {
  //   simulateEvent();
  // }, []); // 

  return (
    <div className='testcase' >
      {runCodeData === true && <p className='blutext'>Ready to Run  </p>}
      {runCodeData === false && <p className='redtext '>Test case Failed ! </p>}
      {runCodeData === null && <p className='blutext'>Waiting for code comparison...</p>}
      
    </div>
  )
}


