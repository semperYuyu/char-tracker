import NavButton from "./NavButton"

import "../styles/NavBar.css";

function NavBar() {

	const user = {
		logged_in: false,
		user_id: 1234,
	}

	return (<>
			<div id="main-container">

				<div id="nav-logo">
					<img src="/favicon.svg" alt="a logo"/>
				</div>

				<div id="nav-buttons-layout">

					<NavButton to="/characters" name="Browse"/> 
					
					{!user.logged_in && (<> 
								<NavButton to="/login" name="Login"/>
								<NavButton to="/signup" name="Sign Up"/>
						</>) || (<> 
							<NavButton to={`/profile/${user.user_id}`} name="Profile"/>
							<NavButton to={`/projects`} name="Projects"/>
						</>)}
					
				</div>

			</div>
		</>)
}

export default NavBar;