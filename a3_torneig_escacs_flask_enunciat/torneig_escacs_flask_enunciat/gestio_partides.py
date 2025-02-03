import json
from puntuacions import obtenir_classificacio, desar_estat

FITXER_PARTIDES = "partides.json"

def generar_calendari(Lparticipants):
    """Generar el calendario de partidas."""
    calendari = []
    for i in range(len(Lparticipants)):
        for j in range(i + 1, len(Lparticipants)):
            partida = f"{Lparticipants[i]} vs {Lparticipants[j]}"
            calendari.append(partida)
    return calendari

def simular_partida(puntuacions, guanyador):
    """Simula la partida y actualiza la puntuación del ganador."""
    if guanyador in puntuacions:
        puntuacions[guanyador]["punts"] += 1
    return puntuacions

def obtenir_partides():
    """Obtiene el calendario de partidas, o genera uno si no existe."""
    participants = carregar_participants_de_fitxer()
    if not participants:
        return []
    return generar_calendari(participants)

def desar_partides_a_fitxer(partides, fitxer=FITXER_PARTIDES):
    """Desa el calendario de partidas en un archivo JSON."""
    with open(fitxer, "w", encoding="utf-8") as f:
        json.dump(partides, f, ensure_ascii=False, indent=4)

def carregar_partides_de_fitxer(fitxer=FITXER_PARTIDES):
    """Carga el calendario de partidas desde un archivo JSON."""
    try:
        with open(fitxer, "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []