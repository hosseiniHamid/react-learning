import React from "react-dom";
import "./sideBar.css";

function SideBar() {
    return (
        <div className="bodyOption">
            <div className="bodyOption--sideBar">
                <div className="bodyOption--image">
                    <img className="bodyOption__image--img"
                         src="https://theme-persian.ir/superkala/demo/template/assets/images/slider-main/slider-main-image-2.png"
                         alt="no load"/>
                </div>
                <ul className="bodyOption__menu--listItem">
                    <img className="bodyOption__menu__listItem--takhfifImg"
                         src="https://theme-persian.ir/superkala/demo/template/assets/images/features/Discount.svg"
                         alt="not load"/>
                    <li className="bodyOption__menu__listItem--item">تا50 درصد تخفیف</li>
                    <img className="bodyOption__menu__listItem--ersalImg"
                         src="https://theme-persian.ir/superkala/demo/template/assets/images/features/fast-sending.svg"
                         alt="not load"/>
                    <li className="bodyOption__menu__listItem--item">ارسال سریع</li>
                    <img className="bodyOption__menu__listItem--tahvilImg"
                         src="https://theme-persian.ir/superkala/demo/template/assets/images/features/Free-delivery.svg"
                         alt="not load"/>
                    <li className="bodyOption__menu__listItem--item">تحویل رایگان</li>
                    <img className="bodyOption__menu__listItem--bazgashtImg"
                         src="https://theme-persian.ir/superkala/demo/template/assets/images/features/Return-guarantee.svg"
                         alt="not load"/>
                    <li className="bodyOption__menu__listItem--item">ضمانت بازگشت کالا</li>
                </ul>
            </div>
            <div className="bodyOption--card">
                <div className="bodyOption__card--title">
                    پیشنهاد روز
                </div>
                <img className="bodyOption__card--image"
                     src="https://theme-persian.ir/superkala/demo/template/assets/images/slider-moment/slider-moment-image-4.png"
                     alt="not loaded"/>
                <div className="bodyOption__card--takhfif">
                    <div className="bodyOption__card__takhfif--leftArrow">
                    </div>
                    <div className="bodyOption__card__takhfif--takhfifDarsad">
                        35% تخفیف
                    </div>
                    <div className="bodyOption__card__takhfif--rightArrow">
                    </div>
                </div>
                <div className="bodyOption__card--kalaText">
                    <div className="bodyOption__card__kalaText--file">
                        فیله کوثر ممتاز 600 گرمی تحفه
                    </div>
                    <div className="bodyOption__card__kalaText--prices">
                        <span className="bodyOption__card__kalaText--afterPrice">
                            تومان 49000
                        </span>
                        <span>  </span>
                        <span className="bodyOption__card__kalaText--beforePrice">
                            83000 تومان
                        </span>
                    </div>
                    <div className="bodyOption__card__kalaText--btn">
                        <button className="bodyOption__card__addBtn--button">
                            افزودن به سبد خرید+
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SideBar;