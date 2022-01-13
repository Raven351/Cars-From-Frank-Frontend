## Cars From Frank - Frontend

This project has been deployed to Netlify. You can access this project by going to website - https://cars-from-frank.netlify.app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running locally

This project requires working backend with API before launching. You can find it [here](https://github.com/Raven351/Cars-From-Frank).

1. Git clone this repo. 
2. Inside file `next.config.js` under root directory - in node `env` provide API_DOMAIN with your local address and port under which backend is running.
3. Inside file `.env`add `NODE_TLS_REJECT_UNAUTHORIZED = 0` - otherwise app won't be able to connect with service with self signed certificate.
4. Execute command `npm run dev`. Project should start on localhost:3000
