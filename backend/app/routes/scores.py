from fastapi import APIRouter, Depends, HTTPException, status
from ..models.user import ScoreCreate, ScoreResponse
from ..utils.auth import get_current_user
from typing import List
from ..database import prisma

router = APIRouter(prefix="/scores", tags=["scores"])

@router.post("/", response_model=ScoreResponse)
async def create_score(score: ScoreCreate, current_user: str = Depends(get_current_user)):
    """
    Create a new game score for the authenticated user.
    
    Args:
        score (ScoreCreate): Score data including points and optional prompt/image
        current_user (str): Username from JWT token
    
    Returns:
        ScoreResponse: Created score data
    
    Raises:
        HTTPException: If user not found
    """
    # Get user record
    user = await prisma.user.find_first(
        where={
            'username': current_user
        }
    )
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Create score record
    new_score = await prisma.score.create(
        data={
            'points': score.points,
            'prompt': score.prompt,
            'imageUrl': score.imageUrl,
            'userId': user.id
        }
    )
    return new_score

@router.get("/leaderboard", response_model=List[ScoreResponse])
async def get_leaderboard():
    """
    Retrieve top 10 scores for the leaderboard.
    
    Returns:
        List[ScoreResponse]: List of top scores with user information
    """
    scores = await prisma.score.find_many(
        order={
            'points': 'desc'  # Sort by highest points
        },
        take=10,  # Limit to top 10
        include={
            'user': True  # Include user data with each score
        }
    )
    return scores 