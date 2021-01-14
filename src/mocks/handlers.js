import { graphql } from 'msw';

import { QUERY_CURRENCY } from '../screens/Interesting/constants';
import { MOCK_CURRENCIES } from './data';

const endpoint = graphql.link('https://countries-274616.ew.r.appspot.com');

export const handlers = [
  endpoint.query(QUERY_CURRENCY, (_, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.data(MOCK_CURRENCIES)
    );
  }),
  endpoint.query('GetSingleUser', (req, res, ctx) => {
    const { id } = req.variables;
  
    return res(
      ctx.data({
        user: {
          id,
          firstName: 'John',
          lastName: 'Maverick',
        },
      }),
    )
  })
];
