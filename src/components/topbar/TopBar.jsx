import {Link } from "react-router-dom";
import "./topbar.css"

// eslint-disable-next-line
export default function () {
    const user=true;
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                    <Link to="/" className="link">ABOUT</Link>
                </li>
                <li className="topListItem"> <Link to="/" className="link">CONTACT</Link></li>
                <li className="topListItem"> <Link to="/write" className="link">WRITE</Link></li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/300611460_786569125979819_9197438176494067330_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=dtXA2dQOSFUAX9Icp71&_nc_ht=scontent.fccu3-1.fna&oh=00_AT-rfno5JYrz5gZyhFrRvUDqCghim03QIDRNViCutScSWg&oe=63174F54"
            // src="photo.jpg"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}