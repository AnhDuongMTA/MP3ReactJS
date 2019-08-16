import React, { Component } from "react";

class Top extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="box-music-viet">
              <img
                className="image-music-viet"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/b/e/4/6be430e44902db6e3e28e8a39034f4df.jpg"
                alt=""
              />
              <div>
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
