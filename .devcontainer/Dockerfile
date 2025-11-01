FROM node:24-bookworm-slim

# pnpm のインストール
RUN npm install -g pnpm@10.19.0
# alias
RUN echo 'alias pn="pnpm"' >> /home/node/.bashrc
RUN echo 'alias pnx="pnpm exec"' >> /home/node/.bashrc

# コンテナを即時終了させない
CMD ["sleep", "infinity"]
