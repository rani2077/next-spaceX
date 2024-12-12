"use client"; // 이 지시어를 추가하세요


import { useEffect, useRef, useState } from 'react';





export default function Footer(){

    let [langState, setLang] = useState("off")
    // let langBox = useRef(null)
    let langBox = `lang-box ${langState}`

    return(
        <footer className="footer">
            <nav className="group-nav">
                <h3 className="blind">하단메뉴</h3>
                <ul className="group-footer1">
                    <li className="link-area">
                        <h4 className="sub-title">SpaceX</h4>
                        <ul className="footer-link-box">
                            <FooterLink name="Falcon 9"></FooterLink>
                            <FooterLink name="Falcon heavy"></FooterLink>
                            <FooterLink name="Dragon"></FooterLink>
                            <FooterLink name="Star ship"></FooterLink>
                        </ul>
                    </li>
                    <li className="link-area">
                        <h2 className="sub-title">Star Link</h2>
                        <ul className="footer-link-box">
                            <FooterLink name="Company"></FooterLink>
                            <FooterLink name="Leadership"></FooterLink>
                            <FooterLink name="Careers"></FooterLink>
                            <FooterLink name="Stories"></FooterLink>
                            <FooterLink name="Tech Talks"></FooterLink>
                            <FooterLink name="Future Models"></FooterLink>
                            <FooterLink name="Investors"></FooterLink>
                        </ul>
                    </li>
                    <li className="link-area">
                        <h2 className="sub-title">More</h2>
                        <ul className="footer-link-box">
                            <FooterLink name="Purchase & Ownership"></FooterLink>
                            <FooterLink name="Payment Calculator"></FooterLink>
                            <FooterLink name="Store"></FooterLink>
                            <FooterLink name="FAQ"></FooterLink>
                            <FooterLink name="Contact"></FooterLink>
                            <FooterLink name="Locations"></FooterLink>
                            <FooterLink name="Events"></FooterLink>
                            <FooterLink name="Media Room"></FooterLink>
                            <FooterLink name="Awards and Accolades"></FooterLink>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="group-info">
                <div className="lang-area">
                    <button className="" onClick={() => setLang( langState === "on" ? 'off' : 'on' )}>United States - English <span className="underline"></span></button>
                    <ul className={langBox} >
                        <Language language="United States - English"></Language>
                        <Language language="Spain - Spanish"></Language>
                        <Language language="Brazil - Portuguese"></Language>
                        <Language language="Latin America - Spanish"></Language>
                    </ul>
                </div>
                <div className="sns-area">
                    <LinkSns src="./sns-instagram.png" alt="spaceX 인스타그램으로 이동하기"></LinkSns>
                    <LinkSns src="./sns-x.png" alt="spaceX x로 이동하기"></LinkSns>
                    <LinkSns src="./sns-youtube.png" alt="spaceX 유튜브로 이동하기"></LinkSns>
                    <LinkSns src="./sns-facebook.png" alt="spaceX 페이스북으로 이동하기"></LinkSns>
                </div>
                <div className="legal-area">
                    <a href="">legal</a>
                </div>
                <address className="copy-area">
                    <p className="copyright">Copyright spaceX. All rights reserved</p>
                </address>
            </div>
        </footer>

    )
}



// footer 링크모음
function FooterLink(props){

    return (
        <li className="link-item">
            <a href="">
                {props.name}
            </a>
        </li>
    )
}



// footer 언어선택
function Language(props){

    return(
        <li className="lang">
            <a href="">
                {props.language}
            </a>
        </li>
    )
}



// footer sns링크
function LinkSns(props){
    
    return(
        <a href="" className="link-sns">
            <img src={props.src} alt={props.alt} />
        </a>

    )
}