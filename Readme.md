<div align="center">
  <img src="https://files.catbox.moe/jio4vi.jpg" width="300"/>

  <h1 align="center">
    <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=40&pause=1500&color=00FFFF&center=true&width=600&lines=INFINITY-MD" alt="INFINITY-MD" />
  </h1>

  <h3 align="center" style="margin-top:-20px;">
    <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&pause=1000&color=FF6347&center=true&width=400&lines=POWERED+BY+SIRIUS" alt="Powered by SIRIUS" />
  </h3>

  <p align="center" style="margin-top:-10px;">
    <img src="https://readme-typing-svg.demolab.com?font=Space+Mono&weight=500&size=18&pause=1000&color=0AFFEF&center=true&width=380&lines=THE+FUTURE+IS+NOW." alt="The Future is Now." />
  </p>

  <br/>

  <a href="https://infinity-md-session.onrender.com">
    <img src="https://img.shields.io/badge/➕%20GET%20SESSION%20ID-4B4BFF?style=for-the-badge&logo=whatsapp&logoColor=white" />
  </a>
  
  <br />
  <hr width="60%" />
  <br />

  <a href="https://render.com/deploy">
    <img src="https://img.shields.io/badge/🚀%20DEPLOY%20TO%20RENDER-3D348B?style=for-the-badge&logo=render&logoColor=white" />
  </a>
</div>

---

## 🧠 Features

> Unlock the power of automation with cutting-edge capabilities:

- 🌐 WhatsApp Web Multi-Device API support  
- ⚙️ Modern, scalable command handler  
- 🧰 Tools: Downloader, Admin Controls, Media Tools, Filters  
- 💬 AI Integration, Stickers, Games, NSFW (optional)  

---

## ⚙️ Deployment Guide

1. 🍴 Fork this repository into your own GitHub account  
2. 🔐 Generate a session with the **GET SESSION ID** button above  
3. 🛰️ Deploy to Render by clicking the button and adding your `SESSION_ID` environment variable  

> ✨ Once done, your bot will start automatically!

---

## 📂 Auto Deployment (CI/CD)

GitHub Actions is configured to run and restart the bot every 6 hours:

```yaml
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start
```


> 💡 Built with precision and passion — SIRIUS

> THE FUTUR IS NOW ♾️


