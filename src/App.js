import "./App.css";
import Logo from "./img/logo-white.webp";
import Logo2 from "./img/html5-logo.webp";
import Logo3 from "./img/logo-blue.webp";
import Screen from "./img/screen1.webp";
import Screen2 from "./img/screen2.webp";
import Screen3 from "./img/screen3.webp";
import Avatar from "./img/avatar.webp";
import Codrops from "./img/codrops-logo.webp";
import Screenshot from "./img/01-screenshot.webp";
import Screenshot2 from "./img/02-screenshot.webp";
import Screenshot3 from "./img/03-screenshot.webp";
import Screenshot4 from "./img/04-screenshot.webp";
import Screenshot5 from "./img/05-screenshot.webp";
import Screenshot6 from "./img/06-screenshot.webp";
import Screenshot7 from "./img/07-screenshot.webp";
import Screenshot8 from "./img/08-screenshot.webp";
import LargeImage from "./img/large/01.webp";
import LargeImage2 from "./img/large/02.webp";
import LargeImage3 from "./img/large/03.webp";
import LargeImage4 from "./img/large/04.webp";
import LargeImage5 from "./img/large/05.webp";
import LargeImage6 from "./img/large/06.webp";
import LargeImage7 from "./img/large/07.webp";
import LargeImage8 from "./img/large/08.webp";

function App() {
  const setShowNavText = () => {
    const active = document.getElementById("trigger-overlay");
    const active2 = document.getElementById("overlay");
    if (active.classList === "active") {
      active.classList.toggle("active");
    } else {
      active2.classList.toggle("open");
    }
  };

  const close = () => {
    document.getElementById("overlay").classList.toggle("open");
  };

  return (
    <>
      <header>
        <section className="hero">
          <div className="texture-overlay"></div>
          <div className="container">
            <div className="row nav-wrapper">
              <div className="col-md-6 col-sm-6 col-xs-6 text-left">
                <a href="#!">
                  <img src={Logo} alt="" />
                </a>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6 text-right navicon">
                <p>MENU</p>
                <a
                  id="trigger-overlay"
                  className="nav_slide_button nav-toggle"
                  href="#!"
                  onClick={() => setShowNavText()}
                >
                  <span></span>
                </a>
              </div>
            </div>
            <div className="row hero-content">
              <div className="col-md-12">
                <h1 className="animated fadeInDown">
                  An Exclusive, Premium HTML5 &amp; CSS3 Template created
                  exlusively for Codrops.
                </h1>
                <a href="#!" className="use-btn animated fadeInUp">
                  Use it for free
                </a>
                <a href="#about" className="learn-btn animated fadeInUp">
                  Learn more <i className="fa fa-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="video" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>
                <a
                  href="http://www.youtube.com/embed/9No-FiEInLA?autoplay=1&wmode=opaque&fs=1"
                  className="youtube-media"
                >
                  <i className="fa fa-play-circle-o"></i> Watch the Video
                </a>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="features-intro">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 nopadding features-intro-img">
              <div className="features-bg">
                <div className="texture-overlay"></div>
                <div className="features-img wp1">
                  <img src={Logo2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 nopadding">
              <div className="features-slider">
                <ul className="slides" id="featuresSlider">
                  <li>
                    <h1>The Fore-front of Design &amp; Technology</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed a lorem quis neque interdum consequat ut sed sem. Duis
                      quis tempor nunc. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                    <p>
                      <a href="#features" className="arrow-btn">
                        Find out why this freebie rocks!
                        <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </p>
                  </li>
                  <li>
                    <h1>Multi-Purpose User Centric Design</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed a lorem quis neque interdum consequat ut sed sem. Duis
                      quis tempor nunc. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                    <p>
                      <a href="#!" className="arrow-btn">
                        Find out why this freebie rocks!
                        <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </p>
                  </li>
                  <li>
                    <h1>Made with Love, Released for Free</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed a lorem quis neque interdum consequat ut sed sem. Duis
                      quis tempor nunc. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                    <p>
                      <a href="#!" className="arrow-btn">
                        Find out why this freebie rocks!
                        <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-list" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-4 feature-1 wp2">
                <div className="feature-icon">
                  <i className="fa fa-desktop"></i>
                </div>
                <div className="feature-content">
                  <h1>Responsive</h1>
                  <p>
                    Built using HTML5/CSS3 and jQuery, and built using one of
                    the world's most powerful CSS frameworks available,
                    Bootstrap.
                  </p>
                  <a href="#!" className="read-more-btn">
                    Read More <i className="fa fa-chevron-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 feature-2 wp2 delay-05s">
                <div className="feature-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="feature-content">
                  <h1>Multi-Purpose</h1>
                  <p>
                    Perfect if you run your own start-up, product or service.
                    Boxify can showcase your business converting your visits to
                    income.
                  </p>
                  <a href="#!" className="read-more-btn">
                    Read More <i className="fa fa-chevron-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 feature-3 wp2 delay-1s">
                <div className="feature-icon">
                  <i className="fa fa-heart"></i>
                </div>
                <div className="feature-content">
                  <h1>Absolutely Free</h1>
                  <p>
                    As aways, download Boxify for free exclusively from Codrops.
                    If you love Boxify and want to thank me, simply
                    <a href="#!">buy me a beer</a>.
                  </p>
                  <a href="#!" className="read-more-btn">
                    Read More <i className="fa fa-chevron-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="showcase-wrap">
          <div className="texture-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="device wp3">
                  <div className="device-content">
                    <div className="showcase-slider">
                      <ul className="slides" id="showcaseSlider">
                        <li>
                          <img src={Screen} alt="" />
                        </li>
                        <li>
                          <img src={Screen2} alt="" />
                        </li>
                        <li>
                          <img src={Screen3} alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h1>Showcase your Product or Service</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  lorem quis neque interdum consequat ut sed sem. Duis quis
                  tempor nunc. Interdum et malesuada fames ac ante ipsum primis
                  in faucibus.
                </p>
                <blockquote className="team-quote">
                  <div className="avatar">
                    <img src={Avatar} alt="" />
                  </div>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed a lorem quis neque interdum consequat ut sed sem. Duis
                    quis tempor nunc." - Steve Jobs
                  </p>
                  <div className="logo-quote">
                    <a href="#!">
                      <img src={Codrops} alt="" />
                    </a>
                  </div>
                </blockquote>
                <a href="#!" className="download-btn">
                  Download! <i className="fa fa-download"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="screenshots-intro">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Packed Full of Powerful Features</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                lorem quis neque interdum consequat ut sed sem. Duis quis tempor
                nunc. Interdum et malesuada fames ac ante ipsum primis in
                faucibus.
              </p>
              <p>
                <a href="#screenshots" className="arrow-btn">
                  See the screenshots!
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="screenshots" id="screenshots">
        <div className="container-fluid">
          <div className="row">
            <ul className="container">
              <li>
                <figure>
                  <img src={Screenshot} alt="" />
                  <figcaption>
                    <div className="caption-content">
                      <a href={LargeImage} className="single_image">
                        <i className="fa fa-search"></i>
                        <br />
                        <p>Optimised For Design</p>
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Screenshot2} alt="" />
                  <figcaption>
                    <div className="caption-content">
                      <a href={LargeImage2} className="single_image">
                        <i className="fa fa-search"></i>
                        <br />
                        <p>User Centric Design</p>
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Screenshot3} alt="" />
                  <figcaption>
                    <div className="caption-content">
                      <a href={LargeImage3} className="single_image">
                        <i className="fa fa-search"></i>
                        <br />
                        <p>Responsive and Adaptive</p>
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Screenshot4} alt="" />
                  <figcaption>
                    <div className="caption-content">
                      <a href={LargeImage4} className="single_image">
                        <i className="fa fa-search"></i>
                        <br />
                        <p>Absolutely Free</p>
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
          <div className="row">
            <ul className="container">
              <li>
                <figure>
                  <img src={Screenshot5} alt="" />
                  <figcaption>
                    <div className="caption-content">
                      <a href={LargeImage5} className="single_image">
                        <i className="fa fa-search"></i>
                        <br />
                        <p>Multi-Purpose Design</p>
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Screenshot6} alt="" />
                  <figcaption>
                    <div className="caption-content">
                      <a href={LargeImage6} className="single_image">
                        <i className="fa fa-search"></i>
                        <br />
                        <p>Exclusive to Codrops</p>
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Screenshot7} alt="" />
                  <figcaption>
                    <div className="caption-content">
                      <a href={LargeImage7} className="single_image">
                        <i className="fa fa-search"></i>
                        <br />
                        <p>Made with Love</p>
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Screenshot8} alt="" />
                  <figcaption>
                    <div className="caption-content">
                      <a href={LargeImage8} className="single_image">
                        <i className="fa fa-search"></i>
                        <br />
                        <p>In Sydney, Australia</p>
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="download" id="download">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center wp4">
              <h1>Seen Enough?</h1>
              <a href="#!" className="download-btn">
                Download! <i className="fa fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="footer-logo">
                <img src={Logo3} alt="" />
              </h1>
              <p>
                website template created exclusively for
                <a href="#!">
                  <em>Lorem</em>
                </a>
              </p>
            </div>
            <div className="col-md-7">
              <ul className="footer-nav">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#screenshots">Screenshots</a>
                </li>
                <li>
                  <a href="#download">Download</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="overlay overlay-boxify" id="overlay">
        <nav>
          <ul>
            <li
              onClick={() => {
                close();
              }}
            >
              <a href="#about">
                <i className="fa fa-heart"></i>About
              </a>
            </li>
            <li
              onClick={() => {
                close();
              }}
            >
              <a href="#features">
                <i className="fa fa-flash"></i>Features
              </a>
            </li>
          </ul>
          <ul>
            <li
              onClick={() => {
                close();
              }}
            >
              <a href="#screenshots">
                <i className="fa fa-desktop"></i>Screenshots
              </a>
            </li>
            <li
              onClick={() => {
                close();
              }}
            >
              <a href="#download">
                <i className="fa fa-download"></i>Download
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
