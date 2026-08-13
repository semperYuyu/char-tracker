import "../styles/CharacterCard.css"

type CharacterCardTypes = {
	name: string,
	sound: string,
	img: string,
}

function CharacterCard({ name, sound, img }: CharacterCardTypes) {


	return(<> 
			<div id={"character-card-container"} onClick={()=> console.log('what the')}> 
				<img id={"character-portrait"} src={img || "/question_mark.png"} alt={img || "where picture"}/>

				<div id={"character-info"}>
					<p className={"font-bold text-3xl"}> {name} </p>
					<p> says {sound} </p>
				</div>
			</div>
		</>)
}

export default CharacterCard;