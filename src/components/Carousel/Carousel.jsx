import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import RatingStar from "../../assets/icons/RatingStar";
import Avatar from "react-avatar";
import ArrowDown from "../../assets/icons/ArrowDown";

const reviews = [
    {
        name: "Никита",
        review: "Какой-то отзыв про то, какие мы все хорошие и замечательные",
        rating: 2,
        avatar: "/path/to/avatar.jpg"
    },
    {
        name: "Никита",
        review: "Какой-то отзыв про то, какие мы все хорошие и замечательные",
        rating: 2,
        avatar: "/path/to/avatar.jpg"
    },
    {
        name: "Никита",
        review: "Какой-то отзыв про то, какие мы все хорошие и замечательные",
        rating: 2,
        avatar: "/path/to/avatar.jpg"
    },
    {
        name: "Никита",
        review: "Какой-то отзыв про то, какие мы все хорошие и замечательные",
        rating: 2,
        avatar: "/path/to/avatar.jpg"
    },
    {
        name: "Никита",
        review: "Какой-то отзыв про то, какие мы все хорошие и замечательные",
        rating: 2,
        avatar: "/path/to/avatar.jpg"
    },
    {
        name: "Никита",
        review: "Какой-то отзыв про то, какие мы все хорошие и замечательные",
        rating: 2,
        avatar: "/path/to/avatar.jpg"
    },{
        name: "Никита",
        review: "Какой-то отзыв про то, какие мы все хорошие и замечательные",
        rating: 2,
        avatar: "/path/to/avatar.jpg"
    },
    {
        name: "Никита",
        review: "Какой-то отзыв про то, какие мы все хорошие и замечательные",
        rating: 2,
        avatar: "/path/to/avatar.jpg"
    },
    {
        name: "Никита",
        review: "Какой-то отзыв про то, какие мы все хорошие и замечательные",
        rating: 2,
        avatar: "/path/to/avatar.jpg"
    }
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`!h-16 !w-16 ${className}`}
            style={{ ...style}}
            onClick={onClick}
        >
            <ArrowDown className={`absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 -rotate-90 dark:fill-second fill-main`}/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`!h-16 !w-16 ${className}`}
            style={{...style}}
            onClick={onClick}
        >
            <ArrowDown
                className={`absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 rotate-90 dark:fill-second fill-main`}/>
        </div>
    );
}


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    return (
        <Slider {...settings}>
            {reviews.map((review, index) => (
                <div key={index} className="max-w-[420px] dark:bg-second/[0.04] bg-main/[0.04] pt-[60px] pb-10 text-center dark:text-second text-main rounded-[48px] relative">
                    <Avatar size={88} src={'https://api.dicebear.com/9.x/initials/svg?seed=Никита'} round={true} className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[22px]'/>
                    <h3 className='font-semibold text-3xl'>{review.name}</h3>
                    <p className='font-medium text-lg max-w-[350px] mx-auto'>{review.review}</p>
                    <div className="flex items-center justify-center gap-2">
                        {[...Array(5)].map((star, i) => (
                            <RatingStar className={i < review.rating ? "dark:fill-second fill-main" : "dark:fill-second/30 fill-main/30"}/>
                        ))}
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
