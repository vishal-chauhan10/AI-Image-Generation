from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from ..models.user import UserCreate, UserResponse
from ..utils.auth import (
    get_password_hash,
    verify_password,
    create_access_token,
    ACCESS_TOKEN_EXPIRE_MINUTES
)
from datetime import timedelta
from ..database import prisma

# Create router for authentication endpoints
router = APIRouter()

@router.post("/register", response_model=UserResponse)
async def register(user: UserCreate):
    """
    Register a new user.
    
    Args:
        user (UserCreate): User registration data containing username and password
    
    Returns:
        UserResponse: Created user data (excluding password)
    
    Raises:
        HTTPException: If username is already taken
    """
    # Check for existing user to prevent duplicates
    existing_user = await prisma.user.find_first(
        where={
            'username': user.username
        }
    )
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already registered"
        )
    
    # Create new user with hashed password for security
    hashed_password = get_password_hash(user.password)
    new_user = await prisma.user.create(
        data={
            'username': user.username,
            'password': hashed_password
        }
    )
    return new_user

@router.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    """
    Authenticate user and create access token.
    
    Args:
        form_data (OAuth2PasswordRequestForm): Login credentials
    
    Returns:
        dict: Access token and token type
    
    Raises:
        HTTPException: If credentials are invalid
    """
    # Verify user exists
    user = await prisma.user.find_first(
        where={
            'username': form_data.username
        }
    )
    # Check password
    if not user or not verify_password(form_data.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Generate JWT token for authenticated session
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, 
        expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"} 