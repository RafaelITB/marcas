import json
from puntuacions import obtenir_classificacio, desar_estat

FITXER_PARTIDES = "partides.json"

def generar_calendari(Lparticipants):
    return [f"{Lparticipants[i]} vs {Lparticipants[j]}" for i in range(len(Lparticipants)) for j in range(i + 1, len(Lparticipants))]

def simular_partida(puntuacions, guanyador):
    if guanyador in puntuacions:
        puntuacions[guanyador]["punts"] += 1
    return puntuacions

def obtenir_partides():
    return generar_calendari(carregar_participants_de_fitxer() or [])

def desar_partides_a_fitxer(partides):
    with open(FITXER_PARTIDES, "w", encoding="utf-8") as f:
        json.dump(partides, f, ensure_ascii=False, indent=4)

def carregar_partides_de_fitxer():
    try:
        with open(FITXER_PARTIDES, "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []
