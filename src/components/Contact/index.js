import React from "react";
import "./style.css";

function Contact() {
  return (
    <div>
      <div className="contactWrapper">
      <div class="form-group">
        <label for="">Name</label>
        <input
          type="email"
          class="form-control"
          name=""
          id=""
          aria-describedby="emailHelpId"
          placeholder=""
        />
        <label for="">Email</label>
        <input
          type="email"
          class="form-control"
          name=""
          id=""
          aria-describedby="emailHelpId"
          placeholder=""
        />
        <div class="form-group">
          <label for="">Your Message</label>
          <textarea class="form-control" name="" id="" rows="3"></textarea>
        </div>
        <small id="emailHelpId" class="form-text text-muted">
          Help text
        </small>
        <button className="btn btn-success">Submit</button>
      </div>
    </div>
    </div>
  );
}

export default Contact;
