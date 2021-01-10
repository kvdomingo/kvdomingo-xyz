import React, { Suspense } from "react";
import AOS from "aos";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Routes from "./shared/Routes";
import Loading from "./shared/FullPageLoading";

export default class App extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>{Routes}</Suspense>
        <Footer />
      </Router>
    );
  }
}
