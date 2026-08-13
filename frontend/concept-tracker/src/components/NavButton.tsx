import { Link } from "react-router-dom"


type NavButtonTypes = {
	to: string;
	name: string;
}

function NavButton({ to, name }: NavButtonTypes) {

	return(
		<>
			<Link to={to}>
				<div id={"nav-button"} className={"cursor-pointer"}> 
					<p className={"text-white text-2xl"}> {name} </p>
				</div>
			</Link>
		</>
		)
}

export default NavButton;