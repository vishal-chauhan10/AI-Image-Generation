from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import auth, scores
from .database import prisma, connect_db, disconnect_db
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI application with title
app = FastAPI(title="AI Image Game API")

# Configure CORS middleware to allow frontend access
# This is necessary for the React frontend to communicate with the API
app.add_middleware(
    CORSMiddleware,
    # Allow requests from React development server
    allow_origins=["http://localhost:5173"],
    # Allow cookies in cross-origin requests
    allow_credentials=True,
    # Allow all HTTP methods (GET, POST, etc.)
    allow_methods=["*"],
    # Allow all headers in requests
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    """
    Execute database connection when the application starts.
    This ensures the database is ready to handle requests.
    """
    await connect_db()

@app.on_event("shutdown")
async def shutdown():
    """
    Properly close database connection when the application shuts down.
    This prevents connection leaks and ensures clean shutdown.
    """
    await disconnect_db()

# Register route handlers with dependency injection
# Auth routes handle user registration and login
app.include_router(
    auth.router,
    prefix="/auth",
    tags=["auth"],
    dependencies=[],
)

# Score routes handle game scores and leaderboard
app.include_router(
    scores.router,
    prefix="/scores",
    tags=["scores"],
    dependencies=[],
)

@app.get("/")
async def root():
    """
    Root endpoint to verify API is running.
    Returns a welcome message.
    """
    return {"message": "Welcome to AI Image Game API"} 