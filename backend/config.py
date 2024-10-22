

import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://abdirahman:37571598a@localhost:5432/fitness'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
