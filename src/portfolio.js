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
            <h4><a href="https://hubmart.herokuapp.com">Hubmart Clone</a></h4>
            <p>E-commerce site</p>
          </div>
          <div className="stack2">
            <button>#Python</button>
            <button>#Django -RestApi</button>
            <button>#Redux</button>
            <button>#React</button>
        </div>
        </div>
        <div className="column nature">
          <div className="content">
            <img src={sitme} alt="Lights" width="100%" />
            <h4>Hotel-PMS</h4>
            <p>Property Management System</p>

          </div>
          <div className="stack2">
          <button>#Python</button>
            <button>#Django -RestApi</button>
            <button>#Redux</button>
            <button>#React</button>
        </div>
        </div>
        <div className="column nature">
          <div className="content">
            <img src={sitme} alt="Nature" width="100%" />
            <h4>Enya Task</h4>
            <p>Read data & filter by options</p>
            <div className="stack2">
            <button>#Html</button>
            <button>#CSS</button>
            <button>#React</button>
        </div>
          </div>
        </div>

        <div className="column nature">
          <div className="content">
            <img src={sitme} alt="Nature" width="100%" />
            <h4>Keypetbook Task</h4>
            <p>Upload CSV file to database and present data to dashboard with all auth authentication</p>
          </div>
          <div className="stack2">
            <button>#React</button>
            <button>#Redux</button>
            <button>#css</button>
            <button>#Django</button>
        </div>
        </div>
      </div>
      <div className="row">
        <div className="column nature">
          <div className="content">
            <img src={sitme} alt="Mountains" width="100%" />
            <h4><a href="https://hubmart.herokuapp.com">OgaDonate</a></h4>
            <p>Fund Raising Application with donation and E-commerce</p>
          </div>
          <div className="stack2">
            <button>#Python</button>
            <button>#Django -RestApi</button>
            <button>#Redux</button>
            <button>#React</button>
        </div>
        </div>
        <div className="column nature">
          <div className="content">
            <img src={sitme} alt="Lights" width="100%" />
            <h4>Real Estate</h4>
            <p>Real Estate Property Management System</p>

          </div>
          <div className="stack2">
          <button>#Python</button>
            <button>#Django</button>
            <button>#Html</button>
            <button>#CSS</button>
        </div>
        </div>
        <div className="column nature">
          <div className="content">
            <img src={sitme} alt="Nature" width="100%" />
            <h4>Todo Task</h4>
            <p>Todo Application</p>
            <div className="stack2">
            <button>#Django</button>
            <button>#Django RestApi</button>
            <button>#CSS</button>
            <button>#React</button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
