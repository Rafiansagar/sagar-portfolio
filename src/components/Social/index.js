import React from 'react';
import BoxTitle from "../Common/BoxTitle";

const Socialacc = (props) => {
	const { boxClass } = props;
	return (
		<div className={`social-acc ${boxClass}`}>
			<BoxTitle
				sectionClass="box-title mb-40"
				titleClass="title"
				title="I'm Available"
			/>
		</div>
	);
}
export default Socialacc;
