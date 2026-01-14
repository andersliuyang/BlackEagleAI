(function () {
  function detectLang() {
    try {
      const saved = localStorage.getItem("beLang");
      if (saved === "en" || saved === "zh") return saved;
    } catch {}
    const nav = navigator.language || navigator.userLanguage || "en";
    return nav.toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  const dict = {
    zh: {
      "page-title": "BlackEagle — 你的本地 AI 上网助手",
      "meta-description": "BlackEagle 浏览器插件：免费、纯本地、无需服务器、隐私优先。让 AI 像人一样使用浏览器，理解网页并自动完成操作。",
      "nav-features": "特色",
      "nav-scenes": "场景",
      "nav-download": "下载",
      "hero-title": "你的本地 AI 上网助手",
      "hero-sub": "免费 · 纯本地 · 无需服务器 · 隐私优先",
      "hero-desc": "让 AI 像人一样使用浏览器，理解网页、执行操作。安装即拥有一台个人化的 AI 浏览器。",
      "cta-chrome": "下载 Chrome 版",
      "cta-edge": "下载 Edge 版",
      "badge-1": "Local-first",
      "badge-2": "多模型接入",
      "badge-3": "多模态理解",
      "features-title": "核心特色",
      "features-local-title": "纯本地运行",
      "features-local-desc": "网页内容与操作不经第三方中转，数据只在你手里。",
      "features-free-title": "免费，开箱即用",
      "features-free-desc": "安装即可使用基础能力，验证真实场景与价值。",
      "features-noserver-title": "无需服务器",
      "features-noserver-desc": "不搭后端、不写爬虫，AI 直接在浏览器完成任务。",
      "features-model-title": "自配模型",
      "features-model-desc": "接入你自己的 LLM Endpoint + API Key，灵活低成本。",
      "features-ops-title": "理解与操作",
      "features-ops-desc": "读取网页与选中内容，自动点击、填写、跳转，多步骤流程一站完成。",
      "features-multimodal-title": "多模态支持",
      "features-multimodal-desc": "视频、图片、文档内容自动理解与提炼，生成结构化结果。",
      "scenes-title": "适用场景",
      "scenes-research-title": "市场调研",
      "scenes-research-desc": "自动打开网站并提取关键信息，竞品价格、功能、公告一键汇总。",
      "scenes-content-title": "内容创作",
      "scenes-content-desc": "读取参考文章生成原创，多网页合成深度稿，视频图文自动拆解。",
      "scenes-commerce-title": "电商与运营",
      "scenes-commerce-desc": "分析评论、对比竞品、自动发布；你能点的网页，AI 都能替你点。",
      "download-title": "下载与安装",
      "download-desc": "BlackEagle 支持 Chrome 与 Edge。当前版本提供 GitHub Releases 下载。",
      "chrome-setup-title": "Chrome 安装：",
      "chrome-step1": "打开 chrome://extensions 并开启「开发者模式」。",
      "chrome-step2": "点击「加载已解压的扩展程序」，选择插件解压后的文件夹。",
      "edge-setup-title": "Edge 安装：",
      "edge-step1": "打开 edge://extensions 并开启「开发人员模式」。",
      "edge-step2": "点击「加载已解压的扩展」，选择插件解压后的文件夹。",
      tips: "提示：建议优先使用你自己的 LLM Endpoint + API Key，获得更快、更安全、更个性化的体验。",
      toggle: "EN",
      "download-cta-chrome": "下载 Chrome 版",
      "download-cta-edge": "下载 Edge 版",
      "footer-feedback": "GitHub 反馈",
    },
    en: {
      "page-title": "BlackEagle — Your Local AI Browser Assistant",
      "meta-description": "BlackEagle extension: Free, local-first, no server, privacy-first. Let AI browse like a human — understand pages and act.",
      "nav-features": "Features",
      "nav-scenes": "Use Cases",
      "nav-download": "Download",
      "hero-title": "Your Local AI Browser Assistant",
      "hero-sub": "Free · Local-first · No server · Privacy-first",
      "hero-desc": "Let AI browse like a human — understand pages and take actions. Install to get your personal AI browser.",
      "cta-chrome": "Download for Chrome",
      "cta-edge": "Download for Edge",
      "badge-1": "Local-first",
      "badge-2": "Multi-model",
      "badge-3": "Multimodal Understanding",
      "features-title": "Key Features",
      "features-local-title": "Local-only Execution",
      "features-local-desc": "No third-party relay for content or actions. Your data stays with you.",
      "features-free-title": "Free, Ready to Use",
      "features-free-desc": "Install and start with core capabilities to validate real value.",
      "features-noserver-title": "No Server Needed",
      "features-noserver-desc": "No backend, no scraping code — AI completes tasks directly in the browser.",
      "features-model-title": "Bring Your Own Model",
      "features-model-desc": "Plug in your LLM Endpoint + API Key for flexible, low-cost control.",
      "features-ops-title": "Read & Operate",
      "features-ops-desc": "Read pages and selections, auto click/fill/navigate — complete multi-step flows.",
      "features-multimodal-title": "Multimodal Support",
      "features-multimodal-desc": "Understand videos, images, and documents; produce structured results.",
      "scenes-title": "Use Cases",
      "scenes-research-title": "Market Research",
      "scenes-research-desc": "Open sites and extract key info; summarize prices, features, and updates.",
      "scenes-content-title": "Content Creation",
      "scenes-content-desc": "Turn references into originals; merge multiple pages into deep articles; parse video/image posts.",
      "scenes-commerce-title": "E‑commerce & Ops",
      "scenes-commerce-desc": "Analyze reviews, compare competitors, auto publish. If you can click it, AI can too.",
      "download-title": "Download & Install",
      "download-desc": "Supports Chrome and Edge. Download from GitHub Releases.",
      "chrome-setup-title": "Chrome Setup:",
      "chrome-step1": 'Open chrome://extensions and enable "Developer mode".',
      "chrome-step2": 'Click "Load unpacked" and choose the extracted plugin folder.',
      "edge-setup-title": "Edge Setup:",
      "edge-step1": 'Open edge://extensions and enable "Developer mode".',
      "edge-step2": 'Click "Load unpacked" and choose the extracted plugin folder.',
      tips: "Tip: Use your own LLM Endpoint + API Key for faster, safer, more personalized experience.",
      toggle: "中文",
      "download-cta-chrome": "Download for Chrome",
      "download-cta-edge": "Download for Edge",
      "footer-feedback": "GitHub Feedback",
    },
  };

  function applyLang(lang) {
    const t = dict[lang] || dict.en;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = t["page-title"];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t["meta-description"]);
    [
      "nav-features",
      "nav-scenes",
      "nav-download",
      "hero-title",
      "hero-sub",
      "hero-desc",
      "cta-chrome",
      "cta-edge",
      "download-cta-chrome",
      "download-cta-edge",
      "badge-1",
      "badge-2",
      "badge-3",
      "features-title",
      "features-local-title",
      "features-local-desc",
      "features-free-title",
      "features-free-desc",
      "features-noserver-title",
      "features-noserver-desc",
      "features-model-title",
      "features-model-desc",
      "features-ops-title",
      "features-ops-desc",
      "features-multimodal-title",
      "features-multimodal-desc",
      "scenes-title",
      "scenes-research-title",
      "scenes-research-desc",
      "scenes-content-title",
      "scenes-content-desc",
      "scenes-commerce-title",
      "scenes-commerce-desc",
      "download-title",
      "download-desc",
      "chrome-setup-title",
      "chrome-step1",
      "chrome-step2",
      "edge-setup-title",
      "edge-step1",
      "edge-step2",
      "tips",
      "footer-feedback",
    ].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && t[id]) el.textContent = t[id];
    });
    var toggle = document.getElementById("lang-toggle");
    if (toggle) toggle.textContent = t["toggle"];
  }

  function setLang(lang) {
    try {
      localStorage.setItem("beLang", lang);
    } catch {}
    applyLang(lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var current = detectLang();
    applyLang(current);
    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        current = current === "zh" ? "en" : "zh";
        setLang(current);
      });
    }
  });
})();
