import BoxTitle from "../Common/BoxTitle";

const MyServices = (props) => {
		const { boxClass } = props;
	return (
		<div className={`my-services ${boxClass}`}>
			<BoxTitle
				sectionClass="box-title mb-40"
				titleClass="title"
				title="My Services"
			/>
			<ul className="list-style">
				<li>Web Design</li>
				<li>Web Development</li>
				<li>PSD to HTML</li>
				<li>PSD to React</li>
				<li>PSD to Wordpress</li>
				<li>PSD to Jomla</li>
				<li>Responsive Design</li>
				<li>Clean Codeing</li>
				<li>Bootstrap Template</li>
				<li>Themeforest Template</li>
				<li>4.5+ Year Experience</li>
			</ul>
		</div>
	);
}
export default MyServices;
