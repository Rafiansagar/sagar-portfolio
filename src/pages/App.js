import React from 'react'
import MyIntro from '../components/Intro';
import AboutMe from '../components/About';
import MySkills from '../components/Skills';

function App() {
	return (
		<React.Fragment>
			<div className="main-content">
<h3 style="background: red; color: white; padding: 10px 15px;">Still Working on it</h3>
				<div className="container">
					<div className="row pt-100">
						<div className="col-md-6">
							<MyIntro />
						</div>
						<div className="col-md-6">
							<AboutMe
								boxClass="common-box mb-50"
							/>
							<MySkills
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
