import React from "react";
import './App.css';

const notifications = [
    {
        time: "12:00",
        description: "Loan Them Sprint check"
    }
];

class App extends React.Component {

    numbers = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    days() {
        const calendar_array = [];
        let flag = true;
        for (let day = 30; day !== 13 || flag; day++) {
            calendar_array.push(day);
            if (day === 31 || day === 28) {
                flag =! (day === 28);
                day = 0;
            }
        }
        return calendar_array;
    }

    renderNotification(item, index) {
        return (
            <div className="notification-item" key={index}>
                <span className="notification--icon">
                    icon
                </span>
                <div className="notification__description-box">
                    <span className="notification__description-box--time">{item.time}</span>
                    <span
                        className="notification__description-box--description">{item.description}</span>
                </div>
            </div>)

    }

    render() {
        return (
            <div className="div">
                <div className="container">
                    <div className="left-side">
                        <div className="notification-wrapper">
                            {notifications.map(this.renderNotification)}
                        </div>
                        <div className="footer">
                            <div className="footer__setting">
                                <label htmlFor="disturb" className="footer__setting--text">Do Not Disturb</label>
                                <input type="checkbox" id="disturb" name="disturb"/>
                            </div>
                            <input className="footer--btn" value="Clear" type="button" disabled={true}/>
                        </div>
                    </div>
                    <div className="right-side">
                        <h1 className="right-side--header">February 3 2022</h1>
                        <div className="calendar">
                            <div className="calendar__header">
                                <div className="calendar__header__month">
                                    <span className="calendar__header__month--left-arrow"><b>{'<'}</b></span>
                                    <label className="calendar__header__month--title"><b>{'February'}</b></label>
                                    <span className="calendar__header__month--right-arrow"><b>{'>'}</b></span>
                                </div>
                                <ul className="calendar--header__week-day">
                                    {this.numbers.map((number) => {
                                        return (
                                            <li className="calendar__header__week-day--day">{number}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <ul className="calendar__days">
                                {this.days().map((day) => (
                                    <li className="calendar__days__day">{day}</li>
                                ))}
                                <span className="calendar__days__day--event"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;