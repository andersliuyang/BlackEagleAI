<p align="center">
  <img src="assets/logo.png" alt="BlackEagle Logo" width="50%" />
</p>

[BlackEagle Homepage — Visit for demo videos 🎥](https://blackeagle.cozyai.chat/)

> The homepage contains many demo videos and quick-start examples demonstrating features and workflows. We strongly recommend watching them to learn how to use BlackEagle.

# BlackEagle 🦅

**Your Personal AI Browser for Web Automation & Knowledge Work**

BlackEagle is a browser extension that turns your browser into **Your Personal AI Browser**.

It can read webpages, interact with websites like a human, analyze uploaded documents, run scheduled tasks, and generate exportable documents — all **without relying on any backend server**.

You bring your own AI endpoint and API key.  
BlackEagle runs entirely in your browser.

---

## ✨ Key Features

### 🔍 Read & Understand Web Content

- Analyze full webpages or selected content
- Extract structured information from complex layouts
- Understand text, images, and embedded media

### 🧠 Human-like Browser Interaction

- Open pages, click elements, fill forms
- Operate dynamic websites
- Execute multi-step workflows via natural language instructions

### 📄 Upload & Analyze Documents

- Upload documents (PDF, text files, etc.)
- Automatically summarize and extract insights
- Combine document knowledge with live web context

### 📝 Generate & Export Documents

- Turn AI conversations into structured documents
- Export results for research, reports, or internal notes
- Suitable for analysts, writers, and consultants

### ⏱️ Task Scheduling & Continuous Monitoring

- Create scheduled or rule-based tasks
- Continuously monitor webpages for changes
- Automatically analyze updates and generate documents
- Let AI work in the background

---

## 🧩 Why BlackEagle?

### Local-Only by Design

- No backend servers
- No account required
- No tracking or analytics
- No vendor lock-in

All webpage content stays in your browser.  
AI requests are sent **directly** to your configured endpoint.

### Bring Your Own AI

BlackEagle works with any LLM provider that exposes a compatible API endpoint.

Choose models based on:

- Cost
- Accuracy
- Speed
- Task requirements

---

## 🎯 Who Is This For?

- Developers & engineers
- Researchers & analysts
- Knowledge workers
- Automation enthusiasts
- Anyone who wants AI to _do work_, not just chat

---

## 🚀 Getting Started

1. Download the extension from **GitHub Releases**
2. Install the extension in your browser
3. Configure your AI endpoint and API key
4. Open any webpage and start using BlackEagle

No signup. No server setup.

---

## 🔐 Privacy & Security

BlackEagle operates entirely on the client side.

- Web content is processed locally

---

## Browser extension installation (Chrome / Edge)

BlackEagle currently supports Chrome and Edge only. Firefox is not supported.

Simple install (developer mode):

- Build the extension (from the extension directory): `npm run build:blackeagle`.
- Open the extensions page in Chrome or Edge (`chrome://extensions/` or `edge://extensions/`).
- Enable "Developer mode" and click "Load unpacked".
- Select the build output folder that contains `manifest.json`.

## Large model configuration types

BlackEagle supports multiple categories of large models and will automatically select the most appropriate type for each feature. We recommend configuring endpoints (and API keys) for the model types you plan to use.

- **Chat / LLM**: General-purpose conversational models used for webpage understanding, summarization, reasoning, and text generation.
- **Document / File Understanding**: Models specialized in parsing long or structured documents (PDFs, long web pages, and uploaded files) and extracting structured information.
- **Image Generation**: Text-to-image models used to generate illustrations, cover images, charts, and other creative assets from text or webpage content.
- **Vision / Multimodal**: Models capable of understanding images or video frames and performing multimodal analysis (e.g., extracting visual information, describing images, or combining image+text reasoning).

The extension will route tasks to the appropriate model type (for example, document parsing uses Document models, whereas webpage understanding typically uses Chat/LLM models). For the best experience, configure endpoints for all applicable categories. BlackEagle expects endpoints compatible with the OpenAI-style SDK/interface; models and providers following that convention are supported and will integrate smoothly.

## The extension should load and appear in the browser toolbar.
