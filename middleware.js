import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  //Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  //Allow the request if its a request from the next-auth/provider or  if the token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  //Redirect to login if user doesn't have token
  if (!token && pathname !== "/login") {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
};
