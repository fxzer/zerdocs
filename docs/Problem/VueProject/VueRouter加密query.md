# VueRouter加密query参数

```js
import UTF8 from 'crypto-js/enc-utf8' // npm i crypto-js
import Base64 from 'crypto-js/enc-base64'
const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
  stringifyQuery,
  parseQuery,
})

const salt = Math.random().toString(16).slice(2, 8)
function encFn(result) {
  result = salt + result
  const words = Base64.stringify(UTF8.parse(result))
  return words
}
function decFn(word) {
  const res = UTF8.stringify(Base64.parse(word)).slice(6)
  return res
}

export function stringifyQuery(obj) {
  if (!obj || Object.keys(obj).length === 0)
    return ''
  return `?${encFn(JSON.stringify(obj))}`
}
export function parseQuery(query) {
  query = query.trim().replace(/^([?#&])/, '')
  if (!query)
    return {}
  try {
    const res = JSON.parse(decFn(query))
    return res
  }
  catch (e) {
    const res = {}
    query.split('&').forEach((param) => {
      const parts = param.replace(/\+/g, ' ').split('=')
      const key = parts.shift()
      const val = parts.length > 0 ? parts.join('=') : null
      if (key !== undefined) {
        if (res[key] === undefined)
          res[key] = val
        else if (Array.isArray(res[key]))
          (res[key]).push(val)
        else res[key] = [res[key], val]
      }
    })
    return res
  }
}
```
