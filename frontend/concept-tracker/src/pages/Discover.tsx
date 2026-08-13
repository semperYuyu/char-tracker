import CharacterCard from "../components/CharacterCard";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";
import { useEffect } from "react";
import { fetchAllCharacters } from "../functions/queryFunctions";
import { useQuery } from "@tanstack/react-query";
import "../styles/Discover.css";

function Discover() {
	useEffect(()=> {
		document.title = "CT | Discover"
	}, [])


	const { 
	data: char_data,
	isLoading: char_is_loading,
	error: char_error } = useQuery({
		queryKey: ['character_data'],
		queryFn: fetchAllCharacters,
		staleTime: 1000 * 60 * 5 // milliseconds * seconds * minutes ; this is 5 minutes
	})

	if (char_is_loading) return <Loading/>;
	if (char_error) return <ErrorPage/>;

	return(<> 
		<div className={"page-container"}>
			<p className={"title"}> Discover Page :D </p>

			<div id={"character-container"}>
				{ char_data.map((char, index) => {
					return(<CharacterCard name={char.name} sound={char.sound} key={char.name + index}/>)
				})}
			</div>
		</div>
		</>)
}

export default Discover;