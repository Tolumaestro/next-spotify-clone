import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import { getSession } from "next-auth/react";
import Player from "../components/Player";

export default function Home() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div className="fixed bottom-0 w-full">
        <Player />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
