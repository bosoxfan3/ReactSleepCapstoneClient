import React from 'react';
import {connect} from 'react-redux';

import './footer.css';

export function Footer() {
  return (
    <footer>
      <p>Created by Daniel Acquesta</p>
    </footer>
  );
}

export default connect()(Footer);