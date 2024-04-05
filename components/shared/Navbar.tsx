import { UserButton, SignedIn, auth } from "@clerk/nextjs";
import React from "react";
import NavginationMenu from "./NavginationMenu";
import Link from "next/link";

const Navbar = () => {
  const { userId } = auth();
  return (
    <nav className="fixed min-w-full backdrop-blur-md border-b-gray-300 z-50 top-3">
      <div className="flex justify-between my-2 px-4 py-2  rounded-lg">
        <div className="ml-3 font-serif font-bold text-xl ">Logo</div>
        <div>
          <NavginationMenu />
        </div>
        <div>
          {userId ? (
            <>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </>
          ) : (
            <>
              <Link href={"/sign-up"}>
                <button className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg rounded-lg bg-gray-100 file:rounded-2xl sm:w-auto sm:mb-0">
                  Sign up{" "}
                </button>
              </Link>
              <Link href={"/sign-in"}>
                <button className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg rounded-lg text-white bg-green-300 file:rounded-2xl sm:w-auto sm:mb-0 mx-2">
                  Sign in{" "}
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
