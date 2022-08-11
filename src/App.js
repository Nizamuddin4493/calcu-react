import React, { PureComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Calculator from './component/Calculator';
import Quote from './component/Quote';
import Home from './component/Home';
import Headers from './component/Header';
import Footer from './component/Footer';
// import CalcoContent from './component/CalcoContent';
import MainCalcu from './component/MainCalcu';

class App extends PureComponent {
  render() {
    return (
      <>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calDesign" element={<MainCalcu />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
