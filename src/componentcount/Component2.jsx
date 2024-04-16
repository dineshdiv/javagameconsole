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
      <Maincom title={"Multithreading"}

       game={'https://dineshdiv.github.io/multithreading/'}
       url={'https://videoconsole-lac.vercel.app/?url=https://www.youtube.com/embed/_Ss42Vb1SU4'}
       
        steps={['Scope refers to the visibility and accessibility of variables and functions in a particular context within a program. In JavaScript, variables and functions have different scopes, which determine where they can be accessed and how long they persist. There are mainly two types of scope in JavaScript',
        'Global Scope:',
        'Variables declared outside of any function or block have global scope. They can be accessed from any part of the codebase, including within functions and blocks. Global variables persist throughout the entire lifetime of the program.',
        'Create a  "globalVariable" and value is "Goldcoin"',
         'Local Scope:',
         'Variables declared within a function or block have local scope.They are accessible only within the function or block in which they are declared. Local variables exist only as long as the function or block is executing.',
         'create a varible "localVariable " inside function and value is "CoinWithstone"',
         'In terms of comparing code with a coin game, you might create variables to represent the player score, the number of coins collected. These variables would likely have a local scope within the functions and globalscope,'
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
