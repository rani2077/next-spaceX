"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode,Navigation, Pagination } from 'swiper';

import '../node_modules/swiper/swiper-bundle.css';




SwiperCore.use([Navigation, Pagination]);

export function DeliverySwiper() {

    return (

        <Swiper
            className="swiper-wrapper"

            speed={1000}
            spaceBetween={0}
            slidesPerView={'auto'}
            centeredSlides={true}
            navigation pagination={{ type: "progressbar", clickable: true }}

        >

            {specObj.map(function (arryItem) {

                return (
                    <SwiperSlide className="swiper-slide" key={arryItem.id}>
                        <div className="group-rocket">
                            <div className="title-wrap">
                                <em className="tag">{arryItem.tag}</em>
                                <h3 className="name">{arryItem.name}</h3>
                                <p className="delivery-spec">{arryItem.spec}</p>
                            </div>
                            <div className="btn-wrap">
                                <a href="" className="link-pour">More detail<span className="ani-btn"></span></a>
                                <a href="" className="link-singly">
                                    <span className="text">Compare models <span className="bar"></span></span>
                                </a>
                            </div>
                            <div className="rocket-wrap">
                                <img src={arryItem.src} alt={arryItem.alt} />
                            </div>
                        </div>
                    </SwiperSlide>

                )

            })}

        </Swiper>

    )
}











let specObj = [

    {
        id: "Falcon 9",
        tag: "Available Reused",
        name: "Falcon 9",
        spec: "From $67,000k / thrust 7,600kn / capacity 22,800kg",
        alt: "길게 쭉 뻗어있는 우주선의 모습",
        src: "./falcon9.png",
    },
    {
        id: "Dragon 2",
        tag: "Space travel",
        name: "Dragon 2",
        spec: "From $20,000k / thrust 7,600kn / passengers 4",
        alt: "짧은 원뿔 모양의 우주선의 모습",
        src: "./dragon2.png",
    },
    {
        id: "Falcon heavy",
        tag: "Comming soon",
        name: "Falcon heavy",
        spec: "from $9,700k / thrust 82,000kn / capacity 63,800kg",
        alt: "여러개의 추진체로 연결되어있는 거대한 우주선의 모습",
        src: "./falcon-heavy.png",
    },
    {
        id: "Star ship",
        tag: "Comming soon",
        name: "Star ship",
        spec: "weight 5,000t / thrust 3,400mn / capacity 100,000kg",
        alt: "빛에 반사되는 은색 몸통을 가진 우주선",
        src: "./starship.png",
    },
]




export function StoriesSwiper() {

    return (
        <Swiper
            className="group-stories swiper-wrapper"
            slidesPerView={'auto'}
            spaceBetween={0}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            pagination={{ type: "progressbar", clickable: true }}
        >
            {storiesArry.map(function (arryItem) {

                return (
                    <SwiperSlide className="stories-area swiper-slide" key={arryItem.id}>
                        <a href="" className="stories-box" >
                            <div className="img-box"><div className="img-item"><img src={arryItem.src} alt={arryItem.alt} data-scroll="20" /></div></div>
                            <div className="text-box">
                                <h3 className="stories-title">{arryItem.title}</h3>
                                <span className="date">{arryItem.date}</span>
                            </div>
                        </a>
                    </SwiperSlide>
                )

            })}

        </Swiper>

    )
}








let storiesArry = [
    {
        id: 1,
        src: "./stories1.jpg",
        alt: "우주선이 구름을 뚫고 힘차게 날아오르는 모습",
        title: "ON THE PATH TO RAPID REUSABILITY",
        date: "MAY 24, 2024",
    },
    {
        id: 2,
        src: "./stories2.jpg",
        alt: "우주복을 입은 사람의 옆모습",
        title: "THE EXTRAVEHICULAR ACTIVITY (EVA) SUIT",
        date: "MAY 4, 2024",
    },
    {
        id: 3,
        src: "./stories3.jpg",
        alt: "발사대에서 우주선이 발사되면서 주변에 연기가 흩날리는 모습",
        title: "TO MAKE LIFE MULTIPLANETARY",
        date: "APRIL 6, 2024",
    },
    {
        id: 4,
        src: "./stories4.jpg",
        alt: "발사대에서 우주선이 발사되는 모습",
        title: "BUILDING ON THE SUCCESS OF STARSHIP’S SECOND FLIGHT TEST",
        date: "FEBRUARY 26, 2024",
    },
    {
        id: 5,
        src: "./stories5.jpg",
        alt: "우주선의 몸체를 중기계가 들어올리려는 모습",
        title: "UPGRADES AHEAD OF STARSHIP’S SECOND FLIGHT TEST",
        date: "SEPTEMBER 8, 2023",
    },
    {
        id: 6,
        src: "./stories6.jpg",
        alt: "상업용 우주정거장이 우주를 떠다니는 모습",
        title: "SPACEX TO LAUNCH VAST’S COMMERCIAL SPACE STATION AND FIRST HUMAN SPACEFLIGHT MISSION",
        date: "MAY 10, 2023",
    },
    {
        id: 7,
        src: "./stories7.jpg",
        alt: "디어문 크루들이 나란히 서 있는 모습",
        title: "MEET THE DEARMOON CREW",
        date: "DECEMBER 8, 2022",
    },
    {
        id: 8,
        src: "./stories8.jpg",
        alt: "달표면에 우주선이 서 있는 모습",
        title: "STARSHIP SELECTED BY NASA TO SUPPORT SUSTAINED LUNAR EXPLORATION",
        date: "NOVEMBER 15, 2022",
    },
    {
        id: 9,
        src: "./stories9.jpg",
        alt: "일론머스크와 다른 남성이 로켓 앞에서 대화를 나누는 모습",
        title: "SPACEX INVITES WORLD'S CARRIERS TO COLLABORATE",
        date: "AUGUST 25, 2022",
    },
    {
        id: 10,
        src: "./stories10.jpg",
        alt: "황혼녘 하늘 위 별들이 가득 차 있는 모습",
        title: "SPACEX'S APPROACH TO SPACE SUSTAINABILITY AND SAFETY",
        date: "FEBRUARY 22, 2022",
    },
    {
        id: 11,
        src: "./stories11.jpg",
        alt: "대기권 위에서 로켓이 분리되는 중인 모습",
        title: "SPACEX TO LAUNCH POLARIS PROGRAM MISSIONS",
        date: "FEBRUARY 14, 2022",
    },
    {
        id: 12,
        src: "./stories12.jpg",
        alt: "넓은 평지에서 로켓이 발사 대기 중인 모습",
        title: "STARSHIP UPDATE",
        date: "FEBRUARY 10, 2022",
    },
    {
        id: 13,
        src: "./stories13.jpg",
        alt: "스타링크를 발사하는 궤적을 표현한 모습",
        title: "GEOMAGNETIC STORM AND RECENTLY DEPLOYED STARLINK SATELLITES",
        date: "FEBRUARY 8, 2022",
    },
];
