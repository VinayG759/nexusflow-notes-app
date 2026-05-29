from pydantic import BaseModel, Field, ConfigDict

class NoteRequest(BaseModel):
    title: str = Field(...)
    description: str = Field(...)


class NoteResponse(BaseModel):
    id: int
    title: str
    description: str

    model_config = ConfigDict(from_attributes=True)