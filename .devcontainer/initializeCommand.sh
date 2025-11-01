# .envの作成
if [ ! -f .devcontainer/.env ]; then
  cp .devcontainer/.env.example .devcontainer/.env
fi
