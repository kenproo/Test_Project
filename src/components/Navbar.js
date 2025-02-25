import {Link} from "react-route-dom";

const NavBar = () =>{
 return (
<nav>
<ul>
    <li>
       <Link to ="/list/phim-le"></Link>
    </li>
    <li>
       <Link to ="/list/phimm-bo"></Link>
    </li>
    <li>
       <Link to = "/genre/"></Link>
    </li>
    <li>
       <Link to ="/"></Link>
    </li>
    <li>
       <Link to ="/"></Link>
    </li>
    <li>
       <Link to ="/"></Link>
    </li>
    <li>
       <Link to ="/"></Link>
    </li>
</ul>

</nav>
    
 )

}


export default NavBar
