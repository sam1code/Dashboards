import React, { Component } from "react";
import { render } from "react-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Profile from "../Assets1/profile.png";
import "./allComp.css";
import Img1 from '../Assets1/Img1.png'

function Main1() {
  return (
    <div>
      <div className="row1">
        <div className="img_1_profile">
          <img src={Profile} alt="Avtar" />
          <details className="details_icon">
            <summary></summary>
          </details>
        </div>
        <div className="Name_1">John Bayer</div>
        <NotificationsIcon />
        <div className="null_row"></div>
      </div>
      <div className="row2">
        <h5 className="date">
          Monday, <b className="blue_text">02 July 2020</b>
        </h5>
        <div>
          <button className="Add_btn"> + ADD</button>
          <input
            type="search"
            name="search"
            placeholder="Search for Applications here"
          ></input>
        </div>
      </div>
      <div className="columns">
        <div className="column1">
          <div className="colum_row1">
            <div className="inside_column1">col1row1col1</div>
            <div className="inside_column2">col1row1col2</div>
            <div className="inside_column3">col1row1col3</div>
          </div>
          <div className="colum_row2">
            <div className="inside_column1">col1row2col1</div>
            <div className="inside_column2">col1row2col2</div>
          </div>
          <div className="colum_row3">
            <div className="inside_column1">col1row3col1</div>
            <div className="inside_column2">col1row3col2</div>
            <div className="inside_column3">col1row3col3</div>
          </div>
        </div>
        <div className="column2">
            <div className="img1">
                Hello John bayer, <br/> You have 8 new applications today
                <img src={Img1} alt="" />
                <div className="box">
                  Bii I am the box
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main1;
