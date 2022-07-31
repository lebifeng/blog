#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

cd docs-dist

git init
git add -A
git commit -m 'deploy'

# playground 部署分支
git push -f https://github.com/lebifeng/blog.git  master:gh-pages