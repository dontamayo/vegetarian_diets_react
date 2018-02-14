import React from 'react';
import '../css/styles.css'



const Header = (props) => {
    return (
    <header>
      <div className="logo">Vegetarian Diets</div>
      <input type='text' placeholder="type your food"onChange={props.keywords}/>
    </header>
    )
  }


export default Header;
