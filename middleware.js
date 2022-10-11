import { NextURL } from "next/dist/server/web/next-url";
import { useSelector } from "react-redux";
import { NextResponse } from 'next/server'


export async function middleware(req) {
  // if (req.nextUrl.pathname.startsWith('/api') && !req.nextUrl.pathname.startsWith('/api/auth')) return NextResponse.next()
  if (req.nextUrl.pathname.startsWith('/api')) {
    let cookie = req.cookies.get('token')
    if (!cookie) return NextResponse.rewrite(new URL('/products', req.url))
    console.log(cookie)
  }

}

