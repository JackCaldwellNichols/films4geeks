import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

import "../../styles/details.css";
import { Paper } from "@mui/material";
const API_IMAGE = 'https://image.tmdb.org/t/p/w500/'

export const ComingSoon = () => {
	const { store, actions } = useContext(Context);

	let params = useParams()

	return (
		<div className="container mt-4">
			<Paper>
			<div>
				<div className="card-title">
					<h3>{store.comingSoon[params.index].title}</h3>
				</div>
				<div className="card-body d-flex justify-content-space-around">
					<img className = 'card-img-top p-3'src={`https://image.tmdb.org/t/p/w500/${store.comingSoon[params.index].poster_path}`} style={{height: '36em', width:'25em'}} />
					<div >
						<h5>Overview</h5>
						<p>{store.comingSoon[params.index].overview}</p>
					</div>
				</div>
				
			</div>
			<Link to="/">
				<button className="btn btn-secondary">Back home</button>
			</Link>
			</Paper>
		</div>
	);
};
