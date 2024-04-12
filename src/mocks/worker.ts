import {http, HttpResponse} from 'msw';
import {setupWorker} from 'msw/browser';

export const worker = setupWorker(
  http.get('/zoom', () => HttpResponse.json({id: 'abc-123'})),
  http.get('https://api-stg.vocdoni.net/v2/accounts/:id', ({params}) => {
    const id = params.id as string;
    return HttpResponse.json({
      address: id,
      nonce: 0,
      balance: 9999,
      electionIndex: 0,
      infoURL:
        'ipfs://bafybeif5mbhhwuju2pyd54bxhn3tdsj6m5cukx6f5xvchqfh2wvzkpbjpy',
      metadata: {
        version: '1.0',
        languages: ['en'],
        name: {default: 'Account name'},
        description: {default: 'Description of the account'},
        newsFeed: {default: ''},
        media: {logo: 'https://logo.io'},
        meta: {},
      },
      sik: 'd5f382daca25f43ca46f629e6fa7b0a448f1c69c48fcb2031feee0bf439d502c',
    });
  })
);
