"use client";

import { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../node_modules/swiper/swiper-bundle.css';
import { DeliverySwiper, StoriesSwiper } from '../component/swiper'

import "../style/main.css"

// import Image from "next/image";

export default function Home() {


  // 링크 애니메이션
  useEffect(function () {

    let siglyHover = gsap.timeline({
      paused: true,
      onComplete: function () {
        hoverFlag = 0;
      }
    });
    siglyHover.to('.link-singly .bar', {
      width: 0
    }).set('.link-singly .bar', {
      right: 0,
      left: 'auto'
    }).to('.link-singly .bar', {
      width: '100%'
    });
    let hoverFlag = 0;
    let linkElements = document.querySelectorAll('.link-singly');
    linkElements.forEach(function (linkEl) {
      linkEl.addEventListener('mouseenter', function () {
        setTimeout(function () {
          if (hoverFlag === 0) {
            siglyHover.restart();
            hoverFlag = 1;
          }
        }, 500);
      });
    });


    // 공통 패럴렉스 애니메이션
    document.querySelectorAll("[data-scroll]").forEach(function (scrollElement) {
      let scrollValue = scrollElement.getAttribute("data-scroll");

      gsap.to(scrollElement, {
        scrollTrigger: {
          trigger: scrollElement,
          start: "0% 100%",
          end: "100% 0%",
          // markers: true,
          scrub: 0,
        },
        yPercent: scrollValue

      })
    })

  }, []);




  return (

    <main className="container">

      <ScVisual></ScVisual>
      <ScRocket></ScRocket>
      <ScVision></ScVision>
      <ScStories></ScStories>
      <ScInfo></ScInfo>
      <ScContact></ScContact>
    </main>
  )
}





// sc-visual
function ScVisual() {

  useEffect(function () {

    gsap.registerPlugin(ScrollTrigger);
    const videoAni = gsap.to(".video-bg-area", {
      scrollTrigger: {
        trigger: ".sc-visual",
        start: "0% 0%",
        end: "100% 0",
        scrub: 0,
      },
      yPercent: 40,
    });



    let box = gsap.timeline({
      defaults: {
        y: -80, stagger: 0.1, duration: 1, opacity: 1,
      },
    })

    box
      .to('.sc-visual .group-title .main-title', {}, "0.3")
      .to('.sc-visual .order-area .link-pour', {}, "-=0.8")
      .to('.sc-visual .order-area .link-singly', {}, "-=0.8")
      .to('.sc-visual .spec-list .spec-item:nth-child(1)', {}, "-=0.6")
      .to('.sc-visual .spec-list .spec-item:nth-child(2)', {}, "-=0.8")
      .to('.sc-visual .spec-list .spec-item:nth-child(3)', {}, "-=0.8")



  }, [])


  return (
    <section className="sc-visual">

      <div className="group-title">
        <div className="title-area">
          <h2 className="main-title">Falcon 9</h2>
        </div>
        <div className="order-area">
          <a href="" className="link-pour">Discover Mars<span className="ani-btn"></span></a>

          <a href="" className="link-singly">
            <span className="text">Reserve now <span className="bar"></span></span>
          </a>
        </div>
      </div>
      <ul className="spec-list">
        <SpecItem name="Full thrust" status="7,600kn"></SpecItem>
        <SpecItem name="Cost per launch" status="$67,000k"></SpecItem>
        <SpecItem name="Load capacity" status="22,800kg"></SpecItem>
      </ul>

      <video autoPlay loop muted className="video-bg-area">
        <source src="./spaceX.mp4" type="video/mp4" />
      </video>

    </section>

  )
}




function SpecItem(props) {

  return (
    <li className="spec-item">
      <p className="status-title">{props.name}</p>
      <em className="status">{props.status}</em>
    </li>

  )
}




// sc-delivery
function ScRocket() {
  return (
    <section className="sc-rocket swiper rocket-swiper">

      <h2 className="blind">우주선소개</h2>

      <DeliverySwiper></DeliverySwiper>


    </section>

  )
}




// sc-vision

function ScVision() {

  const visionElement = useRef(null);

  useEffect(function () {

    // 비전 백그라운드 패럴렉스
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('.sc-vision', { 'background-position': `center`, });
    const visionBgAni1 = gsap.to('.sc-vision', {
      scrollTrigger: {
        trigger: '.sc-vision',
        start: '0% 100%',
        end: '100% 0',
        // markers: true,
        scrub: 0,
      }, 'background-position': 'center -100px',
    });


    const visionBgAni2 = gsap.timeline({
      scrollTrigger: {
        trigger: visionElement.current,
        start: "0% 35%",
        end: "120% 80%",
        // markers: true,
        scrub: 0,
      },
    })
      .to('.sc-vision .text-front', 1, {
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        stagger: 1,
      })
      .to('.sc-vision .vision-area', 3, {
        opacity: 0,
      });


  }, [])

  return (
    <section className="sc-vision " ref={visionElement}>
      <span className="blind">우주선의 콕핏이 열린 채 탑승한 승무원이 우주를 바라보는 이미지</span>
      <div className="vision-area bg">
        <h2 className="main-title">Our vision</h2>
        <VisionText arry={visionTextArry}></VisionText>
      </div>
    </section>

  )
}


function VisionText(props) {

  return (
    <div className="text-box">
      {props.arry.map(function (arryItem) {
        return (
          <div className="text-item" key={arryItem}>
            <p className="text-back vision-text">{arryItem}</p>
            <p className="text-front vision-text">{arryItem}</p>
          </div>
        )
      })}
    </div>

  )
}


let visionTextArry = [
  "Building on the achievements of",
  "Falcon 9 and Falcon Heavy, SpaceX is",
  "working on a next generation of fully ",
  "reusable launch vehicles that will be",
  " the most powerful ever built , capable of",
  "carrying humans to Mars and other",
  "destinations in the solar system.",
]




// sc-stories

function ScStories() {

  return (
    <section className="sc-stories swiper stories-swiper">

      <div className="group-title">
        <h2 className="main-title">Our stories</h2>
        <a href="" className="link-pour">View all<span className="ani-btn"></span></a>
      </div>
      <StoriesSwiper></StoriesSwiper>
    </section>

  )
}









// sc-info
function ScInfo() {
  return (

    <section className="sc-info">
      <h2 className="blind">회사소개</h2>
      <div className="group-info">

        <InfoArea type="CALIFORNIA" title="TESTING FACILITY" alt="넓은 평지에 여러 종류의 건물들이 뭉쳐있는 모습" src="./info-img1.jpg"></InfoArea>
        <InfoArea type="TEXAS" title="STARBASE" alt="로켓의 엔진 부품을 연소 테스트 중인 모습" src="./info-img2.jpg"></InfoArea>

      </div>
    </section>

  )
}


function InfoArea(props) {

  return (
    <a href="#" className="info-area" >
      <div className="text-box">
        <em className="type">{props.type}</em>
        <h3 className="sub-title">{props.title}</h3>
      </div>
      <div className="img-box">
        <div className="img-item">
          <img src={props.src} alt="{props.alt}" data-scroll="25" />
        </div>
      </div>
    </a>

  )
}





// sc-contact
function ScContact() {

  let [focus, setFocus] = useState(false);
  // let inputElement = useRef(null);

  useEffect(function(){

    if(focus){
      
      document.querySelectorAll(".disappear-animate").forEach(function(animationElement){
        animationElement.classList.add("appear");
        animationElement.style.top = "0px"
        animationElement.style.opacity = "1"

      })
    }else if( !focus ){
      console.log("블러")
    }

  },[focus])

  return (
    <section className="sc-contact" id="email">
      <div className="group-contact">
        <h2 className="text-area">Enter your email to sign up for SpaceX updates.</h2>
        <div className="email-area">
          <form action="">
            <fieldset>
              <legend className="blind">newslatter</legend>

              <label className="sub-title disappear-animate" htmlFor="email">EMAIL</label>

              <input
                className="email-box"
                type="text" id="email"
                placeholder="space@example.com"
                // ref={inputElement}
                onFocus={() => {setFocus(true);}}
                onBlur={() => {setFocus(false);}}
              />

              <div className="promotion disappear-animate">
                <input type="checkbox" className="checkbox" id="cb1" />
                <label htmlFor="cb1"></label>
                <p className="promotion-text">Join our mailing list for early access to product, special events in your area, promotions, and more.</p>
              </div>
              <div className="subscribe-btn disappear-animate"><a href="">Subscribe</a></div>
              <p className="terms disappear-animate">By submitting this form, you agree to our <a href="" className="underline">Terms of Use</a> and our <a href="" className="underline">Privacy Policy</a>.</p>

            </fieldset>
          </form>
        </div>
      </div>
    </section>

  )
}