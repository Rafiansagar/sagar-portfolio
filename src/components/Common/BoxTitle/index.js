import { useEffect } from 'react';
import AOS from 'aos';
const BoxTitle = (props) => {
    const { titleClass, descClass, animateName, animateDelay, animateDuration } = props;

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className={props.sectionClass} data-aos={animateName ? animateName : ''} data-aos-delay={animateDelay ? animateDelay : ''} data-aos-duration={animateDuration ? animateDuration : ''}>
            {titleClass ? <h4 className={props.titleClass}>{props.title}</h4> : ''}
            {descClass ? <div className={props.descClass}>{props.description}</div> : ''}
        </div>
    );
}

export default BoxTitle