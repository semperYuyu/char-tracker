import { Link } from "react-router-dom"


type NavButtonTypes = {
	to: string;
	name: string;
}

function NavButton({ to, name }: NavButtonTypes) {

	return(<div id={"nav-button"} className={"cursor-pointer"}> 
			<Link to={to}>
				<p className={"text-white text-2xl"}> {name} </p>
			</Link>
		</div>)
}

export default NavButton;