FROM node:21-bullseye-slim

# create destination directory
WORKDIR /app

# expose image's port X to local system's X port
EXPOSE 3000:3000

ENV NEXT_PUBLIC_ENV local
ENV PORT 3000

# copy package.json to destination directory
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY next.config.mjs .
COPY tailwind.config.ts .
COPY postcss.config.mjs .
COPY components.json .

RUN npm install

# copy all files from local system to destination directory
# COPY . .

CMD [ "npm", "run", "dev" ]