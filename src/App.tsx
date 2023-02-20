import { Card, Form, SideBar } from 'components';
import React, { Fragment } from 'react';

import { GlobalStyles } from "global/GlobalStyles"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <SideBar />
      <Card />
      <Form />
    </Fragment>
  );
}

export default App;
