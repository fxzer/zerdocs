#!/usr/bin/env sh

set -e

yarn run build

cd dist

git init 

git add -A

git commit -m '🎉deploy gh-pages🎉'

git push -f git@gitee.com:fxzer/zerdocs.git master:gh-pages
# git push -f git@github.com:fxzer/zerdocs.git master:gh-pages

cd ..

rm -rf  dist

cd -
