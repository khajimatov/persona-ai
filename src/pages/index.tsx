import { type NextPage } from "next";
import Head from "next/head";

import { useUser } from "@clerk/nextjs";
import commandGif from "public/command.gif";
import faceGif from "public/face-id.gif";

import Nav from "~/components/Nav";
import PersonaCard from "~/components/personaCard/personaCard";

const Home: NextPage = () => {
  const { user, isSignedIn } = useUser();

  if (isSignedIn && !user) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Persóna</title>
        <meta name="description" content="Persóna, chat with AI Characters from real world" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      </Head>
      <main className="flex flex-col items-center justify-center">
        <Nav user={user} isSignedIn={isSignedIn} />
        <div
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
          style={{ backgroundImage: `url('${faceGif.src}')` }}
          className="face-gif hidden md:block right-0 md:right-[10%] lg:right-[15%]"
        ></div>
        <div
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
          style={{ backgroundImage: `url('${commandGif.src}')` }}
          className="command-gif hidden md:block left-0 md:left-[10%] lg:left-[15%]"
        ></div>
        <div className="mt-8">
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded-full">
            EXPERIMENT
          </span>
          <h1 className="scroll-m-20 text-4xl lg:text-5xl text-center font-bold tracking-tight title">
            Persona Playground
          </h1>
        </div>
        <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
          Create, Interact, and Communicate with&nbsp;AI&nbsp;Characters.
          <br />
          Some of them you may already know.👀
        </p>
        <div className="flex gap-10 mt-10 flex-col md:flex-row">
          <PersonaCard isSignedIn={isSignedIn} />
        </div>
      </main>
    </>
  );
};

export default Home;
