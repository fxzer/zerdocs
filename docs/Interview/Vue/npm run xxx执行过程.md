

# npm run xxx执行过程

## vue cli 项目

1. npm run 会先把 `node_modules/.bin` 加入到 `PATH` 环境变量

2. 找到项目根目录 `package.json` 文件中 `  scripts` 对应的脚本并执行对应命令
3. 相当于执行 `vue-cli-service serve` ，并去找到`npm i (npm i @vue/cli-service)`所生成的软连接 `./bin/vue-cli-service`
4. 接着去执行软连接指向的 `node_modules/@vue/cli-service/bin/vue-cli-service.js` （package-lock.json记录了映射关系）
   1. `vue-cli-service.js`主要解析和比对 node 版本，不匹配则报错
   2. 获取和解析命令行参数，启动服务执行命令

## vite项目

1. npm run 会先把 `node_modules/.bin` 加入到 `PATH` 环境变量
2. 找到项目根目录 `package.json` 文件中 `  scripts` 对应的脚本并执行对应命令
3. 去找`.bin/vite` 软链接，进而找到 `node_modules/.pnpm/vite@4.1.1/node_modules/vite/bin/vite.js`执行