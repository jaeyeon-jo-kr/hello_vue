FROM mhart/alpine-node:latest
WORKDIR /hello_vue
EXPOSE 5173:5173
RUN apk --no-cache add curl
# RUN apk --no-cache add node
RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; 
RUN chmod +x /bin/pnpm;
COPY index.html pnpm-lock.yaml *.ts *.json ./
COPY src ./
COPY e2e ./
RUN pnpm install
RUN pnpm build
