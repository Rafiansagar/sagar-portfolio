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
				<li><img src={html} alt=""/></li>
				<li><img src={css} alt=""/></li>
				<li><img src={js} alt=""/></li>
				<li><img src={php} alt=""/></li>
				<li><img src={react} alt=""/></li>
				<li><img src={wp} alt=""/></li>
				<li><img src={jmla} alt=""/></li>
				<li><img src={sql} alt=""/></li>
				<li><img src={ps} alt=""/></li>
				<li><img src={envato} alt=""/></li>
			</ul>
		</div>
	);
}
export default MySkills;
