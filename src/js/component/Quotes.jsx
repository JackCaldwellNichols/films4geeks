import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import quotes from '/workspace/films4geeks/quotes.json'
import 'react-alice-carousel/lib/alice-carousel.css';





const Quotes = () => {
	
	const quoteStart = Math.floor(Math.random()*quotes.length)
	const quoteEnd = quoteStart + 1
	const {store, actions } = useContext(Context);


	return (
	
	<div className="text-center">

		<div>
			{
				quotes.slice(quoteStart, quoteEnd).map((quote, index) => {
					return (
					<div key={index} >
						<div > 
							<h6 className="m-0"><i>"{quote.quote}"</i></h6><br></br>
							<h6 className="m-0">{quote.movie}</h6><br></br>
							<h6 className="m-0">{quote.year}</h6>
						</div>
					</div>	
					)
				})
			}
		</div>
	</div>

	)
}

export default Quotes