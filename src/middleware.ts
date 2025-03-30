import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/projects") {
        return NextResponse.redirect(new URL("/projects/applications", request.url));
    }
}

export const config = {
    matcher: ["/projects"],
};
