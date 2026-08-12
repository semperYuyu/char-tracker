import { Link } from "react-router-dom"


type NavButtonTypes = {
	path: string;
	name: string;
}

function NavButton({ path, name }: NavButtonTypes) {

	return(<div id={"nav-button"} className={"cursor-pointer"}> 
			<Link to={path}>
				<p className={"text-white text-2xl"}> {name} </p>
			</Link>
		</div>)
}

export default NavButton;