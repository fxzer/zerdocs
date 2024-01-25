#!/usr/bin/env sh

set -e
rm -rf  dist
pnpm build

cd dist

git init 

git add -A

git commit -m '🎉deploy gh-pages🎉'

git push -f git@gitee.com:fxzer/zerdocs.git main:gh-pages
# git push -f git@github.com:fxzer/zerdocs.git main:gh-pages

cd ..


