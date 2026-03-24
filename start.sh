#!/bin/bash
set -euo pipefail

echo "🌸 Starting Natsumi Store Full Stack..."

# Function to kill (clean up) processes on exit
cleanup() {
    echo "Stopping servers..."
    jobs -p | xargs -r kill
}

trap cleanup EXIT SIGINT SIGTERM

# Start Backend
echo "🚀 Starting Server on port 3000..."
(cd server && npm run dev) &

# Wait a bit for server to init
sleep 2

# Start Frontend
echo "✨ Starting Client on port 5173..."
(cd client && npm run dev) &

# Wait for all background processes
wait
