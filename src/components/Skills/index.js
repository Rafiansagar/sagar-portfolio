import BoxTitle from "../Common/BoxTitle";

import html from '../../img/skills/html.png';
import css from '../../img/skills/css.png';
import js from '../../img/skills/js.png';
import php from '../../img/skills/php.png';
import react from '../../img/skills/react.png';
import wp from '../../img/skills/wp.png';
import jmla from '../../img/skills/jmla.png';
import sql from '../../img/skills/sql.png';
import ps from '../../img/skills/ps.png';
import envato from '../../img/skills/envato.png';
import elementor from '../../img/skills/wpe.png';
import bekary from '../../img/skills/wpb.png';
import github from '../../img/skills/github.png';
import xd from '../../img/skills/xd.png';
import figma from '../../img/skills/figma.png';

const MySkills = (props) => {
		const { boxClass } = props;
	return (
		<div className={`my-skills ${boxClass}`}>
			<BoxTitle
				sectionClass="box-title mb-40"
				titleClass="title"
				title="About My Skill"
			/>
			<ul className="experiencees">
				<li title="HTML"><img src={html} alt=""/></li>
				<li title="CSS"><img src={css} alt=""/></li>
				<li title="JavaScript"><img src={js} alt=""/></li>
				<li title="PHP"><img src={php} alt=""/></li>
				<li title="React"><img src={react} alt=""/></li>
				<li title="WordPress"><img src={wp} alt=""/></li>
				<li title="Joomla"><img src={jmla} alt=""/></li>
				<li title="SQL"><img src={sql} alt=""/></li>
				<li title="Photoshop"><img src={ps} alt=""/></li>
				<li title="Envato Market"><img src={envato} alt=""/></li>
				<li title="Github"><img src={github} alt=""/></li>
				<li title="WP Bekary"><img src={bekary} alt=""/></li>
				<li title="Elementor"><img src={elementor} alt=""/></li>
				<li title="Adobe XD"><img src={xd} alt=""/></li>
				<li title="Figma"><img src={figma} alt=""/></li>
			</ul>
		</div>
	);
}
export default MySkills;
