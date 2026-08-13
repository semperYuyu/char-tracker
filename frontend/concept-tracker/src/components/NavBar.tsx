import NavButton from "./NavButton"

import "../styles/NavBar.css";

function NavBar() {

	const user = {
		logged_in: true,
		user_id: 1234,
	}

	return (<>
			<div id="main-container">

				<div id="nav-logo">
					<img src="/favicon.svg" alt="a logo"/>
				</div>

				<div id="nav-buttons-layout">

					<NavButton to="/discover" name="Discover"/> 
					
					{!user.logged_in && (<> 

								<NavButton to="/login" name="Login"/>
								<NavButton to="/signup" name="Sign Up"/>

								</>) || (<> 

								<NavButton to={`/projects/${user.user_id}`} name="Projects"/>
								<NavButton to={`/profile/${user.user_id}`} name="Profile"/>

								</>)}
					
				</div>

			</div>
		</>)
}

export default NavBar;