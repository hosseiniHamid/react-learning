import React from "react-dom";
import "./menuDetail.css";

let discountListImg =
    [
        {
            id: "mo-1",
            name: "آب آشامیدنی 1500میلی لیتری اُ لایف",
            image:
                "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/slider-product-image-1.png",
            price: "30000تومان",
            priceAfterDiscount: "17000تومان",
        },
        {
            id: "mo-2",
            name: "چای سیاه لوز هندوستان ساده 450 گرمی بلوط",
            image:
                "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/slider-product-image-2.png",
            price: "71900تومان",
            priceAfterDiscount: "39500تومان",
        },
        {
            id: "mo-3",
            name: "چای ایرانی آویشن 350گرمی بلوط",
            image:
                "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/slider-product-image-3.png",
            price: "49000تومان",
            priceAfterDiscount: "27000تومان",
        },
        {
            id: "mo-4",
            name: "ناگت کودکان 450 گرمی بون آدو",
            image:
                "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/slider-product-image-4.png",
            price: "35000تومان",
            priceAfterDiscount: "17000تومان",
        },
        {
            id: "mo-5",
            name: "مسواک دوقلو پاتریکس",
            image:
                "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/slider-product-image-5.png",
            price: "19800تومان",
            priceAfterDiscount: "9900تومان",
        },
    ];

let bestSaleItems = [
    {
        id: "ba-1",
        name: "قهوه کلاسیک شیشه ای 100 گرمی مولتی کافه",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/slider-product-image-6.png",
        price: "60000تومان",
        priceAfterDiscount: "48000تومان",
    },
    {
        id: "ba-2",
        name: "ماکارونی فرمی جامبو شلز 500 گرمی زرماکارون",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/slider-product-image-7.png",
        price: "17500تومان",
        priceAfterDiscount: "17000تومان",
    },
    {
        id: "ba-3",
        name: "آدامس با طعم نعناع خنک آبی فلیپ تاپ 20عددی دنکسیر",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/slider-product-image-8.png",
        price: "10000تومان",
        priceAfterDiscount: "8000تومان",
    },
    {
        id: "ba-4",
        name: "مربا بالنگ ترموفرمینگ 225 گرمی شانا",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/slider-product-image-9.png",
        price: "8900تومان",
        priceAfterDiscount: "8000تومان",
    },
    {
        id: "ba-5",
        name: "زعفران یک گرمی نوین زعفران",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/slider-product-image-10.png",
        price: "19500تومان",
        priceAfterDiscount: "19000تومان",
    },
];

let advertisingImage = [
    {
        id: "ev-1",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/adplacement/adplacement-1.jpg",
    },
    {
        id: "ev-2",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/adplacement/adplacement-2.gif",
    },
    {
        id: "ev-3",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/adplacement/adplacement-3.jpg",
    },
    {
        id: "ev-4",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/adplacement/adplacement-4.jpg",
    },
];

let teaListItems = [
    {
        id: "ht-1",
        name: "چای سبز جعبه مقوایی با گل سرخ 100گرمی دوغزال",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/Tea-1.png",
        price: 'تومان24800',
        priceAfterDiscount: '22300تومان',
    },
    {
        id: "ht-2",
        name: "چای سیاه کلکته ساده 450 گرمی ویکتوریا",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/Tea-2.png",
        price: '22300تومان',
        priceAfterDiscount: ' 22300تومان',
    },
    {
        id: "ht-3",
        name: "چای قرمز آسام طلاکوب 500 گرمی شهرزاد",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/Tea-3.png",
        price: '124000تومان',
        priceAfterDiscount: '99000تومان',
    },
    {
        id: "ht-4",
        name: "چای سیاه ساده سیلان 450 گرمی ویکتوریا",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/Tea-4.png",
        price: '96000تومان',
        priceAfterDiscount: '82000تومان',
    },
    {
        id: "ht-5",
        name: "چای ایرانی ساده 350 گرمی بلوط",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/Tea-5.png",
        price: '19800تومان',
        priceAfterDiscount: '9900تومان',
    },
];

let clearerListItem = [
    {
        id: "hh-1",
        name: "مایع لباسشویی البسه تیره اچ دی 2 لیتری سافتلن",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/Health-1.png",
        price: '56500تومان',
        priceAfterDiscount: '52000تومان',
    },
    {
        id: "hh-2",
        name: "مایع ظرفشویی آبکشی آسان لیمویی 3750 گرمی هوم پلاس",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/Health-2.png",
        price: '64000تومان ',
        priceAfterDiscount: '58000تومان',
    },
    {
        id: "hh-3",
        name: "جرمگیر سورمه ای 1000 گرمی اکتیو ",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/Health-3.png",
        price: '9500تومان',
        priceAfterDiscount: '9400تومان',
    },
    {
        id: "hh-4",
        name: "مایع لباسشویی پلی واش آبی 2500 گرمی اکتیو",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/Health-4.png",
        price: '66000تومان',
        priceAfterDiscount: '61000تومان',
    },
    {
        id: "hh-5",
        name: "مایع ظرفشوئی قرمز3750 گرمی پاکناز",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/slider-product/Health-5.png",
        price: '64900تومان',
        priceAfterDiscount: '61000تومان',
    },
];

let BrandsListItem = [
    {
        id: "sb-1",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/brand/brand-1.png",
    },
    {
        id: "sb-2",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/brand/brand-2.png",
    },
    {
        id: "sb-3",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/brand/brand-3.png",
    },
    {
        id: "sb-4",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/brand/brand-4.png",
    },
    {
        id: "sb-5",
        image:
            "https://theme-persian.ir/superkala/demo/template/assets/images/brand/brand-5.png",
    },
]

function MenuDetail() {

    return (
        <div className="bodyList">
            <div className="bodyList--discountList">
                <ul className="bodyList__discountList--list">
                    {discountListImg.map((imgs => {
                        return (
                            <li className="bodyList__discountList__list--item">
                                <img src={imgs.image} alt="not loaded"/>
                                <div className="bodyList__discountList__list__item--listItems">
                                    <span>{imgs.name}</span>
                                    <span
                                        className="bodyList__discountList__list__item__listItems--price">{imgs.price}</span>
                                    <span
                                        className="bodyList__clearerList__list__item__listItems--priceAfter">{imgs.priceAfterDiscount}</span>
                                </div>
                                <button className="bodyList__bestSale__list__item--btn">
                                    افزودن به سبد+
                                </button>
                            </li>
                        );
                    }))}
                </ul>
            </div>
            <div className="bodyList--bestSale">
                <ul className="bodyList__bestSale--list">
                    {bestSaleItems.map((imgs => {
                        return (
                            <li className="bodyList__bestSale__list--item">
                                <img src={imgs.image} alt="not loaded"/>
                                <div className="bodyList__bestSale__list__item--listItems">
                                <span className="bodyList__bestSale__list__item--name">
                                    {imgs.name}
                                </span>
                                    <span className="bodyList__bestSale__list__item__listItems--price">
                                    {imgs.price}
                                </span>
                                    <span className="bodyList__clearerList__list__item__listItems--priceAfter">
                                    {imgs.priceAfterDiscount}
                                </span>
                                </div>
                                <button className="bodyList__bestSale__list__item--btn">
                                    افزودن به سبد+
                                </button>
                            </li>
                        );
                    }))}
                </ul>
            </div>
            <div className="bodyList--advertisingImg">
                <ul className="bodyList__advertisingImg--listImg">
                    {
                        advertisingImage.map((image => {
                            return (
                                <li className="bodyList__advertisingImg--listImg--image">
                                    <img className="bodyList__advertisingImg--listImg__image--img" src={image.image}
                                         alt="not loaded"/>
                                </li>
                            );
                        }))
                    }
                </ul>

            </div>
            <div className="bodyList--teaList">
                <ul className="bodyList__teaList--list">
                    {teaListItems.map((items => {
                        return (
                            <li className="bodyList__teaList__list--item">
                                <img src={items.image} alt="not loaded"/>
                                <div className="bodyList__teaList__list__item--listItems">
                                    <span>{items.name}</span>
                                    <span
                                        className="bodyList__teaList__list__item__listItems--price">{items.price}</span>
                                    <span
                                        className="bodyList__clearerList__list__item__listItems--priceAfter">{items.priceAfterDiscount}</span>
                                </div>
                                <button className="bodyList__bestSale__list__item--btn">
                                    افزودن به سبد+
                                </button>
                            </li>
                        );
                    }))}
                </ul>

            </div>
            <div className="bodyList--clearerList">
                <ul className="bodyList__clearerList--list">
                    {clearerListItem.map((items => {
                        return (
                            <li className="bodyList__clearerList__list--item">
                                <img src={items.image} alt="not loaded"/>
                                <div className="bodyList__clearerList__list__item--listItems">
                                    <span>{items.name}</span>
                                    <span
                                        className="bodyList__clearerList__list__item__listItems--price">{items.price}</span>
                                    <span
                                        className="bodyList__clearerList__list__item__listItems--priceAfter">{items.priceAfterDiscount}</span>
                                </div>
                                <button className="bodyList__bestSale__list__item--btn">
                                    افزودن به سبد+
                                </button>
                            </li>
                        );
                    }))}
                </ul>
            </div>
            <div className="bodyList--BrandsList">
                <ul className="bodyList__BrandsList--list">
                    {BrandsListItem.map((image => {
                        return (
                            <li className="bodyList__BrandsList__list--image">
                                <img className="bodyList__BrandsList__list__image--img" src={image.image}
                                     alt="not loaded"/>
                            </li>
                        );
                    }))}
                </ul>
            </div>
        </div>
    );
}

export default MenuDetail;
