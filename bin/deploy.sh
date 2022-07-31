#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# remove temp directory
rm -rf __temp

# 生成静态文件
docit build

# 创建临时目录
mkdir -p __temp

cp -R docs-dist/ __temp

cd __temp

git init
git add .
git commit -m 'deploy'
git push -f https://github.com/lebifeng/blog.git  master:gh-pages

cd ..
rm -rf __temp