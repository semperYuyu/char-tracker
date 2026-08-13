import CharacterCard from "../components/CharacterCard";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";
import { useEffect, useState } from "react";
import { fetchAllCharacters } from "../functions/queryFunctions";
import "../styles/Discover.css";

function Discover() {
	const [data, setData] = useState(null);

	useEffect(()=> {
		document.title = "CT | Discover"

		const callback = async () => {
			const request = await fetchAllCharacters()

			setData(request)			
		}

		callback()
	}, [])


	if (!data) return <Loading />


	return(<> 
		<p> Discover :D </p>

		<div id={"character-container"}>
			{ data.map((char) => {
				return(<CharacterCard name={char.name} sound={char.sound}/>)
			})}
		</div>
		</>)
}

export default Discover;