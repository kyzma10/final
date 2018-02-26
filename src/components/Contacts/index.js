import React, { Component } from 'react';
import Contact from './../Contact';

class Contacts extends Component {

  render() {

    return(
      <div id="contacts">
        <ul>
        <Contact />
          <li className="contact active" >
            <div className="wrap">
              <span className="contact-status busy"></span>
              <img src="images/men-ava.jpg" alt="" />
              <div className="meta">
                <p className="name">Harvey Specter</p>
                <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
              </div>
            </div>
          </li>
          <li className="contact">
            <div className="wrap">
              <span className="contact-status away"></span>
              <img src="images/women-ava.jpg" alt="" />
              <div className="meta">
                <p className="name">Rachel Zane</p>
                <p className="preview">I was thinking that we could have chicken tonight, sounds good?</p>
              </div>
            </div>
          </li>
          <li className="contact">
            <div className="wrap">
              <span className="contact-status online"></span>
              <img src="images/women-ava.jpg" alt="" />
              <div className="meta">
                <p className="name">Donna Paulsen</p>
                <p className="preview">Mike, I know everything! Im Donna..</p>
              </div>
            </div>
          </li>
          <li className="contact">
            <div className="wrap">
              <span className="contact-status busy"></span>
              <img src="images/women-ava.jpg" alt="" />
              <div className="meta">
                <p className="name">Jessica Pearson</p>
                <p className="preview">Have you finished the draft on the Hinsenburg deal?</p>
              </div>
            </div>
          </li>
          <li className="contact">
            <div className="wrap">
              <span className="contact-status"></span>
              <img src="images/men-ava.jpg" alt="" />
              <div className="meta">
                <p className="name">Harold Gunderson</p>
                <p className="preview">Thanks Mike! :)</p>
              </div>
            </div>
          </li>
          <li className="contact">
            <div className="wrap">
              <span className="contact-status"></span>
              <img src="images/men-ava.jpg" alt="" />
              <div className="meta">
                <p className="name">Daniel Hardman</p>
                <p className="preview">Well meet again, Mike. Tell Jessica I said 'Hi'.</p>
              </div>
            </div>
          </li>
          <li className="contact">
            <div className="wrap">
              <span className="contact-status busy"></span>
              <img src="images/women-ava.jpg" alt="" />
              <div className="meta">
                <p className="name">Katrina Bennett</p>
                <p className="preview">Ive sent you the files for the Garrett trial.</p>
              </div>
            </div>
          </li>
          <li className="contact">
            <div className="wrap">
              <span className="contact-status"></span>
              <img src="images/women-ava.jpg" alt="" />
              <div className="meta">
                <p className="name">Charles Forstman</p>
                <p className="preview">Mike, this isnt over.</p>
              </div>
            </div>
          </li>
          <li className="contact">
            <div className="wrap">
              <span className="contact-status"></span>
              <img src="images/men-ava.jpg" alt="" />
              <div className="meta">
                <p className="name">Jonathan Sidwell</p>
                <p className="preview"><span>You:</span> Thats bullshit. This deal is solid.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contacts;
