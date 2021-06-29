import React from "react";
import "./Info.scss";
import TruckIcon from "./Info-icons/truck-icon.png";
import BoxIcon from "./Info-icons/return-box-icon.png";
import PhoneIcon from "./Info-icons/phone-icon.png";
import LockIcon from "./Info-icons/lock-icon.png";

const Info = () => {
    return (
        <section className="info-section">
            <div className="info-container">
                <div className="info-img-container"><img src={TruckIcon} alt="" /></div>
                <h3>Fast shipping</h3>
                <p>Delivery in 2-3 business days</p>
            </div>
            <div className="info-container">
                <div className="info-img-container"><img src={BoxIcon} alt="" /></div>
                <h3>Free returns</h3>
                <p>No questions asked</p>
            </div>
            <div className="info-container">
                <div className="info-img-container"><img src={PhoneIcon} alt="" /></div>
                <h3>Service</h3>
                <p>We are here to help <br /> Mo-Fri 08:00am-10:00pm</p>
            </div>
            <div className="info-container">
                <div className="info-img-container"><img src={LockIcon} alt="" /></div>
                <h3>Secure Shop</h3>
                <p>Complies with all data security rules</p>
            </div>
        </section>
    );
};

export default Info;
