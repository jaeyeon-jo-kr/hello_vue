FROM baseImage
RUN pnpm install
RUN pnpm build
COPY ./dist ./dist