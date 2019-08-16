import React, { Component } from "react";
import "./StyleBanner.css";
class Banner extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="col-md-12 col-sm-12 col-lg-12 no-gutters">
            <img
              className="banner-image"
              src="https://photo-zmp3.zadn.vn/banner/2/f/d/9/2fd9f6648c28ba46c8af7ff7ea54b09c.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
