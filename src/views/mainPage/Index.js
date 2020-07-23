import React from "react";
import Layout from "../../components/layout"
import BannerTopo from "../../components/banner"
import Juntos from "./parts/juntos.js"
import Beneficios from "./parts/beneficios"
import Parceiros from "./parts/parceiros"


function Index() {
  React.useEffect(() => {
    console.log("sidebar-collapse")
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
      <Layout >
        <BannerTopo />
        <Juntos />
        <Beneficios />
        <Parceiros />
      </Layout>
  );
}

export default Index;
