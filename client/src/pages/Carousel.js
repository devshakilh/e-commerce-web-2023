

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner2 from '../assets/banner/2.png'
import banner3 from '../assets/banner/3.png'







export default function CarouselComp() {
    return (
        <>
            <div
             className='
             style="paddingTop: 400px;
             
             mt-4 custom-padding-top max-w-[1200 mx-auto'>
                <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
                    {/* <div>
                        <img src={banner}  alt="bannerimage"/>
                    </div> */}
                    <div>
                        <img src={banner2}   alt="bannerimage"/>
                    </div>
                    <div>
                        <img src={banner3}  alt="bannerimage" />
                    </div>
                    <div>
                        <img src="/images/banner.png" width={350} height={350}  alt="bannerimage" />
                    </div>
                   
                </Carousel>
            </div>
        </>
    );
};