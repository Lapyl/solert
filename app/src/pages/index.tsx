import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solert Alerts System</title>
        <meta
          name="description"
          content="Solert Alerts System"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
