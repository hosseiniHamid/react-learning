import React from "react-dom";
import "./header.css";
import * as Icons from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Head() {

    let navItems = [
        {id: "nav-1", label: " مواد غذایی"},
        {id: "nav-2", label: "نوشیدنی و دمنوش ها"},
        {id: "nav-3", label: "خواربار"},
        {id: "nav-4", label: "ابزار و ملزومات"},
        {id: "nav-5", label: "آرایشی بهداشتی"},
        {id: "nav-6", label: "لوازم التحریر و اداری"},
        {id: "nav-6", label: "مادر و کودک"},
        {id: "nav-7", label: "میوه و سبزیجات"},
        {id: "nav-8", label: "پوشاک"},
    ];

    return (
        <div className="header">
            <div className="header--top">
                <div className="header--logo">
                    <img src="https://theme-persian.ir/superkala/demo/template/assets/images/logo.png"
                         alt="logo not loaded"/>
                </div>
                <div className="header--search">
                    <button className="header__search--btn">جستجو</button>
                    <input className="header__search--input" type="text"
                           value="دسته بندی مورد نظر را جستجو کنید" disabled={true}/>
                    <span className="header__search--iconSearch">
                        {<FontAwesomeIcon icon={Icons.faSearch}>
                        </FontAwesomeIcon>}
                    </span>
                </div>
                <div className='header--headerTxt'>
                <span className="header__headerTxt--iconShop">
                    {<FontAwesomeIcon icon={Icons.faBagShopping}>
                    </FontAwesomeIcon>}
                </span>
                    <p>خرید از فروشگاه </p>
                    <p className="header__headerTxt--firstTxt">افق کوروش</p>
                    <p className="header__headerTxt--lineL"></p>
                    <span className="header__headerTxt--iconShop">
                    {<FontAwesomeIcon icon={Icons.faLocation}>
                    </FontAwesomeIcon>}
                </span>
                    <p className="header__headerTxt--line"> ارسال به </p>
                    <p className="header__headerTxt--secondTxt">بجنورد-شریعتی</p>
                </div>
                <div className="header--headerIcons">
                    <ul className="header__headerIcons--icons">
                        <li className="header__headerIcons--iconUser">
                            {<FontAwesomeIcon icon={Icons.faUser}>
                            </FontAwesomeIcon>}
                        </li>
                        <li className="header__headerIcons--iconCart">
                            {<FontAwesomeIcon icon={Icons.faShoppingCart}>
                            </FontAwesomeIcon>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header--menuBar">
                {navItems.map((navItemsList) => {
                    return (
                        <li className="header__menuBar--listItems">
                            {navItemsList.label}
                        </li>
                    );
                })}
                <ul>
                </ul>
            </div>
        </div>
    );
}

export default Head;