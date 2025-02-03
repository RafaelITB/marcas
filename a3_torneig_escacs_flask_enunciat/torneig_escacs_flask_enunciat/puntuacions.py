import json

FITXER_PUNTUACIONS = "puntuacions.json"

def obtenir_classificacio():
    """Obtiene la clasificación de puntuaciones de los participantes desde el archivo."""
    try:
        with open(FITXER_PUNTUACIONS, "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}

def desar_estat(puntuacions):
    """Guarda el estado de las puntuaciones en un archivo JSON."""
    with open(FITXER_PUNTUACIONS, "w", encoding="utf-8") as f:
        json.dump(puntuacions, f, ensure_ascii=False, indent=4)

def inicialitzar_puntuacions(participants):
    """Inicializa las puntuaciones de los participantes a 0."""
    return {participant: {"nom": participant, "punts": 0} for participant in participants}