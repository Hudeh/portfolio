import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import ChatIcon from '@material-ui/icons/Chat';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
const footer = () => {
  return (
    <div className="footer" id="contact">
      <h2>Connect with me!</h2>
      <p>Interested in working together? Wherever you are with your idea or your project, I'll be happy to help. Ready to make a difference?</p>
      <div className="row-group">
        <a href="https//www.twitter.com/hudeh30"  className="social"><TwitterIcon className="icon" /></a>
        <a href="https//www.instagram.com/hudeh30"  className="social"><InstagramIcon className="icon"/></a>
        <a href="https//www.linkedin.com/in/henry-udezuligbo"  className="social"><LinkedInIcon className="icon"/></a>
        <a href="hudeh30@gmail.com"  className="social"><EmailIcon className="icon"/></a>
        <a href="09038186710"  className="social"><ChatIcon className="icon"/></a>
        <a href="09038186710" className="social"><PhoneInTalkIcon className="icon"/></a>
      </div>
    </div>
  );
};

export default footer;
