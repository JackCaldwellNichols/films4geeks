import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";
import '../../styles/navbar.css'

export const Navbar = () => {

	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		if (theme === 'light') {
		setTheme('dark');
		} else {
		setTheme('light');
		};

	}

	useEffect(() => {
	document.body.className = theme;
	}, [theme]);
			
	

	return (
		<nav className="navbar d-flex justify-content-between
		">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-4">Films4Geeks</span>
			</Link>
			<div className="ml-auto d-flex me-4">
				<Link to="/demo">
					<div className="nav-link">Login</div>
				</Link>
				<Link to="/starring" >
					<div className="nav-link">Starring</div>
				</Link>
				<Link to="/search">
					<div className="nav-link">Search</div>
				</Link>
				<Link to="/profile">
					<div className="nav-link">My Profile</div>
				</Link>
				{theme === 'light' ? ( 
				<button className="toggle" onClick={toggleTheme}><i className="fas fa-moon"></i></button>
				) : (
				<button className="toggle" onClick={toggleTheme}><i className="fas fa-sun"></i></button>
				)}
			</div>
		</nav>
	);
};
