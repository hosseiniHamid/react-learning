import React from 'react';
import './second.css';
import {FontAwesomeIcon,} from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'

class SecondProject extends React.Component {

    item = [
        [
            {
                label: 'Wi-Fi',
                icon: Icons.faWifi
            },
            {
                label: 'Network',
                icon: Icons.faGlobeAsia
            },
            {
                label: 'Bluetooth',
                icon: Icons.faCircle
            },
            {
                label: 'Background',
                icon: Icons.faTv
            },
            {
                label: 'Appearance',
                icon: Icons.faDesktop
            },
            {
                label: 'Notification',
                icon: Icons.faBell
            },
            {
                label: 'Search',
                icon: Icons.faSearchPlus
            },
        ], [
            {
                label: 'Applications',
                icon: Icons.faBars
            },
            {
                label: 'Privacy',
                icon: Icons.faLock
            },
            {
                label: 'Online Accounts',
                icon: Icons.faCloud
            },
            {
                label: 'Sharing',
                icon: Icons.faShareAlt
            },
        ], [{
            label: "Sound",
            icon: Icons.faMusic
        },
            {
                label: "Power",
                icon: Icons.faUserClock
            },
            {
                label: "Displays",
                icon: Icons.faTelevision
            },
            {
                label: "Mouse & Touchpad",
                icon: Icons.faMouse
            },
            {
                label: "Keyboard Shortcuts",
                icon: Icons.faKeyboard
            },
            {
                label: "printers",
                icon: Icons.faPrint
            },


        ]
    ]

    imageUrls = [require('./img1.png'), require('./img3.jpg'),
        require('./img7.jpg'), require('./img2.jpg'), require('./img5.jpg')
        , require('./img1.png'), require('./img6.png'), require('./img4.png')];

    render() {

        return (
            <div className="background">
                <div className="background--left--menu">
                    <div className="background__menu--list">
                        <ul className="background__menu--items">
                            {this.item.map((group) => {
                                    return (
                                        <li className="background__menu__items--item">
                                            {
                                                group.map((item) => (

                                                    <div
                                                        className={`background__menu__items__item--style ${item.label === 'Background' ? "background__menu__items__item--disabled" : ""}
                                                        `}>
                                                        {['Applications','Privacy'].includes(item.label) ? <FontAwesomeIcon className='background__menu__items__item__style--arrow'
                                                                                                                            icon={Icons.faAngleRight} />: null }
                                                        {item.label}
                                                        <FontAwesomeIcon
                                                            className="background__menu__items__item--styleIcon"
                                                            icon={item.icon}/>
                                                    </div>
                                                ))
                                            }
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                        <div className="background__menu__section--first-line">
                        </div>
                        <div className="background__menu__section--first-line">
                        </div>
                    </div>
                </div>
                <div className="background--center">
                    <div className="background__center--headerImg">
                        <div className="background--center__headerImg--headImage">
                            <img className={`background--center__headerImg--image`}
                                 src={this.imageUrls[0]} alt="image"/>
                            <FontAwesomeIcon className="background--center__headerImg__headImage--icons"
                                             icon={Icons.faClock}/>
                        </div>
                    </div>

                    <span className="background__center--sectionLine"></span>
                    <div className="background__center--images">
                        {this.imageUrls.map((urls,index) => {
                            return (

                                <div className='background__center__images--img'>
                                    <img className="background__center__images--imgTag" src={urls} alt="not load"/>
                                    {index===0 ?  <FontAwesomeIcon className="background--center__headerImg__headImage--iconsImage"
                                                                            icon={Icons.faClock}/> :null}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        );
    }
}

export default SecondProject;

