


import { useEffect, useRef } from 'react';


export default function SideMenu(props) {

    let sideMenu = useRef(null)

    function closeSideMenu(){
        sideMenu.current.classList.remove("active")
        document.body.classList.remove("no-scroll")
    }




    return (
        <aside className="sc-sidemenu" ref={sideMenu}>
            <h3 className="blind">사이드메뉴</h3>
            <div className="login-group">
                <a href="" className="login side-shortcut-hover">Sign In</a>
                <a href="" className="account-update side-shortcut-hover">Subscribe</a>
            </div>
            <ul className="short-group">
                <ShortAreasMulti name="spaceX" arry={sideSpaceXArry}></ShortAreasMulti>



            </ul>
            <ul className="short-group">

                <ShortAreasMulti name="More about" arry={sideMoreAbout}></ShortAreasMulti>
                <ShortAreasMulti name="Company" arry={sideCompany}></ShortAreasMulti>

                <ShortAreaSingle src="" name="InVestors"></ShortAreaSingle>
                <ShortAreaSingle src="" name="Stories"></ShortAreaSingle>
                <ShortAreaSingle src="" name="Tech"></ShortAreaSingle>
                <ShortAreaSingle src="" name="Carrers"></ShortAreaSingle>

            </ul>
            <ul className="short-group">

                <ShortAreaSingle src="" name="Contact"></ShortAreaSingle>
                <ShortAreaSingle src="" name="Locations"></ShortAreaSingle>
                <ShortAreaSingle src="" name="Events"></ShortAreaSingle>
                <ShortAreaSingle src="" name="Media"></ShortAreaSingle>
                <ShortAreaSingle src="" name="Store"></ShortAreaSingle>

            </ul>
            <a href="" className="legal side-shortcut-hover">Legal</a>
            <SnsGroup arry={sideSnsLink}></SnsGroup>
            <span className="side-close-btn" onClick={closeSideMenu}>
                <span className="blind">메뉴닫기</span>
            </span>
        </aside>

    )
}


// 하위 리스트 여러개
function ShortAreasMulti(props) {

    let moreViewBtn = useRef(null);
    let subBox = useRef(null);

    function openShortMenu(){
        moreViewBtn.current.classList.toggle("on")
        subBox.current.classList.toggle("on")
    }



    return (
        <li className="short-area">
            <p className="short-sub-title side-shortcut-hover">{props.name}</p>
            <span className="more-view-btn" ref={moreViewBtn} onClick={openShortMenu}></span>
            <ul className="short-sub-box" ref={subBox} >

                {props.arry.map(function (arryItem) {
                    return (
                        <li key={arryItem.id}><a href={arryItem.src} className="short-cut-item side-shortcut-hover">{arryItem.name}</a></li>
                    )
                })}
            </ul>
        </li>

    )
}


let sideSpaceXArry = [
    { name: "Overview", src: "", id: "Overview" },
    { name: "Mission", src: "", id: "Mission" },
    { name: "Launches", src: "", id: "Launches" },
    { name: "Carrers", src: "", id: "Carrers" },
    { name: "Updates", src: "", id: "Updates" },
    { name: "Shop", src: "", id: "Shop" },
    { name: "Facilities", src: "", id: "Facilities" },
    { name: "History", src: "", id: "History" },
]

let sideMoreAbout = [
    { name: "Purchase & Ownership", src: "", id: "Purchase & Ownership" },
    { name: "Payment Calculator", src: "", id: "Payment Calculator" },
    { name: "Project Gravity", src: "", id: "Project Gravity" },
    { name: "FAQ", src: "", id: "FAQ" },
]

let sideCompany = [
    { name: "About Us", src: "", id: "About Us" },
    { name: "Leadership", src: "", id: "Leadership" },
    { name: "Sustainability", src: "", id: "Sustainability" },
]



// 하위리스트 1개
function ShortAreaSingle(props) {

    return (
        <li className="short-area"><a href={props.src} className='short-sub-title side-shortcut-hover'>{props.name}</a></li>
    )
}



// sns바로가기
function SnsGroup(props) {

    return (
        <div className="sns-group">
            {props.arry.map(function (arryItem) {
                return (
                    <a href={arryItem.src} key={arryItem.id} className="sns-box"><img src={arryItem.imgSrc} alt={arryItem.alt} /></a>
                )
            })}
        </div>
    )
}


let sideSnsLink = [
    { src: "", id: "instagram", imgSrc: "./sns-instagram-white.png", alt: "spaceX 인스타그램으로 이동하기" },
    { src: "", id: "x", imgSrc: "./sns-x-white.png", alt: "spaceX x로 이동하기" },
    { src: "", id: "youtube", imgSrc: "./sns-youtube-white.png", alt: "spaceX 유튜브로 이동하기" },
    { src: "", id: "facebook", imgSrc: "./sns-facebook-white.png", alt: "spaceX 페이스북으로 이동하기" },
]