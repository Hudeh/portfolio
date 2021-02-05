import React from "react";
import profile from "./img/profile_pic.jpeg";

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
//   css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 5px solid rgb(61, 58, 58)}";
  document.body.appendChild(css);
};

const main = () => {
  return (
    <div className="main">
      <img src={profile} alt="profile-pic" />
      <div className="greet">
        <h2 className="hi">Hi! 🖐, I'm</h2>
        <h2 className="name">Henry Udezuligbo</h2>
      </div>
      <h1>
        <a
          href="#/"
          className="typewrite"
          data-period="2000"
          data-type='[ "Am a motivated full stack Developer.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'
        >
          <span class="wrap"></span>
        </a>
      </h1>
    </div>
  );
};
export default main;
