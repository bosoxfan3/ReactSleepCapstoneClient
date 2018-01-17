import React from 'react';
import {connect} from 'react-redux';

import './footer.css';

export function Footer() {
  return (
    <footer>
      <p>Created by Daniel Acquesta</p>
      <a href="https://github.com/bosoxfan3/RestFull"><img src="https://diversity.github.com/assets/svg/mark-github.svg" alt="github logo" /></a>
    </footer>
  );
}

export default connect()(Footer);