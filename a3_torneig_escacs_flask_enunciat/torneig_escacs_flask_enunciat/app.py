from flask import Flask, render_template, request, redirect, url_for
import gestio_participants
import gestio_partides
import puntuacions

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/participants', methods=['GET', 'POST'])
def participants():
    if request.method == 'POST':
        nom = request.form['nom']
        if gestio_participants.validar_nom(nom):
            # Agregar participante
            gestio_participants.afegir_participant(nom)
            # Actualizar puntuaciones para el nuevo participante
            puntuacions_data = puntuacions.obtenir_classificacio()
            if nom not in puntuacions_data:
                puntuacions_data[nom] = {"nom": nom, "punts": 0}
                puntuacions.desar_estat(puntuacions_data)
        return redirect(url_for('participants'))
    
    llista = gestio_participants.obtenir_participants()
    return render_template('participants.html', participants=llista)

@app.route('/partides', methods=['GET', 'POST'])
def partides():
    participants = gestio_participants.obtenir_participants()
    if not participants:
        return render_template('partides.html', partides=[], error="No participants found.")
    
    puntuacions_data = puntuacions.obtenir_classificacio()
    if not puntuacions_data:
        puntuacions_data = puntuacions.inicialitzar_puntuacions(participants)
        puntuacions.desar_estat(puntuacions_data)

    calendari = gestio_partides.generar_calendari(participants)

    if request.method == 'POST':
        guanyador = request.form['guanyador']
        puntuacions_data = gestio_partides.simular_partida(puntuacions_data, guanyador)
        puntuacions.desar_estat(puntuacions_data)  # Save updated scores
        return redirect(url_for('partides'))

    return render_template('partides.html', partides=calendari)

@app.route('/puntuacions')
def puntuacions_view():
    ranking = puntuacions.obtenir_classificacio()
    return render_template('puntuacions.html', ranking=ranking)

if __name__ == '__main__':
    app.run(debug=True)