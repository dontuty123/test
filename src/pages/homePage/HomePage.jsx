import "./homePage.css";
import * as React from "react";
import {
  Flight,
  Person,
  Restaurant,
  PersonPinCircle,
  ArrowRightAlt,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { BookingForm } from "../../components/bookingForm/BookingForm";

export const HomePage = () => {
  return (
    <div className="homePage">
      <div className="coverHomePage">
        <div className="topbar">
          <nav>
            <h2 className="logo">
              ComBo<span> UuDai</span>
            </h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <div>
              <div className="dropdown">
                <Link className="btn" to="/DangNhap">
                  Login
                </Link>
                <ul className="dropdown-content">
                  {" "}
                  <li>
                    <Link to="/thongtinnguoidung">Profile</Link>
                  </li>{" "}
                  <li>
                    <Link to="/danhsachdonhang">DonHang</Link>
                  </li>
                  <li>
                    <Link to="/chatvoishipper">Chat</Link>
                  </li>
                  <li>
                    <Link to="#Dangxuat">Dang Xuat</Link>
                  </li>
                </ul>
              </div>
              {/* <div className="dropdown">
            <Link to="#admin">
              Admin <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/thongke">ThongKe</Link>
              </li>
              <li>
                <Link to="/danhsachsanpham">SanPham</Link>
              </li>
              <li>
                <Link to="/danhsachdonhangadmin">DonHang</Link>
              </li>
              <li>
                <Link to="/taikhoan">TaiKhoan</Link>
              </li>
              <li>
                <Link to="/voucher">Voucher</Link>
              </li>
            </ul>
          </div> */}
            </div>
          </nav>
        </div>

        <div className="content">
          <div className="contentTop">
            <h4>ComBo</h4>
            <h1>
              Uu <span>Dai</span>
            </h1>
            <h3>Du L???ch Ti???t Ki???m - Kh??ng Lo Chi Ph??</h3>
            {/* <div className="newslatter">
            <form>
              <input
                type="text"
                name=""
                id=""
                placeholder="Nh???p n??i b???n mu???n ?????n"
              />
              <input type="submit" name="submit" value="B???t ?????u" />
            </form>
          </div> */}
          </div>
          <div className="contentBottom">
            <BookingForm />
          </div>
        </div>
      </div>

      {/* Next */}
      <div className="introduce">
        <div className="introduceTop">
          <div className="introduceTopLeft">
            <img
              src="/img/du_lich.jpg"
              alt=""
              className="introduceTopLeftImg"
            />
          </div>
          <div className="introduceTopRight">
            <div className="introduceTopRightCoverSpan">
              <span className="introduceTopRightSpan">TR???I NGHI???M </span>
              <span className="introduceTopRightSpan1">TUY???T V???I</span>
            </div>
            <h2 className="introduceTopRightInfo">
              Ch??ng t??i mang b??n m??nh s??? m???nh ?????m b???o t???t c??? c??c kh??ch c?? m???t k???
              ngh??? tr??n c??? mong ?????i. H??y th??i lo l???ng v??? nh???ng ??? g?? tr??n ???????ng
              v?? t???n h?????ng cu???c h??nh tr??nh th??i n??o
            </h2>
          </div>
        </div>

        <div className="introduceBottom">
          <div className="introduceBottomLeft">
            <div className="introduceBottomLeftCoverSpan">
              <span className="introduceBottomLeftSpan">CU???C PHI??U L??U </span>
              <span className="introduceBottomLeftSpan1">????NG GI??</span>
            </div>
            <h2 className="introduceBottomLeftInfo">
              Ch??ng ta b???t ?????u bi???t ??i ngay t??? khi c??n b??. V???y n??n kh??ng c?? l??
              do g?? khi ????i ch??n ??ang kh???e m?? b???n l???i ph???i ng???i im. Ch??ng t??i c??
              m???t ????? c??ng b???n b?????c ??i tr??n m???i n???o ???????ng.
            </h2>
            <button className="introduceBottomLeftButton">
              THAM GIA NGAY <ArrowRightAlt className="Icon" />
            </button>
          </div>
          <div className="introduceBottomRight">
            <img
              src="/img/du_lich1.jpg"
              alt=""
              className="introduceBottomRightImg"
            />
          </div>
        </div>
      </div>

      <div className="introduce1">
        <span className="introduceTitle">CH??NG T??I&nbsp;</span>
        <span className="introduceTitleRed">MANG ?????N</span>
      </div>
      <div className="introduceCover">
        <div className="container">
          <div className="container__image">
            <div className="container__info container__author">
              TR???I NGHI???M &nbsp;
              <a
                className="link"
                href="https://instagram.com/thuc2202"
                target="_blank"
              >
                TUY???T V???I
              </a>
            </div>
            <div className="container__info container__location">
              Ch??ng t??i mang b??n m??nh s??? m???nh ?????m b???o t???t c??? c??c kh??ch c?? m???t k???
              ngh??? tr??n c??? mong ?????i. H??y th??i lo l???ng v??? nh???ng ??? g?? tr??n ???????ng
              v?? t???n h?????ng cu???c h??nh tr??nh th??i n??o!
            </div>
          </div>
        </div>
      </div>

      {/* Our Achives */}
      <div className="achive">
        <div className="achiveTop">Ch??ng t??i li??n k???t v?? l??m vi???c v???i:</div>
        <div className="achiveBottom">
          <div className="achiveIntroduce">
            <Person className="achiveIcons" />
            <h1 className="achiveNumber">5000</h1>
            <h2 className="achiveInfo">Kh??ch H??ng</h2>
          </div>

          <div className="achiveIntroduce">
            <PersonPinCircle className="achiveIcons" />
            <h1 className="achiveNumber">100</h1>
            <h2 className="achiveInfo">Amazing Tours</h2>
          </div>

          <div className="achiveIntroduce">
            <Restaurant className="achiveIcons" />
            <h1 className="achiveNumber">50</h1>
            <h2 className="achiveInfo">Nh?? H??ng</h2>
          </div>

          <div className="achiveIntroduce">
            <Flight className="achiveIcons" />
            <h1 className="achiveNumber">8</h1>
            <h2 className="achiveInfo">H??ng H??ng Kh??ng</h2>
          </div>
        </div>
      </div>

      {/* PLACE */}
      <div className="place">
        <div className="placeTitleWrap">
          <div className="title">
            <span className="introduceTitle">C??C ?????A ??I???M&nbsp;</span>
            <span className="introduceTitleRed">N???I TI???NG </span>
          </div>
          <h3 className="placeTitleInfo">
            H??y c??ng nhau kh??m ph?? c??c ?????a ??i???m du l???ch n???i ti???ng v??ng quanh
            m???nh ?????t h??nh ch??? S xinh ?????p n??o!!!
          </h3>
        </div>
        <div className="placePop">
          <figure className="snip0019">
            <img src="/img/vinh_ha_long.jpg" alt="sample11" />
            <figcaption>
              <div>
                <h2>
                  <span>H??? LONG</span> t??nh y??u trong t??i
                </h2>
              </div>
              <div>
                <p>
                  H??? Long lu??n ch??o ????n, ti???p ????i ch??ng ta nh?? m???t ng?????i t??nh
                  v???y! Lu??n g???i trao nh???ng y??u th????ng th?? m???ng nh???t. H??y ?????n v??
                  c???m nh???n c??ng ch??ng nhau n??o!!!
                </p>
              </div>
              <a href="#"></a>
            </figcaption>
          </figure>
          <figure className="snip0019">
            <img src="/img/phu_quoc.jpg" alt="sample12" />
            <figcaption>
              <div>
                <h2>
                  Ng???c ?????o c???a VI???T NAM <span>PH?? QU???C</span>
                </h2>
              </div>
              <div>
                <p>
                  ???n sau m???t Ph?? Qu???c thi??n ???????ng, c??n l?? nh???ng c??u chuy???n ch??a
                  k???, nh???ng con ng?????i ch??a ???????c nh???c ?????n v?? nh???ng n???ng m??a t???o
                  t???n ch??a ai n???m tr???i.
                </p>
              </div>
              <a href="#"></a>
            </figcaption>
          </figure>
          <figure className="snip0019">
            <img src="/img/hoi_an.jpg" alt="sample13" />
            <figcaption>
              <div>
                <h2>
                  ph??? c??? <span>H???i an</span> n???o v??? c???a nh???ng{" "}
                  <span>Gi???c m??</span>{" "}
                </h2>
              </div>
              <div>
                <p>
                  Kh??ng m???t ??m thanh huy??n n??o, kh??ng m???t ti???ng ?????ng c?? g???m r??,
                  c??ng ch???ng c?? nh???ng th????ng hi???u r???c r??? ????n m??u. H???i An l???ng
                  m??nh trong v??? ?????p c???a s??? tr???m m???c, c??? k??nh.
                </p>
              </div>
              <a href="#"></a>
            </figcaption>
          </figure>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
