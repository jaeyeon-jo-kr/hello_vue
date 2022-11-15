FROM mhart/alpine-node:latest
WORKDIR /hello_vue
EXPOSE 5173:5173
EXPOSE 6006:6006
RUN apk --no-cache add curl
RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; 
RUN chmod +x /bin/pnpm;
COPY index.html pnpm-lock.yaml *.ts *.json ./
COPY src ./src
COPY e2e ./e2e
RUN pnpm install
RUN pnpm build
