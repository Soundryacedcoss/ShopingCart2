import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from './App';
export const Navbar = () => {
  const value1=useContext(DataContext)
      console.log(value1);
  return (
    <>
    <div className='Navbar'>
        <div id="header">
		<nav>
			<ul id="menu">
				<li><a href="#">Home</a></li>
				<li><a href="#">Products</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
	</div>
    </div>
    </>
  )
}
