from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from database import get_db
from models import Note
from schemas import NoteRequest, NoteResponse
from sqlalchemy.orm import Session

router = APIRouter(prefix="/notes", tags=["Notes"])

@router.post("/")
async def create_note(note_request: NoteRequest, db: Session = Depends(get_db)):
    note = Note(title=note_request.title, description=note_request.description)
    db.add(note)
    db.commit()
    db.refresh(note)
    return NoteResponse(id=note.id, title=note.title, description=note.description)

@router.get("/")
async def read_notes(db: Session = Depends(get_db)):
    notes = db.query(Note).all()
    return [NoteResponse(id=note.id, title=note.title, description=note.description) for note in notes]
