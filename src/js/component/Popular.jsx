import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



// import quotes from '/workspace/react-hello-webapp/quotes.json'
import { Favorite, Visibility, Tour, CheckCircle} from "@mui/icons-material";



import '../../styles/home.css'

const API_IMAGE = 'https://image.tmdb.org/t/p/w500/'

const Popular = () => {
	
	const sliceStart = Math.floor(Math.random()*15)
	const sliceend = sliceStart + 1
	const quoteStart = Math.floor(Math.random()*4)
	const quoteEnd = quoteStart + 1
	const {store, actions } = useContext(Context);
	const responsive = {
		2000: {
		items: 7,
		},
		1200: {
		items: 5,
		},
		800: {
		items: 2,
		},
		0: {
		items: 1,
		},
	};

	return (
	
	<div className="container mt-5">
		<h2 className="mb-4">Popular in 2022...</h2>
		<div className="d-flex justify-content-around mx-2">
			<AliceCarousel responsive={responsive} autoPlay autoPlayInterval="1500"> 
			{store.movies.map((movie, index) => (   
			<div key={index}>   
				<div key={index} className='ind me-1'>
					<Link to={`/details/${index}`}>
						<img className="card-img-top" src={API_IMAGE+movie.poster_path} />
					</Link>
				</div>
				<div className="d-flex justify-content-around p-1 position-relative">
				
					{store.seen.includes(API_IMAGE+movie.poster_path) ? <span title="Already seen"> <CheckCircle className="added" /></span> : (
					<button onClick={() => actions.setSeen(API_IMAGE+movie.poster_path)} className='seen' title="Add to your seen list"><Visibility /></button>
					)}	
					{store.favourites.includes(API_IMAGE+movie.poster_path) ? <span title="Added to favourites"> <CheckCircle className="added" /></span> : (
					<button onClick={() => actions.setFavourites(API_IMAGE+movie.poster_path)} className='fav' title="Add to your favourites list"><Favorite /></button>
					)}
				
					{store.pending.includes(API_IMAGE+movie.poster_path) ? <span title="Added to movies I want to see"> <CheckCircle className="added" /></span> : (
					<button onClick={() => actions.setPending(API_IMAGE+movie.poster_path)} className='pended' title="Add to your pending list"><Tour /></button>
					)}
					
				</div>
			</div>   
			))}
			</AliceCarousel>
		</div>
    </div>
    )
}

export default Popular