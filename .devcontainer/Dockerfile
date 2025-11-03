FROM node:24-bookworm-slim

# pnpm のインストール
RUN npm i -g pnpm@10.19.0
# alias
RUN echo 'alias pn="pnpm"' >> /home/node/.bashrc
RUN echo 'pnx() { if [ "$1" = "-d" ]; then shift; pnpm dlx "$@"; else pnpm exec "$@"; fi; }' >> /home/node/.bashrc

# コンテナを即時終了させない
CMD ["sleep", "infinity"]
