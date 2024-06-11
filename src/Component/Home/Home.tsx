import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeLatestNews from "./HomeLatestNews/HomeLatestNews";
import HomePopularNews from "./HomePopularNews/HomePopularNews";
import HomeSubscribe from "./HomeSubscribe/HomeSubscribe";
import Container from "../../SharedComponent/Container";

const Home: React.FC = () => {
  return (
    <Container>
      <HomeBanner />

      <HomeLatestNews />

      <HomeSubscribe />

      <HomePopularNews />
    </Container>
  );
};

export default Home;
