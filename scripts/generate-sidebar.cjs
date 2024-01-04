const fs = require('node:fs')
const path = require('node:path')

const docsPath = path.resolve(__dirname, '../docs')
const sidebarPath = path.resolve(__dirname, '../docs/.vitepress/sidebar/index.ts')

// 判断是否是文章文件
function isArticleDir(dir) {
  const isExclude = /^(public|index.md|.*\.ts|demo.*|\..*)$/.test(dir)
  return !isExclude
}

function splitPath(path) {
  return path.split('/').filter(item => item !== '')
}

function deepGetFile(dir) {
  let backList = []
  const list = fs.readdirSync(dir).filter(isArticleDir)

  for (const index in list) {
    let item = path.resolve(dir, list[index])
    if (fs.statSync(item).isDirectory()) {
      backList = backList.concat(deepGetFile(item))
    }
    else {
      // 输出相对路径
      item = item.replace(docsPath, '').replace(/\\/g, '/')
      backList.push(item)
    }
  }
  return backList
}

// 生成侧边栏
function deepGenerateSidebar(arr) {
  // 递归按照最后一级目录生成侧边栏
  const sidebar = {}
  arr.forEach((item) => {
    const [dir] = splitPath(item)
    if (!sidebar[dir])
      sidebar[dir] = []

    sidebar[dir].push(item)
  })
  return sidebar
}

function generateSidebarList(sidebar) {
  const sidebarList = []
  // 按最后一级目录分组
  for (const key in sidebar) {
    let pathPice = sidebar[key].map(item => splitPath(item))
    // 如果pathPice[pathPice.length-1]相同,则合并
    pathPice = pathPice.reduce((pre, cur) => {
      const dirStr = cur.slice(0, -1).join('/') // /problem/vueproject/
      const text = cur[cur.length - 1].replace(/\.md$/, '')
      const link = `/${cur.join('/').replace(/\.md$/, '')}`
      pre[dirStr] = pre[dirStr] ? [...pre[dirStr], { text, link }] : [{ text, link }]
      return pre
    }, {})
    sidebarList.push(pathPice)
  }
  return sidebarList
}

function generateSidebarObj(topDirArr, sidebarList) {
  const sidebarObj = {}
  topDirArr.forEach((item) => {
    if (!sidebarObj[`/${item}/`])
      sidebarObj[`/${item}/`] = []
  })

  const sidebar = sidebarList.reduce((pre, cur) => Object.assign(pre, cur), {})
  Object.entries(sidebar).forEach(([key, items]) => {
    const keyArr = splitPath(key)
    const text = keyArr[keyArr.length - 1]
    if (sidebarObj[`/${keyArr[0]}/`]) {
      sidebarObj[`/${keyArr[0]}/`].push({
        text,
        collapsible: true,
        collapsed: false,
        items,
      })
    }
    else {
      sidebarObj[`/${keyArr[0]}/`] = [{
        text,
        collapsible: true,
        collapsed: false,
        items,
      }]
    }
  })

  return sidebarObj
}

function writeToFile(sidebarObj) {
  const sidebarStr = JSON.stringify(sidebarObj, null, 2)
  // 检查目录是否存在，如果不存在则创建
  if (!fs.existsSync(path.dirname(sidebarPath)))
    fs.mkdirSync(path.dirname(sidebarPath), { recursive: true })

  fs.writeFile(sidebarPath, `export default ${sidebarStr}`, (err) => {
    console.log('[ err ]-106', err)
  })
}

// 生成一级分组
const topDirArr = fs.readdirSync(docsPath).filter(isArticleDir)
const sidebars = deepGetFile(docsPath) // 读取 docs 目录下的所有文件夹
const sidebar = deepGenerateSidebar(sidebars)
const sidebarList = generateSidebarList(sidebar)
const sidebarObj = generateSidebarObj(topDirArr, sidebarList)
writeToFile(sidebarObj)
