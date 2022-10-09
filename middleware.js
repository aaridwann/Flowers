import { NextURL } from "next/dist/server/web/next-url";
import { useSelector } from "react-redux";


export function middleware(req, res) {
  // const user = useSelector(state => state.user)
  return console.log(req);
}

export const config = {
  matcher: '/'
}