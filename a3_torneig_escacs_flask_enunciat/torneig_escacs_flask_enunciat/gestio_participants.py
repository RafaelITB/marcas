import re
import json

FITXER_PARTICIPANTS = "participants.json"

def validar_nom(nom):
    """Valida que el nom només contingui lletres i espais."""
    return bool(re.fullmatch(r"[a-zA-ZÀ-ÿ ]+", nom))

def afegir_participant(nom):
    """Afegeix un participant si el nom és vàlid i no està duplicat."""
    if not validar_nom(nom):
        return False
    participants = carregar_participants_de_fitxer()
    if nom in participants:
        return False
    participants.append(nom)
    desar_participants_a_fitxer(participants)
    return True

def desar_participants_a_fitxer(participants, fitxer=FITXER_PARTICIPANTS):
    """Desa la llista de participants en un fitxer JSON."""
    with open(fitxer, "w", encoding="utf-8") as f:
        json.dump(participants, f, ensure_ascii=False, indent=4)

def carregar_participants_de_fitxer(fitxer=FITXER_PARTICIPANTS):
    """Carrega la llista de participants des d'un fitxer JSON."""
    try:
        with open(fitxer, "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []

def obtenir_participants():
    """Retorna la llista de participants."""
    return carregar_participants_de_fitxer()