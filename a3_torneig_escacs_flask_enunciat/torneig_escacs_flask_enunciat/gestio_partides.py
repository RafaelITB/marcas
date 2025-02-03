import json
from puntuacions import obtenir_classificacio, desar_estat

FITXER_PARTIDES = "partides.json"

def generar_calendari(Lparticipants):
    # Genera un calendario de partidos entre todos los participantes, creando combinaciones de cada par
    return [f"{Lparticipants[i]} vs {Lparticipants[j]}" for i in range(len(Lparticipants)) for j in range(i + 1, len(Lparticipants))]

def simular_partida(puntuacions, guanyador):
    # Simula una partida y actualiza la puntuación del ganador sumando 1 punto
    if guanyador in puntuacions:
        puntuacions[guanyador]["punts"] += 1  # Incrementa los puntos del ganador
    return puntuacions  # Devuelve el diccionario de puntuaciones actualizado

def obtenir_partides():
    # Devuelve el calendario de partidas generado a partir de la lista de participantes
    return generar_calendari(carregar_participants_de_fitxer() or [])  # Si no hay participantes, pasa una lista vacía

def desar_partides_a_fitxer(partides):
    # Guarda la lista de partidas en un archivo JSON
    with open(FITXER_PARTIDES, "w", encoding="utf-8") as f:
        json.dump(partides, f, ensure_ascii=False, indent=4)  # Escribe las partidas en formato JSON con buena legibilidad

def carregar_partides_de_fitxer():
    # Carga las partidas desde un archivo JSON
    try:
        with open(FITXER_PARTIDES, "r", encoding="utf-8") as f:
            return json.load(f)  # Devuelve el contenido del archivo como una lista
    except (FileNotFoundError, json.JSONDecodeError):
        return []  # Si el archivo no existe o hay un error al leerlo, devuelve una lista vacía

