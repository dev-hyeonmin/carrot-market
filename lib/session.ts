import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface Session {
  id?: number;
}

export default function getSession() {
  return getIronSession<Session>(cookies(), {
    cookieName: 'carrot',
    password: process.env.COOKIE_PASSWORD!
  });
}