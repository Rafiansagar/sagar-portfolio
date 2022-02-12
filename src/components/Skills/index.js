import BoxTitle from "../Common/BoxTitle";

const MySkills = (props) => {
		const { boxClass } = props;
	return (
		<div className={`my-skills ${boxClass}`}>
			<BoxTitle
				sectionClass="box-title"
				titleClass="title"
				title="About My Skill"
			/>
			<ul className="experiencees">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	);
}
export default MySkills;
