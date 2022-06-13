import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import tmdbIcon from "../../images/sheldon.png";
import "./TMDB.css";
import { Helmet } from "react-helmet";

export default function TMDB() {
  return (
    <div className="footer__tmdb">
      <Header />
      <Helmet>
        <title>About TMDB</title>
      </Helmet>
      <div className="tmdb_content">
        <div className="info_tmdb">
          <h2> Hi there!</h2>
          <p>
            international focus The Movie Database (TMDB) is a community built
            movie and TV database. Every piece of data has been added by our
            amazing community dating back to 2008. TMDb's strong and breadth of
            data is largely unmatched and something we're incredibly proud of.
            Put simply, we live and breathe community and that's precisely what
            makes us different.
          </p>
        </div>
        <h4>The TMDB Advantage</h4>
        <div className="advantages">
          <ul className="border_advantages">
            <li>
              Every year since 2008, the number of contributions to our database
              has increased. With over 400,000 developers and companies using
              our platform, TMDB has become a premiere source for metadata.
            </li>
            <li>
              Along with extensive metadata for movies, TV shows and people, we
              also offer one of the best selections of high resolution posters
              and fanart. On average, over 1,000 images are added every single
              day.
            </li>
            <li>
              We're international. While we officially support 39 languages we
              also have extensive regional data. Every single day TMDB is used
              in over 180 countries.
            </li>
            <li>
              Our community is second to none. Between our staff and community
              moderators, we're always here to help. We're passionate about
              making sure your experience on TMDB is nothing short of amazing.
            </li>
            <li>
              Trusted platform. Every single day our service is used by millions
              of people while we process over 3 billion requests. We've proven
              for years that this is a service that can be trusted and relied
              on.
            </li>
          </ul>
        </div>
      </div>
      <div className="tmdb_stats">
        <div className="tmdb_stats_content">
          <div className="stats_info">
            <h2>Stats</h2>
            <p>We all love them! Here's a few that we find interesting</p>
            <div className="numbers_staat">
              <div className="card_staat">
                <div className="round_staat">
                  <p>743,725</p>
                </div>
                <p>Movies</p>
              </div>
              <div className="card_staat">
                <div className="round_staat">
                  <p>128,140</p>
                </div>
                <p>TV Shows</p>
              </div>
              <div className="card_staat">
                <div className="round_staat">
                  <p>200,366</p>
                </div>
                <p>TV Seasons</p>
              </div>
              <div className="card_staat">
                <div className="round_staat">
                  <p>2,414,961</p>
                </div>
                <p>People</p>
              </div>
              <div className="card_staat">
                <div className="round_staat">
                  <p>3,319,384</p>
                </div>
                <p>Images</p>
              </div>
              <div className="card_staat">
                <div className="round_staat">
                  <p>386,573</p>
                </div>
                <p>Edits Last Week</p>
              </div>
              <div className="card_staat">
                <div className="round_staat">
                  <p>3,077,603</p>
                </div>
                <p>TV Episodes</p>
              </div>
            </div>
          </div>
          <div className="staat_img">
            <p>
              <img src={tmdbIcon} alt="" />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
