import FeaturedCategory from "../src/components/homeAuth/featuredCategory";
import FavoritesCategory from "../src/components/homeAuth/favoriteCategory";
import FeaturedSection from "../src/components/homeAuth/featuresSection";
import NewestCategory from "../src/components/homeAuth/newestCategory";
import Head from "next/head";
import ListCategories from "../src/components/homeAuth/listCategories";
import Footer from "../src/components/common/footer";

const HomeAuth = function () {
    return (
      <>
        <Head>
          <title>Onebitflix - Home</title>
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
           <FeaturedSection />
           <NewestCategory />
           <FavoritesCategory />
           <FeaturedCategory />
           <ListCategories />
           <Footer />
        </main>
      </>
    );
  };
  
  export default HomeAuth;