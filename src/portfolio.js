import React from "react";
import sitme from "./img/sitme.jpg";

export default function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Projects 💻 & 📱</h2>

      <div className="row">
        <div className="column nature">
          <div className="content">
            <img src={sitme} alt="Mountains" width="100%" />
            <h4>Mountains</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
          <div className="stack2">
            <button>#Python</button>
            <button>#Django</button>
            <button>#Docker</button>
        </div>
        </div>
        <div className="column nature">
          <div className="content">
            <img src={sitme} alt="Lights" width="100%" />
            <h4>Lights</h4>
            <p>Lorem ipsum dolor..</p>

          </div>
          <div className="stack2">
            <button>#React</button>
            <button>#Python</button>
            <button>#Django</button>
        </div>
        </div>
        <div className="column nature">
          <div className="content">
            <img src={sitme} alt="Nature" width="100%" />
            <h4>Forest</h4>
            <p>Lorem ipsum dolor..</p>
            <div className="stack2">
            <button>#Html</button>
            <button>#CSS</button>
            <button>#JavaScrit</button>
        </div>
          </div>
        </div>

        <div className="column nature">
          <div className="content">
            <img src={sitme} alt="Nature" width="100%" />
            <h4>Forest</h4>
            <p>Lorem ipsum dolor..</p>
          </div>
          <div className="stack2">
            <button>#React</button>
            <button>#Redux</button>
            <button>#sass</button>
        </div>
        </div>
      </div>
    </div>
  );
}
