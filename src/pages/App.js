import React, { useState } from "react";
import { Circle2 } from 'react-preloaders2';
import MyIntro from '../components/Intro';
import AboutMe from '../components/About';
import Progress from '../components/Progress';
import MySkills from '../components/Skills';
import MyServices from '../components/Services';
import Myportfolio from '../components/Portfolio';

function App() {
	const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
	return (
		<React.Fragment>
			<Circle2 color={'#ff014f'}/>
			<div className={isActive ? "progress-note" : 'd-none'}>
				<div className="mb-20">That's not done yet. 😁</div>
				<a className="readon noshadow" onClick={handleToggle}><span>Let's See</span></a>
			</div>

			<div className="main-content">
				<div className="container">
					<div className="row pt-100 xl-pt-80 md-pt-20 md-pb-20 md-ml--12 md-mr--12">
						<div className="col-lg-6  md-pl-12 md-pr-12 md-mb-50">
							<MyIntro />
						</div>
						<div className="col-lg-6 xl-pl-30  md-pl-12 md-pr-12">
							<AboutMe
								boxClass="common-box mb-50"
							/>
							<Progress
								boxClass="common-box mb-50"
							/>
							<MySkills
								boxClass="common-box mb-50"
							/>
							<MyServices
								boxClass="common-box mb-50"
							/>
							<Myportfolio
								boxClass="common-box mb-50 md-mb-0"
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
export default App;
