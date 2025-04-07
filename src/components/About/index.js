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
			<p className="desc">
			  <i className="ri-code-s-slash-line" style={{ marginRight: '8px', color: '#5A67D8' }}></i>
			  Hi, I’m a <strong>Full-Stack Web Developer</strong> with a passion for crafting custom, high-performing websites tailored to your vision.
			  <br />
			  <i className="ri-settings-3-line" style={{ marginRight: '8px', color: '#38B2AC' }}></i>
			  I specialize in <strong>WordPress theme</strong> and <strong>plugin customization</strong>, delivering scalable and maintainable solutions.
			</p>
			
			<p className="desc">
			  <i className="ri-terminal-window-line" style={{ marginRight: '8px', color: '#F59E0B' }}></i>
			  I have hands-on experience with <strong>PHP, HTML, CSS, JavaScript, React</strong>, and popular CMS platforms like <strong>WordPress</strong> and <strong>Joomla</strong>.
			  <br />
			  <i className="ri-window-2-line" style={{ marginRight: '8px', color: '#10B981' }}></i>
			  I can build and deploy fully functional <strong>web applications</strong> with clean, responsive UI and optimized performance.
			</p>

		</div>
	);
}
export default AboutMe;
