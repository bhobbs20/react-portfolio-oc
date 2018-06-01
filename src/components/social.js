import React, { Component } from 'react';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaTwitter from 'react-icons/lib/fa/twitter';

class Social extends Component {

  render() {
    return (
        <div>
        <a href="https://github.com/bhobbs20"><FaGithubSquare className="footer-social-icon"/></a>
        <a href="https://twitter.com/brianhobbs216"><FaTwitter className="footer-social-icon"/></a>
        <a href="https://www.linkedin.com/in/brian-hobbs-181895b5/"><FaLinkedinSquare className="footer-social-icon"/></a>
      </div>
    );
  }
}

export default Social;