export const prerender = false

import { auth } from '@auth/auth'
import type { APIRoute } from 'astro'

export const ALL: APIRoute = async (ctx) => {
  return auth.handler(ctx.request)
}
