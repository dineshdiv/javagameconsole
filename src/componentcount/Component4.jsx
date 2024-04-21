import React from 'react'
import { Maincom } from '../Structrue/Maincom';
export const Component4 = () => {
  const codesnip = {
    javascript: `\nfunction createTarget(size, distance, pointValue) {
      // create a let isHit value is false
    
  
      function hit() {
        //Change the isHit value false to true 
          console.log("Target hit Points earned: " + pointValue);
      }
      function isTargetHit() { 
          return isHit;
      }
      function getDistance() {
          return distance;
      }
      return {
          hit: hit,
          isTargetHit: isTargetHit,
          getDistance: getDistance
      };
  }
  
  // Creating targets and assign the range & point
  const target1 = createTarget("Small");
  const target2 = createTarget("Medium");
  
  // Simulating gameplay
  if (target1.isTargetHit()) {
      console.log("Target 1 was hit at distance: " + target1.getDistance());
  } else {
      console.log("Target 1 was missed.");
  }
  
  target2.hit();
  
  if (target2.isTargetHit()) {
      console.log("Target 2 was hit at distance: " + target2.getDistance());
  } else {
      console.log("Target 2 was missed.");
  }
    `}
    const answer ={
      javascript:`\n function createTarget(size, distance, pointValue) {
        let isHit = false;
        function hit() {
          //Change the isHit value false to true 
            isHit = true;
            console.log("Target hit! Points earned: " + pointValue);
        }
        function isTargetHit() { 
            return isHit;
        }
        function getDistance() {
            return distance;
        }
        return {
            hit: hit,
            isTargetHit: isTargetHit,
            getDistance: getDistance
        };
    }
    // Creating targets and assign the range & point
    const target1 = createTarget("Small", 10, 10);
    const target2 = createTarget("Medium", 15, 20);
    // Simulating gameplay
    if (target1.isTargetHit()) {
        console.log("Target 1 was hit at distance: " + target1.getDistance());
    } else {
        console.log("Target 1 was missed.");
    }
    target2.hit();
    if (target2.isTargetHit()) {
        console.log("Target 2 was hit at distance: " + target2.getDistance());
    } else {
        console.log("Target 2 was missed.");
    }
    `}
    
  return (
    <>

    <Maincom  title={"Design Patterns"}
    answer={answer}
    game={"https://html-classic.itch.zone/html/2361181/td1.0.3/index.html"}
    url={'https://videoconsole-lac.vercel.app/'}
       steps={['Starting the Game : Run the TowerDefenseGame class as the main class to start the game.',
       
       'Placing Cannons : Use the Factory Method Pattern to create different types of cannons (e.g., BasicCannon, AdvancedCannon).Place cannons strategically along the enemy path to attack incoming enemies.',
       
       'Managing Resources : Implement the Singleton Pattern to ensure one instance of the game manager.The game manager keeps track of resources (e.g., currency) for building and upgrading cannons.',
       
       'Enemy Waves : Enemies spawn in waves, moving towards the destination.Use the Observer Pattern to notify cannons when enemies enter their range',
       
       'Upgrading Cannons : Employ the Decorator Pattern to enhance cannons with abilities or upgrades.Players use available resources to upgrade cannons, improving attack power, range, or special abilities.',
       
       'Cannon Strategies : Apply the Strategy Pattern to define different attack strategies for cannons.Cannons can utilize strategies such as single-target attack, area-of-effect attack, or rapid-fire attack.',
       
       'Special Abilities : Integrate the Command Pattern to implement cannon upgrade commands.Players execute upgrade commands to enhance cannon properties.',
       
       'Cannon States : Utilize the State Pattern to manage cannon states (e.g., idle, attacking, upgrading).Cannons transition between states based on their actions and game events.',
     
       ]}
       codesnip={codesnip}
       />
    
    </>
  )
}
