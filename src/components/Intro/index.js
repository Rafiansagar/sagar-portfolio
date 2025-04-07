import avatar from '../../assets/img/avatar.png';

function MyIntro () {
	return (
		<div className="intro-my">
			<div className="avatar mb-20">
				<img src={avatar} alt="my avatar" />
			</div>
			<div className="inrto-text mb-20">
				<h1 className="name">Hi, I’m <span className="primary-color">Sagar</span></h1>
				<h2 className="designation">Sr. Web Developer.</h2>
				<p className="desc">
				  <i className="ri-flashlight-line" style={{ color: 'rgb(16, 185, 129)' }}></i> Lead Developer at 
				  <i className="ri-building-2-line" style={{ color: 'rgb(245, 11, 43)', margin: '0 0 0 6px' }}></i> <a href="https://rstheme.com/" target="_blank" rel="noopener noreferrer">RSTheme</a> | 7+ yrs WP + Full-Stack |
				  Front-end <i className="ri-gemini-line" style={{ color: 'rgb(245, 158, 11)', margin: '0 4px' }}></i> Back-end 
				  <i className="ri-gemini-line" style={{ color: 'rgb(245, 158, 11)', margin: '0 4px' }}></i> Scalable Solutions | PHP • JS • React • HTML • CSS Wizardry
				</p>
			</div>
			<ul className="btn-part">
				<li><a className="readon" href="#"><span>Download My CV</span></a></li>
				<li><a className="readon" href="#"><span>Hire Me</span></a></li>
			</ul>
		</div>
	);
}
export default MyIntro;
