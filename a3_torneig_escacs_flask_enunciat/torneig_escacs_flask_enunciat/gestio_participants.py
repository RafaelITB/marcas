from flask import Flask, render_template, request, redirect, url_for
import re, json

FITXER_PARTICIPANTS = "participants.json"
app = Flask(__name__)

def validar_nom(nom):
    return bool(re.fullmatch(r"[a-zA-ZÀ-ÿ ]+", nom))

def afegir_participant(nom):
    if not validar_nom(nom):
        return False
    participants = carregar_participants_de_fitxer()
    if nom in participants:
        return False
    participants.append(nom)
    desar_participants_a_fitxer(participants)
    return True

def desar_participants_a_fitxer(participants, fitxer=FITXER_PARTICIPANTS):
    with open(fitxer, "w", encoding="utf-8") as f:
        json.dump(participants, f, ensure_ascii=False, indent=4)

def carregar_participants_de_fitxer(fitxer=FITXER_PARTICIPANTS):
    try:
        with open(fitxer, "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []

def obtenir_participants():
    return carregar_participants_de_fitxer()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/participants', methods=['GET', 'POST'])
def participants():
    if request.method == 'POST':
        nom = request.form['nom']
        if afegir_participant(nom):
            return redirect(url_for('participants'))
    return render_template('participants.html', participants=obtenir_participants())

if __name__ == '__main__':
    app.run(debug=True)