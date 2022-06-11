import React from "react";
import "../Notfound/notfound.scss";

const Notfound = () => {
  return (
    <div className="notfound">
      <div className="loop">
        <aside>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
            alt="pic"
          />
        </aside>
        <main>
          <h1>OOOOPPSS...</h1>
          <p>
            Bele bir sehife movcud deyildir{" "}
            {/* <em>Cavanligin ezrayil olub</em> */}
          </p>
        </main>
      </div>
    </div>
  );
};

export default Notfound;
