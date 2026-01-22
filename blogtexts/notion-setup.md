# 如何在 BlackEagleAI 浏览器插件中配置 Notion，实现一键保存内容

BlackEagleAI 支持将 AI 生成或整理好的文章，一键保存到你的 Notion 中，作为长期知识库或写作素材。  
本文将分两部分说明：

1. **如何在 Notion 中获取 Token 并完成授权**
2. **如何在 BlackEagleAI 插件中启用 Notion 并使用**

整个过程只需要几分钟。

---

## 一、Notion 配置：获取 Token 并授权页面

### 1. 创建 Notion 集成并获取 Token

首先，你需要在 Notion 官方后台创建一个集成（Integration），用于生成访问令牌。

**操作步骤：**

1. 打开 Notion 集成管理页面  
   https://www.notion.so/my-integrations

2. 点击 **New integration**

3. 填写基础信息：
   - **Name**：例如 `BlackEagleAI`
   - **Associated workspace**：选择你常用的 Notion 工作区

4. 权限设置（建议）：
   - `Read content`
   - `Insert content`
   - `Update content`

5. 创建完成后，你会看到一个 **Internal Integration Token**

这个 Token 就是后续需要在 BlackEagleAI 中配置的 **Notion Token**。

> ⚠️ 请妥善保管该 Token，不要公开或分享给他人。

---

### 2. 在 Notion 中创建用于存储内容的页面

BlackEagleAI 会将内容保存到你授权的 Notion 页面中，因此需要提前准备一个页面。

**推荐做法：**

1. 在 Notion 中新建一个普通页面
2. 页面标题建议命名为：  
   **`BlackEagleAI`**
3. 页面类型选择空白页面即可（无需数据库）

---

### 3. 将页面授权给刚刚创建的集成

这是非常关键的一步，否则插件将无法向 Notion 写入内容。

**操作步骤：**

1. 打开刚创建的 **BlackEagleAI** 页面
2. 点击页面右上角的 **“···”**
3. 选择 **Add connections**
4. 选择你刚创建的集成（例如 `BlackEagleAI`）

完成后，该 Token 就拥有了向该页面写入内容的权限。

---

## 二、BlackEagleAI 插件配置与使用

### 1. 在 BlackEagleAI 中保存 Notion Token

完成 Notion 端配置后，回到 BlackEagleAI 插件：

1. 打开浏览器中的 **BlackEagleAI 插件 Options**
2. 进入 **更多配置**
3. 找到 **Notion 配置项**
4. 将刚才获取的 **Notion Token** 粘贴并保存

至此，BlackEagleAI 已成功连接你的 Notion。

---

### 2. 将对话中的文章保存到 Notion

配置完成后，你就可以在 BlackEagleAI 中直接使用 Notion 导出功能。

你可以：

- 让 AI 根据网页生成或整理文章
- 在对话中对内容进行总结、扩写或润色
- 直接要求 BlackEagleAI：  
  **“把这篇文章保存到我的 Notion”**

插件会自动将内容写入你已授权的 **BlackEagleAI 页面** 中，无需手动复制粘贴。

---

## 总结

通过 BlackEagleAI 与 Notion 的结合，你可以：

- 将 AI 生成内容自动沉淀到 Notion
- 构建长期可复用的个人知识库
- 明显减少整理、归档和重复操作的成本

如果你经常进行 AI 写作、内容采编或资料收集，  
**BlackEagleAI + Notion 是一个高效且可靠的工作流组合。**
