import { auth } from '@auth/auth'
import { defineMiddleware } from 'astro:middleware'

const PROTECTED_ROUTES = ['/dashboard']

export const onRequest = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api.getSession({
    headers: context.request.headers,
  })

  // Set user and session in locals
  context.locals.user = isAuthed ? isAuthed.user : null
  context.locals.session = isAuthed ? isAuthed.session : null

  // Redirect to login if not authenticated and trying to access protected routes
  if (
    !isAuthed &&
    PROTECTED_ROUTES.some((route) => context.url.pathname.startsWith(route))
  ) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: `/auth/login?redirect=${encodeURIComponent(context.url.pathname)}`,
      },
    })
  }

  // Otherwise, continue to the next middleware or route handler
  return next()
})
