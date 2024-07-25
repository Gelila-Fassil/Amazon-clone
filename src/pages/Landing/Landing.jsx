import Banner from "../../components/Banner/Banner";
import Catagory from "../../components/category/Catagory";
import Layout from "../../components/Layout";
import Product from "../../components/Product/Product";

const Landing = () => {
  return (
    <Layout>
      <Banner />
      <Catagory />
      <Product />
    </Layout>
  );
};

export default Landing;
