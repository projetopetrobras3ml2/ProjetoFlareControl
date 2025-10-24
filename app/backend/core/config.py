# Leitura de variáveis de ambiente e configurações
import os
from dotenv import load_dotenv
load_dotenv()

class Settings:
    SECRET_KEY = os.getenv("SECRET_KEY", "change-me")
    JWT_SECRET = os.getenv("JWT_SECRET", "change-me-too")
    DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./app.db")
    ACCESS_TOKEN_EXPIRES_MIN = int(os.getenv("ACCESS_TOKEN_EXPIRES_MIN", "30"))
    REFRESH_TOKEN_EXPIRES_DAYS = int(os.getenv("REFRESH_TOKEN_EXPIRES_DAYS", "7"))
    UPLOAD_DIR = os.getenv("UPLOAD_DIR", "./uploads")

settings = Settings()
