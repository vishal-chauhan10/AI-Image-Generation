from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List

# Base user model with common fields
class UserBase(BaseModel):
    """Base user model with common fields."""
    username: str

# Model for creating new users - includes password
class UserCreate(UserBase):
    """Model for user registration - includes password."""
    password: str

# Model for user responses - excludes password
class UserResponse(UserBase):
    """Model for user responses - excludes sensitive data."""
    id: int
    createdAt: datetime
    
    class Config:
        from_attributes = True  # Enable ORM model conversion

# Base score model
class ScoreBase(BaseModel):
    """Base score model with common fields."""
    points: int
    prompt: Optional[str] = None    # Optional game prompt
    imageUrl: Optional[str] = None  # Optional generated image URL

# Model for creating new scores
class ScoreCreate(ScoreBase):
    """Model for creating new scores."""
    pass

# Model for score responses
class ScoreResponse(ScoreBase):
    """Model for score responses - includes metadata."""
    id: int
    userId: int
    timestamp: datetime

    class Config:
        from_attributes = True  # Enable ORM model conversion

# Extended user model including scores
class UserWithScores(UserResponse):
    """Extended user model including their scores."""
    scores: List[ScoreResponse] 