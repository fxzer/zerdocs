#!/usr/bin/env sh

set -e

node ./scripts/getSidebar.js

git add .

git commit -m '📖 更新文章'

git push 

# vercel --prod

cd -
