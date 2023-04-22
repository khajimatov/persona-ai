import { type NextPage } from "next";
import Head from "next/head";

import { useUser } from "@clerk/nextjs";

import Nav from "~/components/Nav";
import PersonaCard from "~/components/personaCard/personaCard";

import commandGif from "../../public/command.gif";
import faceGif from "../../public/face-id.gif";

const Home: NextPage = () => {
  const { user, isSignedIn } = useUser();

  if (isSignedIn && !user) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Persóna</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      </Head>
      <main className="flex flex-col items-center justify-center">
        <Nav user={user} isSignedIn={isSignedIn} />
        <div
          style={{ backgroundImage: `url('${faceGif.src}')` }}
          className="face-gif hidden md:block right-0 md:right-[10%] lg:right-[15%]"
        ></div>
        <div
          style={{ backgroundImage: `url('${commandGif.src}')` }}
          className="command-gif hidden md:block left-0 md:left-[10%] lg:left-[15%]"
        ></div>
        <div className="mt-4">
          <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-1 rounded-full">
            BETA
          </span>
          <h1 className="scroll-m-20 text-4xl lg:text-5xl text-center font-bold tracking-tight title">
            Persona Playground
          </h1>
        </div>
        <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
          Create, Interact, and Communicate with AI Characters.
          <br />
          Some of them you may already know.👀
        </p>
        <div className="flex gap-10 mt-12 flex-col md:flex-row">
          <PersonaCard isSignedIn={isSignedIn} />
        </div>
      </main>
    </>
  );
};

export default Home;
