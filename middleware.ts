import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';


const isPublicRoute = createRouteMatcher(['/', '/products(.*)', '/about']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
	const { userId } = await auth()
const isAdminUser = userId === process.env.ADMIN_USER_ID;

if (isAdminRoute(req) && !isAdminUser) {
    return Response.redirect(new URL('/', req.url));
  }

  if (!isPublicRoute(req))
	await auth.protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};