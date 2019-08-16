import React, { Component } from "react";
import "./StyleContentLeft.css";
import data from "../../../components/Data/data.json";
import VideoHot from "../../VideoHot/VideoHot";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ContentLeft extends Component {
  constructor(props) {
    super(props);

    console.log("data", data[0].videohot);
  }

  _renderVideoHot() {
    return data[0].videohot.map((value, key) => {
      return (
          
          <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
            <div className="card-relax-sub2">
            
              <img className="image-relax" src={value.url_image} alt="" />
              <p>
                {/* <a href="" className="tittle-music-card-relax">
                  {value.tittle}
                </a> */}
                <Link to="/videohot"> {value.tittle}</Link>
                <br />
                <a href="" className="singer-music-card-relax">
                  {value.singer}
                </a>
              </p>
            </div>
          </div>
      );
    });
  }

  _renderAlbumHot() {
    return data[0].albumhot.map((value, key) => {
      return (
        <div className="col-md-3 col-sm-3 col-lg-3 col-3 card-relax">
          <div className="card-relax-sub2">
            <img className="image-relax" src={value.url_image} alt="" />
            <p>
              <a href="" className="tittle-music-card-relax">
                {value.tittle}
              </a>
              <br />
              <a href="" className="singer-music-card-relax">
                {value.singer}
              </a>
            </p>
          </div>
        </div>
      );
    });
  }

  _renderMusicVietHot() {
    return data[0].nhacviethot.map((value, key) => {
      return (
        <div>
          <div className="box-music-viet">
            <img className="image-music-viet" src={value.url_image} alt="" />
            <div>
              <span className="music-name"> {value.tittle}</span>
              <br />
              <a href="">
                <span className="singer-name">{value.singer}</span>
              </a>
            </div>
          </div>
          <hr />
        </div>
      );
    });
  }

  _renderMusicVietNew() {
    return data[0].nhacvietmoi.map((value, key) => {
      return (
        <div>
          <div className="box-music-viet">
            <img className="image-music-viet" src={value.url_image} alt="" />
            <div>
              <span className="music-name"> {value.tittle}</span>
              <br />
              <a href="">
                <span className="singer-name">{value.singer}</span>
              </a>
            </div>
          </div>
          <hr />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {/* begin slide banner */}

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride=""
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block image-slide-content"
                src="https://photo-zmp3.zadn.vn/banner/c/5/5/a/c55ad5242332032d45f6d7803f059609.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block image-slide-content"
                src="https://photo-zmp3.zadn.vn/banner/9/1/8/6/9186cc1f86bcce2ed63912166142d19f.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item ">
              <img
                className="d-block image-slide-content"
                src="https://photo-zmp3.zadn.vn/banner/4/6/0/2/4602c347525f8abb66d6ac524297808f.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* end slide banner */}

        {/* begin music top */}

        {/* <div className="music-top">
          <p className="tittle-music-relax">MUSIC TOP</p>
            <div className="box-music-top">
              <div className="stt-music-top">1</div>

              <div className="line-music-top">-</div>

              <img
                className="image-music-top"
                src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/8/3/6/c/836cf31f036fb8f89b78cfd07cd77477.jpg"
                alt=""
              />

              <div className="box-content-music-top">
                <span className="music-name"> Khi người lớn cô đơn</span>
                <br />
                <a href="">
                  <span className="singer-name">Phạm Hồng Phước</span>
                </a>
              </div>
            </div>

            <div className="">
              <h3>fohaohf</h3>
            </div>
            <div className="">
              <h3>18,261</h3>
            </div>
          <br />
        </div> */}

        {/* end music top */}

        {/* begin âm nhạc thư giãn */}

        <div className="music-relax">
          <p className="tittle-music-relax">ÂM NHẠC THƯ GIÃN</p>
          <div className="row no-gutters">{this._renderAlbumHot()}</div>
        </div>

        {/* end âm nhạc thư giãn */}

        {/* begin video hot */}

        <div className="video-hot">
          <p className="tittle-music-relax">ALBUM HOT</p>

          <div className="row no-gutters">{this._renderAlbumHot()}</div>
        </div>

        {/* end video hot  */}

        {/* begin album hot */}

        <div className="video-hot">
          <p className="tittle-music-relax">VIDEO HOT</p>

          <div className="row no-gutters">{this._renderVideoHot()}</div>
        </div>

        {/* end album hot  */}

        <div className="row ">
          {/* begin music viet hot  */}

          <div className="col-md-6 col-sm-6 col-lg-6 col-6 music-viet-hot">
            <p className="tittle-music-relax">NHẠC VIỆT HOT</p>

            {this._renderMusicVietHot()}
          </div>

          {/* end music viet hot  */}

          {/* begin music viet new  */}

          <div className="col-md-6 col-sm-6 col-lg-6 col-6 music-viet-new">
            <p className="tittle-music-relax">NHẠC VIỆT MỚI</p>

            {this._renderMusicVietNew()}
          </div>

          {/* end music viet new  */}
        </div>
      </div>
    );
  }
}

export default ContentLeft;
