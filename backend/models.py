from sqlalchemy import Column, Integer, String
from database import Base


class Note(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(100), nullable=False)
    description = Column(String(255), nullable=False)

    def __repr__(self):
        return f"Note(id={self.id}, title={self.title}, description={self.description})"