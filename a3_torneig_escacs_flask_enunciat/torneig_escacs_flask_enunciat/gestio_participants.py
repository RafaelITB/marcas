from flask import Flask, render_template, request, redirect, url_for
import re, json

FITXER_PARTICIPANTS = "participants.json"
app = Flask(__name__)

def validar_nom(nom):
    # Valida si el nombre contiene solo caracteres alfabéticos y espacios (incluyendo caracteres acentuados y letras especiales)
    return bool(re.fullmatch(r"[a-zA-ZÀ-ÿ ]+", nom))

def afegir_participant(nom):
    # Añade un participante a la lista si el nombre es válido y no existe ya en la lista
    if validar_nom(nom):
        participants = carregar_participants_de_fitxer()  # Carga la lista de participantes actuales
        if nom not in participants:  # Verifica que el nombre no esté repetido
            participants.append(nom)  # Añade el nuevo participante
            desar_participants_a_fitxer(participants)  # Guarda la lista actualizada en el archivo
            return True  # Indica que el participante fue añadido exitosamente
    return False  # Devuelve False si el nombre no es válido o ya existe

def desar_participants_a_fitxer(participants):
    # Guarda la lista de participantes en el archivo JSON
    with open(FITXER_PARTICIPANTS, "w", encoding="utf-8") as f:
        json.dump(participants, f, ensure_ascii=False, indent=4)  # Escribe la lista con formato JSON legible

def carregar_participants_de_fitxer():
    # Carga la lista de participantes desde el archivo JSON
    try:
        with open(FITXER_PARTICIPANTS, "r", encoding="utf-8") as f:
            return json.load(f)  # Devuelve el contenido del archivo como una lista
    except (FileNotFoundError, json.JSONDecodeError):
        return []  # Si el archivo no existe o hay un error al leerlo, devuelve una lista vacía

def obtenir_participants():
    # Devuelve la lista de participantes cargados desde el archivo
    return carregar_participants_de_fitxer()

@app.route('/')
def index():
    # Muestra la página principal del sitio
    return render_template('index.html')

@app.route('/participants', methods=['GET', 'POST'])
def participants():
    # Gestiona la página de los participantes: añadir uno nuevo o mostrar los existentes
    if request.method == 'POST' and afegir_participant(request.form['nom']):
        return redirect(url_for('participants'))  # Redirige para mostrar la lista de participantes actualizada
    return render_template('participants.html', participants=obtenir_participants())  # Muestra los participantes existentes

if __name__ == '__main__':
    app.run(debug=True)  # Arranca el servidor Flask en modo debug
