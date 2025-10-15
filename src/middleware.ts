import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (!req.nextauth.token || !req.nextauth.token.role) {
      // Anonymous user
    }
    if (req.nextauth.token.role === "USER") {
      // Default user
    }
    if (req.nextauth.token.role === "ADMIN") {
      // Administrator
    }
  }
);

export const config = {
  matcher: ["/secure-page", "/admin-page"],
};
