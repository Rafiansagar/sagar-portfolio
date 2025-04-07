import avatar from '../../assets/img/avatar.png';

function MyIntro () {
	return (
		<div className="intro-my">
			<div className="avatar mb-20">
				<img src={avatar} alt="my avatar" />
			</div>
			<div className="inrto-text mb-20">
				<h1 className="name">Hi, I’m <span className="primary-color">Sagar</span></h1>
				<h2 className="designation">Web Developer.</h2>
				<p className="desc">Full-stack Lead Developer @ #RSTheme (Bangladesh) with 7+ years of hands-on experience in modern web technologies, performance optimization, and scalable architecture.</p>
			</div>
			<ul className="btn-part">
				<li><a className="readon" href="#"><span>Download My CV</span></a></li>
				<li><a className="readon" href="#"><span>Hire Me</span></a></li>
			</ul>
		</div>
	);
}
export default MyIntro;
