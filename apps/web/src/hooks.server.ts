import type { Handle } from '@sveltejs/kit';


export const handle = ( async ({ resolve, event }) => {
  // Ref: https://dev.to/khromov/configure-cors-in-sveltekit-to-make-fetch-requests-to-your-api-routes-from-a-different-host-241k

  if (event.url.pathname.startsWith('/api')) {
    if(event.request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        }
      });
    }

  }

  const response = await resolve(event);
  if (event.url.pathname.startsWith('/api')) {
    response.headers.append('Access-Control-Allow-Origin', `*`);
  }
  return response;
}) satisfies Handle;
