TRIAL QA
 
 # CICD-Demo
📘 README.md – CI/CD Express.js Demo
🚀 CI/CD Pipeline Demo (Express.js + GitHub Actions + Render)

This project demonstrates a complete CI/CD pipeline using:

Express.js (backend server)

Static landing page (HTML/CSS/JS)

GitHub (source control)

GitHub Actions (CI/CD automation)

Render.com (hosting + automatic deployment)

Every push to the main branch automatically triggers:

GitHub Actions builds the project

GitHub Actions triggers a Render Deploy Hook

Render redeploys the live website

📁 Project Structure
ci-cd-demo/
│
├── public/
│   ├── index.html
│   └── styles.css
│
├── server.js
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml

🎯 Features

Simple Express.js server with API endpoint

Landing page visualizing CI/CD flow

Automatic deployment to Render after GitHub push

Secure use of GitHub Secrets

Fully Windows-compatible development

🛠 Installation (Local Development)
Requirements

Node.js (LTS)

Git

Install dependencies
npm install

Run the server locally
node server.js


Visit:

http://localhost:3000

🧪 API Endpoint
GET /api/status


Returns:

{
  "status": "success",
  "message": "CI/CD Pipeline Demo Server Running",
  "timestamp": "2025-01-01T00:00:00.000Z"
}

⚙️ CI/CD with GitHub Actions

This project includes a GitHub Actions workflow located at:

.github/workflows/deploy.yml


The workflow:

Runs whenever you push to main

Installs dependencies

Triggers a Render deploy hook

Render automatically redeploys the web service

Full Workflow
name: Deploy to Render

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout Repository
      uses: actions/checkout@v4

    - name: Setup Node
      uses: actions/setup-node@v4
      with:
        node-version: 18

    - name: Install dependencies
      run: npm install

    - name: Trigger Render Deploy
      run: curl -X POST "$RENDER_DEPLOY_HOOK"
      env:
        RENDER_DEPLOY_HOOK: ${{ secrets.RENDER_DEPLOY_HOOK }}

🌐 Deploying to Render (One-Time Setup)
1. Create Web Service

At https://render.com
:

Click New → Web Service

Connect this GitHub repo

Build Command:

npm install


Start Command:

node server.js

2. Get the Render Deploy Hook URL

Render → Your Service → Settings → Deploy Hooks
Copy the Deploy Hook URL.

🔐 Add Deploy Hook to GitHub Secrets

On GitHub:

Repo → Settings

Secrets and variables → Actions

New Repository Secret

Name:

RENDER_DEPLOY_HOOK


Paste the URL

Save

🚀 Deploy Automatically

Push any change to the main branch:

git add .
git commit -m "Update"
git push


GitHub Actions will:

Run the workflow

Call the Render deploy hook

Render redeploys your service

Your website updates automatically

🎉 Live Demo (Once Deployed)

Your Render URL will look like:

https://your-app-name.onrender.com

🧩 Customization

You can easily extend the project with:

Build & test stages

Linting

Frontend frameworks (React/Vue/Angular)

Multiple environments

Database integration

Real-time CI/CD status indicators on the landing page

🙌 License


MIT License. Free to use and modify.

