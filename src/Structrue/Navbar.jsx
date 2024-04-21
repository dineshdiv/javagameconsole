import {Link} from "react-router-dom";


export const Navbar = () => {
  
  return (
    <div className="nav-component">
 <div className="logoimg"><img src="codelogo.png" alt="" /></div>
        
     <h3 className="nav-Link"> <Link to={"/"}>Concurrency and Multithreading</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component2"}> Generics and Type Erasure</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component3"}> Exception Handling</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component4"}> Design Patterns</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component5"}> Enums</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component6"}> Type Casting</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component7"}> Method Overloading</Link></h3>
     {/* <h3 className="nav-Link"> <Link to={"/Component8"}> Module System</Link></h3> */}
     {/* <h3 className="nav-Link"> <Link to={"/Component9"}> Error Handling</Link></h3> */}
     <h3 className="nav-Link"> <Link to={"/Component10"}> Performance Optimization</Link></h3>
  
    </div>
  )
}
