import ProgressBar from 'react-bootstrap/ProgressBar';

const Progress = (props) => {
	const { boxClass } = props;
	const htmllang = 98;
	const csslang = 95;
	const jslang = 65;
	const reactlang = 72;
	const phplang = 78;
	return (
		<div className={`skill-progress ${boxClass}`}>
			<div className="p-items htmllang mb-14">
				<label>HTML</label>
				<ProgressBar animated now={htmllang} label={`${htmllang}%`}/>
			</div>
			<div className="p-items csslang mb-14">
				<label>CSS</label>
				<ProgressBar animated now={csslang} label={`${csslang}%`}/>
			</div>
			<div className="p-items jslang mb-14">
				<label>JS</label>
				<ProgressBar animated now={jslang} label={`${jslang}%`}/>
			</div>
			<div className="p-items phplang mb-14">
				<label>PHP</label>
				<ProgressBar animated now={phplang} label={`${phplang}%`}/>
			</div>
			<div className="p-items reactlang mb-10">
				<label>React</label>
				<ProgressBar animated now={reactlang} label={`${reactlang}%`}/>
			</div>
		</div>
	);
}
export default Progress;
