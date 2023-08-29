import { json, type RequestHandler } from '@sveltejs/kit';

// Currently, this section will throw errors
import { getMeta } from '@bilibili-dl/core';
import { getBtvID } from '@bilibili-dl/util';

import Validator from 'fastest-validator';


export const GET = ( async ({ url, request }) => {
  console.log(request.body, url.searchParams)
  const v = new Validator();
  const validationRequest = v.compile({
      url: {
          type: 'url',
      },
  })(request.body || url.searchParams);

  return json({});
}) satisfies RequestHandler;
