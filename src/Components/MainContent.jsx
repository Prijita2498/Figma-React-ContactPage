import React from "react";
import "./MainContent.css";
import Service from "./../assets/Images/Service.png";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "./Button";

function MainContent() {
  return (
    <div>
      <div className="main-container">
        <h1>CONTACT US</h1>
        <p>
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>

        <div className="left-container">
          <div className="button-container">
            <Button
              isOutline={false}
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button
              isOutline={false}
              text="VIA CALL"
              icon={<FaPhoneAlt fontSize="24px" />}
            />
          </div>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<MdMessage fontSize="24px" />}
          />

          <form>
            <div className="form-container">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form-container">
              <label htmlFor="email">E-Mail</label>
              <input type="email" name="email" />
            </div>
            <div className="form-container">
              <label htmlFor="text">TEXT</label>
              <textarea type="text" name="text" />
            </div>
            <div className="form-container">

            <Button isOutline={false} text="SUBMIT" />
            </div>
          </form>
        </div>

        <div className="right-container">
          <img src={Service} alt="Service" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
