# Natsumi Store - Pro Edition (Node.js + SQLite)

This is a modern, full-stack E-commerce platform for Natsumi Store.

## 🚀 Pro Setup (Multi-Terminal Workflow)

To run the complete application, open **4 Terminals** and run the following commands:

### Terminal 1: Backend Server (Node.js + SQLite)
Handles the API, Database, and Business Logic.
```bash
cd backend
npm start
```

### Terminal 2: Frontend Server (Web UI)
Serves the user interface.
```bash
# Using Python
python3 -m http.server 8000
# OR using serve
npx serve -p 8000
```

### Terminal 3: Database Explorer & Logs
Monitor database changes or view logs.
```bash
cd backend
# To see live server logs
tail -f natsumi.db # (Metadata view)
# OR monitor network
watch -n 1 ls -lh natsumi.db
```

### Terminal 4: Git / Development
Use this terminal for Git commands, installing new packages, or other CLI tasks.
```bash
# Example: Add a new feature branch
git checkout -b feature/ui-upgrade
```

## 🛠️ Tech Stack
- **Frontend**: Vanilla HTML5, CSS3 (Modern Flex/Grid), JavaScript (ES6+).
- **Backend**: Node.js, Express.js.
- **Database**: SQLite3 (Persistent storage).
- **Security**: JWT (Ready for Auth), Bcryptjs.

## 🎨 UI/UX Features
- **Modern Theme**: Light/Dark mode support.
- **Side Drawer Cart**: Smoother shopping experience.
- **SQLite Persistence**: Your data stays after refresh.
- **Skeleton Loading**: Professional perception of speed.