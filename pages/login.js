import React from "react";
import { getProviders, signIn } from "next-auth/react";

const login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen w-full">
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotify logo"
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18d860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default login;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
