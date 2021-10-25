import React from 'react'
import styled from 'styled-components'
import anticip from '../../assets/home.png'






export default function Headers() {




    return (
        <Header>
          <Logo>
              <img style={{height:'100%'}} src={anticip} alt="" className="logo" />
           </Logo>
           
           <nav className='nav' >

<ul> 
    <li><a   href="#Company">Company</a> </li>
    
    <li> <a  href="#About">About</a> </li>
    <li> <a  href="#Icttalents">Ict Talents</a> </li>
</ul>
               
               

           </nav>

           <button className='button'>Login</button>

        </Header>
    )
}


const Logo =styled.a`
height: 32.5%;
padding: 0.5rem 1.5rem;
`
;


// const navlinks =styled.div `
//  display: flex;
//  ul{
// display: 'inline-block';
// justify-content: 'space-between';
// text-decoration: 'none';
//   }
// `

const Header = styled.div`
display: flex;
align-content: center;
align-items: center;
justify-content: space-between;
font-size: 1.5em;
  text-align: center;
  color: white;
  background:#2B2D42;
  position: relative;
  margin-left: 15%;
  margin-right: 15%;
  height: 70px;

  -webkit-border-bottom-right-radius: 40px;
-webkit-border-bottom-left-radius: 40px;
-moz-border-radius-bottomright: 40px;
-moz-border-radius-bottomleft: 40px;
border-bottom-right-radius: 40px;
border-bottom-left-radius: 40px;
.nav{
margin-left: 1.2 rem;

}

.button{
    padding: 1.2 rem 5rem;
    
}

`;


