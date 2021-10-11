import "../css/styles.css";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  return (
    <div className={`masjid-container`}>
      <div className={`row`}>
        <div className={`col-md-12 col-sm-12`}>
          <a className={`home-tile`}>
            <i className={`fa fa-user-o`} aria-hidden="true"></i>
            <br />
            <span>profile</span>
          </a>
          <a className={`home-tile`}>
            <i className={`fa fa-file-text-o`} aria-hidden="true"></i>
            <br />
            <span>surah</span>
          </a>
        </div>
      </div>
      <div className={`row`}>
        <div className={`col-md-12 col-sm-12`}>
          <div className="home-tile-row">
            <a className={`home-tile`}>
              <i className={`fa fa-file-text-o`} aria-hidden="true"></i>
              <br />
              <span>notes</span>
            </a>
            <a className={`home-tile`}>
              <i className={`fa fa-bookmark-o`} aria-hidden="true"></i>
              <br />
              <span>bookm.</span>
            </a>
            <a className={`home-tile`}>
              <i className={`fa fa-search`} aria-hidden="true"></i>
              <br />
              <span>search</span>
            </a>
          </div>
        </div>
      </div>
      <div className={`row`}>
        <div className={`col-md-12 col-sm-12`}>
          <a
            href={`https://alfurqaanfoundation.givingfuel.com/furqaan-project`}
            className={`home-tile`}
          >
            <i className={`fa fa-gift`} aria-hidden="true"></i>
            <br />
            <span>donate</span>
          </a>
          <a href={`https://theclearquran.org/`} className={`home-tile`}>
            <i className={`fa fa-shopping-cart`} aria-hidden="true"></i>
            <br />
            <span>buy</span>
          </a>
          <a className={`home-tile`}>
            <i className={`fa fa-phone`} aria-hidden="true"></i>
            <br />
            <span>contact</span>
          </a>
          <a className={`home-tile`}>
            <i className={`fa fa-user-circle`} aria-hidden="true"></i>
            <br />
            <span>about</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
