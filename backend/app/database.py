from prisma import Prisma

# Create global Prisma client instance
# This instance will be shared across the application
prisma = Prisma()

async def connect_db():
    """
    Establish connection to the PostgreSQL database using Prisma.
    This function is called during application startup.
    """
    await prisma.connect()

async def disconnect_db():
    """
    Close the database connection.
    This function is called during application shutdown to clean up resources.
    """
    await prisma.disconnect() 