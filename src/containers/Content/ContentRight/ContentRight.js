import React, { Component } from "react";
import "./StyleContentRight.css";
class ContentRight extends Component {
  render() {
    return (
      <div>
        {/* begin bai hat danh rieng cho ban */}

        <div className="private-for-you">
          <div className="playlist-for-you">
            <h3>music for you</h3>
          </div>
          <h2>Danh rieng cho ban</h2>
          <p>
            Nghe nhung ca khuc yeu thich va kham pha am nhac danh rieng cho ban
          </p>
        </div>

        {/* end bai hat danh rieng cho ban */}
        {/* begin chu de hot */}
        <div className="topic-hot">
          <div className="nhac-hot">
            <img
              className="anh-nhac-hot"
              src="https://photo-zmp3.zadn.vn/covers/d/1/d1c2738deec7efd1942a3027a1c436b0_1499828277.jpg"
              alt=""
            />
          </div>
          <div className="nhac-hot">
            <img
              className="anh-nhac-hot"
              src="https://photo-zmp3.zadn.vn/cover/7/c/9/5/7c95f7f7eb049f6d635df1df7a8c7284.jpg"
              alt=""
            />
          </div>
          <div className="nhac-hot">
            <img
              className="anh-nhac-hot"
              src="https://photo-zmp3.zadn.vn/cover/5/3/8/0/53801ebaa05e57320f06954927896a69.jpg"
              alt=""
            />
          </div>
          <div className="nhac-hot">
            <img
              className="anh-nhac-hot"
              src="https://photo-zmp3.zadn.vn/covers/2/a/2ac9d9aa479519e1724db5b860373578_1499827968.jpg"
              alt=""
            />
          </div>
          <div className="nhac-hot">
            <img
              className="anh-nhac-hot"
              src="https://photo-zmp3.zadn.vn/covers/d/0/d0f7e500d9a338062095f7f66ed669ff_1516330401.jpg"
              alt=""
            />
          </div>
        </div>
        {/* end chu de hot */}

        {/* begin bat hat theo tuan */}
        <br />
        <h2>BÀI HÁT THEO TUẦN</h2>
        <div>
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Việt Nam
              </a>
              <a
                className="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                US - UK
              </a>
              <a
                className="nav-item nav-link"
                id="nav-contact-tab"
                data-toggle="tab"
                href="#nav-contact"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                K - POP
              </a>
            </div>
          </nav>
          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>

        {/* end bai hat theo tuan */}

        {/* begin MV theo tuan */}

        <br />
        <h2>MV THEO TUẦN</h2>
        <div>
          <nav>
            <div
              className="nav nav-tabs nav-fill"
              id="nav-mv-tab"
              role="tablist"
            >
              <a
                className="nav-item nav-link active"
                id="nav-vn-tab"
                data-toggle="tab"
                href="#nav-vn"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Việt Nam
              </a>
              <a
                className="nav-item nav-link"
                id="nav-usuk-tab"
                data-toggle="tab"
                href="#nav-usuk"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                US - UK
              </a>
              <a
                className="nav-item nav-link"
                id="nav-kpop-tab"
                data-toggle="tab"
                href="#nav-kpop"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                K - POP
              </a>
            </div>
          </nav>
          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-vn"
              role="tabpanel"
              aria-labelledby="nav-vn-tab"
            >
              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/2/2/e/8/22e8402961915ff5a64d4c83b64b7a01.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-usuk"
              role="tabpanel"
              aria-labelledby="nav-usuk-tab"
            >
              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-kpop"
              role="tabpanel"
              aria-labelledby="nav-kpop-tab"
            >
              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>

        {/* end MV theo tuan */}

        {/* begin album theo tuan */}

        <br />
        <h2>ALBUM THEO TUẦN</h2>
        <div>
          <nav>
            <div
              className="nav nav-tabs nav-fill"
              id="nav-mv-tab"
              role="tablist"
            >
              <a
                className="nav-item nav-link active"
                id="nav-album-vn-tab"
                data-toggle="tab"
                href="#nav-album-vn"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Việt Nam
              </a>
              <a
                className="nav-item nav-link"
                id="nav-album-usuk-tab"
                data-toggle="tab"
                href="#nav-album-usuk"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                US - UK
              </a>
              <a
                className="nav-item nav-link"
                id="nav-album-kpop-tab"
                data-toggle="tab"
                href="#nav-album-kpop"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                K - POP
              </a>
            </div>
          </nav>
          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-album-vn"
              role="tabpanel"
              aria-labelledby="nav-vn-tab"
            >
              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/2/2/e/8/22e8402961915ff5a64d4c83b64b7a01.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-album-usuk"
              role="tabpanel"
              aria-labelledby="nav-usuk-tab"
            >
              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-album-kpop"
              role="tabpanel"
              aria-labelledby="nav-kpop-tab"
            >
              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>

              <div>
                <div className="box-music-viet">
                  <img
                    className="image-music-viet"
                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg"
                    alt=""
                  />
                  <div>
                    <span className="music-name"> Em ơi em đừng khóc </span>
                    <br />
                    <a href="">
                      <span className="singer-name"> Jack </span>
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>

        {/* end album theo tuan */}

        {/* begin tin tuc am nhac */}

        <br />
        <h2>TIN TỨC ÂM NHẠC</h2>
        <div>
          <div className="box-music-viet">
            <img className="image-music-viet" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg" alt="" />
            <div>
              <span className="music-name"> Hôm nay có tin gì</span>
              <br />
              <a href="">
                <span className="singer-name"> Ko có tin gì </span>
              </a>
            </div>
          </div>
          <hr />
          <div className="box-music-viet">
            <img className="image-music-viet" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg" alt="" />
            <div>
              <span className="music-name"> Hôm nay có tin gì</span>
              <br />
              <a href="">
                <span className="singer-name"> Ko có tin gì </span>
              </a>
            </div>
          </div>
          <hr />
          <div className="box-music-viet">
            <img className="image-music-viet" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg" alt="" />
            <div>
              <span className="music-name"> Hôm nay có tin gì</span>
              <br />
              <a href="">
                <span className="singer-name"> Ko có tin gì </span>
              </a>
            </div>
          </div>
          <hr />
          <div className="box-music-viet">
            <img className="image-music-viet" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg" alt="" />
            <div>
              <span className="music-name"> Hôm nay có tin gì</span>
              <br />
              <a href="">
                <span className="singer-name"> Ko có tin gì </span>
              </a>
            </div>
          </div>
          <hr />
          <div className="box-music-viet">
            <img className="image-music-viet" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg" alt="" />
            <div>
              <span className="music-name"> Hôm nay có tin gì</span>
              <br />
              <a href="">
                <span className="singer-name"> Ko có tin gì </span>
              </a>
            </div>
          </div>
          <hr />
          <div className="box-music-viet">
            <img className="image-music-viet" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg" alt="" />
            <div>
              <span className="music-name"> Hôm nay có tin gì</span>
              <br />
              <a href="">
                <span className="singer-name"> Ko có tin gì </span>
              </a>
            </div>
          </div>
          <hr />
          <div className="box-music-viet">
            <img className="image-music-viet" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/f/d/f/7fdff6efa98515dc3cfaf0f21f0eea34.jpg" alt="" />
            <div>
              <span className="music-name"> Hôm nay có tin gì</span>
              <br />
              <a href="">
                <span className="singer-name"> Ko có tin gì </span>
              </a>
            </div>
          </div>
          <hr />
        </div>

        {/* end tin tuc am nhac */}
      </div>
    );
  }
}

export default ContentRight;
