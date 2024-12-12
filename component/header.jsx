"use client";

import { useEffect, useState, useRef } from 'react';

import SideMenu from '../component/sideMenu'


export default function Header() {
    let [LangListOpen, setIsLangListOpen] = useState(false);




    function langToggle(e) {
        e.preventDefault();
        setIsLangListOpen(!LangListOpen);
    }

    
    useEffect(function(){
        document.querySelector(".hamburger-btn").addEventListener("click",function(e){
            e.preventDefault();
            document.querySelector(".sc-sidemenu").classList.add("active")
            document.body.classList.add("no-scroll")
        })

    },[])




    return (
        <>
            <header className="header">
                <div className="sc-header">
                    <h1 className="logo"><a href=""><img src="./spaceX-logo.svg" alt="spaceX 로고 클릭시 메인페이지로 이동" /></a></h1>

                    <nav className="gnb">
                        <ul className="client-group gnb-list">
                            <ClientBox link="STARSHIELD"></ClientBox>
                            <ClientBox link="STARLINK"></ClientBox>
                            <ClientBox link="STARSHIP"></ClientBox>
                        </ul>
                    </nav>

                    <div className="service-group">
                        <div className="language-box">
                            <a href="" className="language-btn" onClick={langToggle}>
                                <img src="./globe-icon.svg" alt="언어선택하기" />
                            </a>
                            <ul className={`lang-list ${LangListOpen ? 'on' : ''}`}>
                                <LangItem></LangItem>
                            </ul>

                        </div>

                        <div className="top-line-link login"><a href="">SIGN IN</a></div>
                        <a href="#email" className="link-pour">Subscribe<span className="ani-btn"></span></a>
                        <a href="" className="hamburger-btn">
                            <span className="blind">메뉴열기</span>
                        </a>
                    </div>
                </div>
            </header>

            <SideMenu></SideMenu>
        </>
    );
}

function ClientBox(props) {
    return (
        <li className="client-box top-line-link">
            <a href="">
                {props.link}
            </a>
        </li>
    );
}

function LangItem() {
    return (
        <>
            {langList.map(function (langItem) {

                return (

                    <li className="lang-item" key={langItem}>
                        <a href="">
                            {langItem}
                        </a>
                    </li>
                )
            })}
        </>
    );
}


let langList = [
    "EN",
    "CN",
    "JP",
    "KR",
    "SP",
]



