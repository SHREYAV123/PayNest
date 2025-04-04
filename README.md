
A dummy digital wallet app for learning fullstack deployment.
#Nextjs, #Prisma, #PostgreSQL, #Fullstack


## 🔐 Demo Login

Use the following accounts to try the app:

- **Alice**
  - Phone: `1111111111`
  - Password: `alice`
- **Bob**
  - Phone: `2222222222`
  - Password: `bob`


- Clone the repo

```jsx
git clone https://github.com/SHREYAV123/PayNest.git
```

- npm install
- Run postgres either locally or on the cloud (neon.tech)

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)
