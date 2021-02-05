import React from "react";
import sitme from "./img/sitme.jpg";
export default function about() {
  return (
    <div className="about">
      <img src={sitme} alt="about" width="600px" height="480px" />
      <div>
        <h2 className="about-title">About Me & Stack</h2>
        <p className="describ">
          I'm a motivated full stack Developer Discipline iin Computer Science with great<br/>
          passion for building excellent softwares. I build fun stuffs using mostly Python and
          JavaScript. I offer 5 years of development experience, a strong aptitude for learning new
          technologies, and a proven track record of meeting aggressive goals. My most notable
          skills include:
        </p>
        <div id="stack">
            <button>#Html</button>
            <button>#CSS</button>
            <button>#JavaScrit</button>
            <button>#Python</button>
            <button>#Django</button>
        </div>
        <div id="stack">
            <button>#RestApi</button>
            <button>#Reactjs</button>
            <button>#React Native</button>
            <button>#Nodejs</button>
            <button>#Sass</button>
        </div>
        <div id="stack">
            <button>#wordpress</button>
            <button>#Docker</button>
            <button>#Git & Github</button>
            <button>#Heroku</button>
            <button>#PostgresSQL</button>
        </div>
      </div>
    </div>
  );
}
