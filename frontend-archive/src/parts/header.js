import { Link } from 'react-router-dom'
import logo from './../assets/logo.png'

export default function Header(){
	const head = {
		"height": "3rem"
	}

	return(
		<div>
			<header className="flex bg-sky-500 p-[0.1rem_0.5rem] justify-between">
				 <div className="flex flex-row self-center justify-center">
					<img src={ logo } className="drop-shadow-[0.25rem_0.25rem_0.25rem_rgba(0,0,0,0.5)] w-[3rem] h-[3rem]" alt="IT Paradigm Logo" />
					<div className="flex flex-col content-center justify-center mx-[1rem]">
						<h3 className="header-title fjalla">IT Paradigm</h3>
						<h6 className="header-subtitle kode">Dalubhasaan ng Lungsod ng Lucena</h6>
					</div>
				</div>
				<nav className="navigations flex flex-row justify-center self-center">
					<Link to="/">Home</Link>
					<Link to="/user">Login</Link>
				</nav>
			</header>
		</div>
	)
}
