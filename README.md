# ViralVibes - YouTube Title Generator (Backend)

A Node.js/Express backend that uses AI to generate catchy, SEO-optimized YouTube titles based on a video description or keyword.

## 🚀 Live Demo

Frontend: https://viralvibes.vercel.app
Backend: https://backend-youtube-title-app.onrender.com

---

## 🧠 How It Works

1. The user enters a keyword or video description on the frontend
2. The frontend sends a POST request to the `/generate-title` endpoint
3. The backend sends the input to the Hugging Face Inference API using the `meta-llama/Llama-3.1-8B-Instruct` model (via Novita provider)
4. The AI generates 5 catchy, SEO-optimized YouTube titles
5. The backend returns the titles as a JSON array to the frontend

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **AI Model:** Meta Llama 3.1 8B Instruct (via Hugging Face Inference API)
- **AI Provider:** Novita (through Hugging Face router)
- **Environment Variables:** dotenv
- **CORS:** Enabled for frontend communication
- **Deployment:** Render

---

## 📁 Project Structure

```
backend-yt-app/
├── server.js        # Main server file
├── .env             # Environment variables (not committed)
├── .gitignore       # Ignores node_modules and .env
└── package.json     # Dependencies and scripts
```

---

## ⚙️ Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd backend-yt-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```
HF_TOKEN=your_hugging_face_token_here
```

Get your free token at https://huggingface.co → Settings → Access Tokens

### 4. Run the server

```bash
node server.js
```

Or with auto-restart on file changes:

```bash
nodemon server.js
```

Server will run on `http://localhost:5000`

---

## 📡 API Reference

### `POST /generate-title`

Generates 5 YouTube title suggestions based on a video description.

**Request Body:**
```json
{
  "videoDescription": "a video about how to make money online"
}
```

**Success Response:**
```json
{
  "titles": [
    "How to Make Money Online in 2025",
    "The Ultimate Guide to Earning Online",
    "5 Proven Ways to Make Money From Home",
    "Make Money Online: Beginner to Pro",
    "How I Made $1000 Online (Step by Step)"
  ]
}
```

**Error Response:**
```json
{
  "error": "Video description is required"
}
```

---

## 🌍 Deployment

This backend is deployed on **Render** as a Web Service.

**Environment variable to set on Render:**
```
HF_TOKEN=your_hugging_face_token_here
```

**Build Command:** `npm install`  
**Start Command:** `node server.js`

---

## 🔗 Related

- Frontend Repository: https://github.com/blesyn101e/frontend-repo
- Hugging Face Inference Docs: https://huggingface.co/docs/inference-providers
- Meta Llama 3.1 Model: https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct
