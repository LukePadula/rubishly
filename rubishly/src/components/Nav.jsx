import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <div className="nav-item ">
          <button className="nav-item-selected">Home</button>
        </div>
        <div className="nav-item">
          <button>How it works</button>
        </div>
        <div className="nav-item">
          <button>Our values</button>
        </div>
        <div className="nav-item">
          <button>Reviews</button>
        </div>
        <div className="nav-item">
          <div className="account-container">
            <FontAwesomeIcon className="account-icon" icon={faUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
