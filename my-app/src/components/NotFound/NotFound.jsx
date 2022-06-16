import React from "react";
import "./NotFound.css"
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
export default function TrendingFilmsSection() {
  return (
    <div className="content">
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className="content__title">
        <h1>Sorry, page not found :(</h1>
        <div className="content__link">
          <Link to="Main">Go to main page</Link>
        </div>
      </div>
    </div>
  );
}