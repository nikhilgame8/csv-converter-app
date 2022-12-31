import React, {useState} from 'react';
import { Heading } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai'

const Navbar = () => {

  const [menu, setMenu] = useState("container");

  function myFunction() {
    if(menu==="container"){
      setMenu("change");
    }else{
      setMenu("container");
    }
  }

  return (
    <nav>
      <div style={{fontSize: "40px"}}>
      <AiFillHome />
      </div>
      <Heading>EDI Data and Validation</Heading>
      <div>
      <div className={`${menu}`} onClick={myFunction}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
