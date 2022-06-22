import BoxTitle from "../Common/BoxTitle";

const AboutMe = (props) => {
		const { boxClass } = props;
	return (
		<div className={`about-me ${boxClass}`}>
			<BoxTitle
				sectionClass="box-title"
				titleClass="title"
				title="About Me"
			/>
			<p className="desc">Hi I am a Front-End developer & I can build your website as you want. I can customize plugin & wordpress theme. And I have two years of experience in figma. Now I am able to design your portfolio.</p>

			<div className="desc">I have 4.5+ years of experience with HTML, CSS, JavaScript, React, WordPress, Joomla. And I can Design Your web application.</div>
		</div>
	);
}
export default AboutMe;
