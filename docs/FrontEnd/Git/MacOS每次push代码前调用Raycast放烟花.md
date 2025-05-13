要实现每次 `git push` 后自动触发 Raycast 的 Confetti 烟花效果，可以通过 **全局 Git Hook** 配置一个 `pre-push` 钩子脚本。以下是具体操作步骤：

---

### **一、创建全局 Git Hook 目录**
1. **新建全局钩子目录**  
   在用户根目录下创建存放全局钩子的文件夹（例如 `~/.git-hooks`）：
   ```bash
   mkdir -p ~/.git-hooks/hooks
   ```
   

2. **配置 Git 全局钩子路径**  
   让 Git 识别该目录作为全局钩子的默认路径：
   ```bash
   git config --global core.hooksPath ~/.git-hooks/hooks
   ```
   

---

### **二、编写 `pre-push` 钩子脚本**
1. **创建 `pre-push` 脚本文件**  
   在 `~/.git-hooks/hooks` 目录下新建 `pre-push` 文件：
   ```bash
   touch ~/.git-hooks/hooks/pre-push
   ```

2. **添加执行命令**  
   编辑文件内容，使其在 `push` 完成后触发 Raycast Confetti：
   ```bash
   #!/bin/sh
   # 触发 Raycast 的 Confetti 烟花效果
   open "raycast://extensions/raycast/raycast/confetti"
   ```
   

3. **赋予脚本可执行权限**  
   ```bash
   chmod +x ~/.git-hooks/hooks/pre-push
   ```
   

---


### **三、验证与测试**

1. **检查全局配置**  
   确保 `core.hooksPath` 已正确指向全局钩子目录：
   ```bash
   git config --global --get core.hooksPath
   # 输出应为：/Users/你的用户名/.git-hooks/hooks
   ```
2. 先手动在命令行运行下列命令，弹窗点击每次允许执行命令
```bash
open "raycast://extensions/raycast/raycast/confetti"
```
3. **测试效果**  
   执行一次 `git push`，观察是否触发 Raycast 烟花效果。若未生效，检查：
   - Raycast 是否已安装并运行。
   - 脚本权限是否已设置为可执行（`chmod +x`）。
   - 全局钩子路径配置是否正确。

---

### **四、注意事项**
1. **仅适用于 macOS**  
   Raycast 是 macOS 专属工具，需确保在 macOS 系统中使用。

2. **脚本兼容性**  
   若需跨平台支持，可在脚本中添加系统判断逻辑：
   ```bash
   if [[ "$OSTYPE" == "darwin"* ]]; then
     open "raycast://extensions/raycast/raycast/confetti"
   fi
   ```

3. **与其他钩子共存**  
   如果已有其他全局钩子，可将 `pre-push` 脚本与其他钩子（如 `pre-commit`）放在同一目录下，Git 会自动识别。

---

### **五、替代方案（可选）**
若需更复杂的触发逻辑（例如仅特定分支触发），可结合 `pre-push` 钩子并添加条件判断：
```bash
#!/bin/sh
# 仅在推送特定分支时触发（如 main/master）
current_branch=$(git branch --show-current)
if [[ "$current_branch" == "main" || "$current_branch" == "master" ]]; then
  open "raycast://extensions/raycast/raycast/confetti"
fi
```

### **日志调试法**
在钩子脚本中添加日志输出
在 `pre-push` 脚本中插入日志记录命令，将执行信息输出到文件：
```bash
#!/bin/sh
# 日志记录
echo "Git push 操作开始" >> ~/.git-hooks/hooks/pre-push.log




---

通过以上配置，每次 `git push` 成功后都会自动触发 Raycast 的烟花动画，适合作为代码推送成功的趣味反馈。
