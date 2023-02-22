import React from "react";
import { TwitterShareButton, FacebookShareButton, EmailShareButton, WhatsappShareButton } from "react-share";
import { TwitterIcon, FacebookIcon, EmailIcon, WhatsappIcon} from "react-share";
import "./style.css";

function ShareButton({ url, value }) {
  return (
    <div className="share-container">
        <p className="text">Share on:</p>
      <TwitterShareButton url={url} title={value}>
        <TwitterIcon className="icon" size={32} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={value}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <EmailShareButton url={url} quote={value}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <WhatsappShareButton url={url} quote={value}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      
    </div>
  );
}

export default ShareButton;
