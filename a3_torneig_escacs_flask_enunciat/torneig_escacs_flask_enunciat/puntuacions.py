import json

FITXER_PUNTUACIONS = "puntuacions.json"

def obtenir_classificacio():
    """Obtiene la clasificación de puntuaciones de los participantes desde el archivo JSON."""
    try:
        with open(FITXER_PUNTUACIONS, "r", encoding="utf-8") as f:
            return json.load(f)  # Devuelve el contenido del archivo como un diccionario de puntuaciones
    except (FileNotFoundError, json.JSONDecodeError):
        return {}  # Si el archivo no existe o hay un error en el formato, devuelve un diccionario vacío

def desar_estat(puntuacions):
    """Guarda el estado de las puntuaciones en un archivo JSON."""
    with open(FITXER_PUNTUACIONS, "w", encoding="utf-8") as f:
        json.dump(puntuacions, f, ensure_ascii=False, indent=4)  # Escribe las puntuaciones en el archivo JSON con buena legibilidad

def inicialitzar_puntuacions(participants):
    """Inicializa las puntuaciones de todos los participantes a 0."""
    return {participant: {"nom": participant, "punts": 0} for participant in participants}  # Crea un diccionario con cada participante y su puntuación inicial de 0
