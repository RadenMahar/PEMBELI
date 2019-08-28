import React from "react";
import { withRouter } from "react-router-dom";

function NotMatch() {
  return (
    <div className="body1">
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>:(</h1>
          </div>
          <h2>404 - Page not found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <a href="/beranda">home page</a>
        </div>
      </div>
    </div>
  );
}

export default withRouter(NotMatch);
