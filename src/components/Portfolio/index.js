import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import BoxTitle from "../Common/BoxTitle";

import portfoimg1 from '../../img/portfolio/1.jpg';
import portfoimg2 from '../../img/portfolio/2.jpg';
import portfoimg3 from '../../img/portfolio/3.jpg';

const bgStyle1 = {
    backgroundImage:`url(${portfoimg1})`
}
const bgStyle2 = {
    backgroundImage:`url(${portfoimg2})`
}
const bgStyle3 = {
    backgroundImage:`url(${portfoimg3})`
}

const Myportfolio = (props) => {
		const { boxClass } = props;
	return (
			<div className={`my-portfolio ${boxClass}`}>
				<BoxTitle
					sectionClass="box-title mb-40"
					titleClass="title"
					title="My Portfolio"
				/>
				<Swiper
				loop={true}
				spaceBetween={10}
				slidesPerView={1}
				modules={[Navigation]}
				navigation
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}>
				<SwiperSlide>
					<div className="portfolio-wrap">
						<div className="thumb" style={bgStyle1}></div>
						<div className="content-part">
							<h4 className="title"><a href="https://rstheme.com/products/html/wiggle">Wiggle - NFT Marketplace HTML Template</a></h4>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="portfolio-wrap">
						<div className="thumb" style={bgStyle2}></div>
						<div className="content-part">
							<h4 className="title"><a href="http://educavo.rstheme.com">Educavo – Education React Template</a></h4>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="portfolio-wrap">
						<div className="thumb" style={bgStyle3}></div>
						<div className="content-part">
							<h4 className="title"><a href="http://braintech.rstheme.com">Braintech – Technology & IT Solutions React Template</a></h4>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
			</div>
	);
}
export default Myportfolio;
