import BoxTitle from "../Common/BoxTitle";

const MySkills = (props) => {
		const { boxClass } = props;
	return (
		<div className={`about-me ${boxClass}`}>
			<BoxTitle
				sectionClass="box-title"
				titleClass="title"
				title="About My Skill"
			/>
			<p className="desc">Hi I am a Front-End developer & I can build your website as you want. I can customize plugin & wordpress theme. And I have two years of experience in figma. Now I am able to design your portfolio.</p>

			<div className="desc">I have three years of experience with HTML, CSS, JavaScript. And I can Design Your web application.</div>
		</div>
	);
}
export default MySkills;
