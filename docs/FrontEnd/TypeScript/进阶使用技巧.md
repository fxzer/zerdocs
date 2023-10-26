## 松散类型自动推推导
```ts
//1.
type Size = "sm" | "xs"

interface IconProps {
  size:Size // size 可以推导为 "sm" | "xs"
}

// 2.
type Size = "sm" | "xs" | string

interface IconProps {
  size:Size // size 可以推导为 "sm" | "xs" | string ,但模版中使用失去类型提示
}

//3.
type Size = "sm" | "xs" | Omit<string,"sm" | "xs">

interface IconProps {
  size:Size // size 可以推导为 "sm" | "xs" | string ,保留模版类型提示
}

//4.封装为 type
type Size = LooseAutoComplete<"sm" | "xs">
type LooseAutoComplete<T extends string> = T | Omit<string, T>
interface IconProps {
  size:Size // size 可以推导为 "sm" | "xs" | string ,保留模版类型提示
}
```