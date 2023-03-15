import { verify } from "jsonwebtoken"
import { NextResponse } from "next/server"

export default function middleware(req) {
  const accessJwt = sessionStorage.getItem("accessJtt")

  const url = req.url

  if (url.includes("/dashboard")) {
    if (jwt === undefined) {
      return NextResponse.redirect("/login")
    }
    try {
      verify(jwt, process.env.NEXT_PUBLIC_JWT_ACCESS_KEY)
      return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect("/login")
    }
  }

  return NextResponse.next()
}
