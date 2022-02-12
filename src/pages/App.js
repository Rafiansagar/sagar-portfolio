import React from 'react'
import AboutMe from '../components/About';

import avatar from '../assets/img/avatar.png';

function App() {
	return (
		<React.Fragment>
			<div className="main-content">
				<div className="container">
					<div className="row pt-100">
						<div className="col-md-6">
							<div className="intro-my">
								<div className="avatar mb-20">
									<img src={avatar} alt="my image" />
								</div>
								<div className="inrto-text">
									<h1 className="name">Hi, I’m <span className="primary-color">Sagar</span></h1>
									<h2 className="designation">Web Developer.</h2>
									<p className="desc">I'm the Front-End Developer for #Company in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.I'm the Front-End Developer for #Company in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
								</div>
								<ul className="btn-part">
									<li><a className="readon" href="#"><span>Download My CV</span></a></li>
									<li><a className="readon" href="#"><span>Hire Me</span></a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-6">
							<AboutMe
								boxClass="common-box mb-50"
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
export default App;
