import React from "react-dom";
import "./footer.css";
import * as Icons from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import imageFooter from './footerImg.JPG';

let superKala = ['درباره اپلیکیشن', 'درباره سوپرکالا', 'تماس با ما', 'بلاگ', 'همکاری باتامین کنندگان'];
let customers = ['پاسخ به پرسش های متدوال', 'رویه های بازگرداندن کالا', 'شرایط استفاده', 'حریم خصوصی'];
let communicationWays = [
    {
        desc: 'تلفن تماس: 54595000(021)',
        logo: Icons.faPhone
    },
    {
        desc: 'آدرس: بجنورد-خراسان شمالی',
        logo: Icons.faLocationDot
    },
    {
        desc: 'info@superkala.com: ایمیل ',
        logo: Icons.faEnvelope
    }
];

function Footer() {
    return (
        <div className="footer--">
            <div className="footer--footerImg">
                <img className="footer__footerImg--background" src={imageFooter} alt="not loaded"/>
            </div>
            <div className="footer--about">
                <div className="footer__about--superKala">
                    <span className="footer__about__superKala--title">با سوپرکالا
                    <p></p>
                    </span>
                    <ul className="footer__about__superKala--list">
                        {superKala.map((Kala => {
                            return (
                                <li>
                                    {Kala}
                                </li>
                            );
                        }))}
                    </ul>
                </div>
                <div className="footer__about--customers">
                    <span className="footer__about__customers--title">خدمات مشتریان</span>
                    <ul className="footer__about__customers--list">
                        {customers.map((customer => {
                            return (
                                <li>
                                    {customer}
                                </li>
                            );
                        }))}
                    </ul>
                </div>
                <div className="footer__about--communicationWays">
                    <span className="footer__about__communicationWays--title">راه های ارتباطی</span>
                    <ul className="footer__about__communicationWays--list">
                        {
                            communicationWays.map((items => {
                                return (
                                    <li className="footer__about__communicationWays__list--items">
                                        {items.desc}
                                        <FontAwesomeIcon className="footer__about__communicationWays__list__items--icon" icon={items.logo}></FontAwesomeIcon>
                                    </li>
                                );
                            }))
                        }
                    </ul>
                </div>
                <div className="footer__about--logos">
                    <div className="footer__about__logos--firstLogo">
                        <img src="https://theme-persian.ir/superkala/demo/template/assets/images/footer/license/L-1.png"
                             alt="not loaded"/>
                    </div>
                    <div className="footer__about__logos--secondLogo">
                        <img src="https://theme-persian.ir/superkala/demo/template/assets/images/footer/license/L-2.png"
                             alt="not loaded"/>
                    </div>
                </div>
            </div>
            <div className="footer--text">
                <div>
                    <h2 className="footer__text--textTitle">
                        سوپرمارکت آنلاین سوپرکالا
                    </h2>
                </div>
                <div className="footer__text--textBody">
                    ،تجربه خریدانلاین به یادماندنی برای شما است.شما<p className="text">سوپرمارکت اینترنتی سوپر کالا</p>
                    می توانید تمام محصولات و
                    نیاز های روزانه خود را از <p className="text">انوع خواروبار</p> تا همه نوع محصولات سوپر مارکتی،از
                    جمله <p className="text"> انواع
                    مواد غذایی،نوشیدنی و
                    دم نوش ها،محصولات بهداشتی زیبایی،انواع ابزار و ملزومات</p> را باتخفیف مناسب در فروشگاه اینترنتی
                    سوپرکالا
                    تهیه کنید.سوپرکالا،با استفاده از روش های پرداخت آسان،ویترین عالی و طرح های تخفیفی بی نظیر در وب
                    سایت،امکان خرید با قیمت و تخفیف مناسب را برای همه مشتریان عزیز بع وجود آورده است.با سوپر مارکت
                    آنلاین سوپر کالا میتوانید کالاهای اساسی را با تضمین قیمت ممکن و بهترین خدمات پس از فروش درب منزلتان
                    تحویل بگیرید.ویترین فروشگاه اینترنتی سوپر کالا شامل کالا های اساسی مورد نیاز شما در انواع برند
                    هاومارک های ایرانی و خارجی با کیفیت و تخفیف عالی است.در این فروشگاه اینترنتی مواد غذایی می توانید
                    انواع مارک های <p className="text">برنج،چای،روغن،قند وشکر،محصولات پروتینی و لبنیاتی،انواع حبوبات و
                    ادویه جات</p> را به همراه
                    صدها محصول دیگر را در کیفیت و با خدمات عالی به صورت اینترنتی و پرداخت آنلاین یا حضوری،در کمترین بازه
                    زمانی ممکن دریافت کنید.تمام محصولات ارایه شده در این سوپر مارکت آنلاین دارای مجوز و استاندار های
                    لازم از وزارت بهداشت و مراجع مربوطه بوده وتاریخ مصرف هر کالای ارسالی به صورت مجزا کنترل میشود.
                    فروشگاه اینترنتی مواد غذایی سوپر کالا تضمین می کند علاوه برتخفیف های روزانه فروشگاه های زنجیره ای
                    افق کوروش،بیشترین تخفیف ها را با خرید آنلاین از سوپر مارکت آنلاین سوپرکالا دریافت کنید.
                </div>
            </div>
        </div>
    );
}

export default Footer;