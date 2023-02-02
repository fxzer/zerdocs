#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git init 

git add -A

git commit -m '🎉deploy gh-pages🎉'

git push -f git@github.com:fxzer/zerdocs.git master:gh-pages

cd -

# rm -rf dist