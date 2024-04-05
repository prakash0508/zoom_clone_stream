import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/","/about" , "/new-meeting" , "/new-meeting/:id"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
