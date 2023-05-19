import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  console.log({ req: req.nextUrl });

  if (req.nextUrl.pathname.startsWith('/api/entries/')) {
    const id = req.nextUrl.pathname.replace('/api/entries/','');
    //console.log(id)
    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    if(!checkMongoIDRegExp.test(id)){
      const url = req.nextUrl.clone(id);
      url.pathname =  '/api/bad-request';

      return NextResponse.rewrite(url)
     
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  //   matcher: '/about/:path*',
  matcher: 
  [
  "/api/:path", 
  "/api/entries/:path"
  ],
};
