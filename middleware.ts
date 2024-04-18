import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";
/**
 * 경로 필터 방법
 * 1. if (request.nextUrl.pathname === "/profile") { }
 * 2. config
 * 
 * Edge runtime - https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
 */

interface Routes {
  [key: string]: boolean
}

const publicOnlyUrls:Routes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true
};

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const exists = publicOnlyUrls[request.nextUrl.pathname];
console.log(request.url);
  if (!session.id) {
    // logout
    if (!exists) {
      return NextResponse.redirect(new URL('/', request.url));
    }  
  } else {
    // login
    if (exists) {
      return NextResponse.redirect(new URL('/products', request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}