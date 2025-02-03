from flask import Flask, render_template, request, redirect, url_for
import gestio_participants, gestio_partides, puntuacions

app = Flask(__name__)

@app.route('/')
def index():
    # Muestra la página principal del sitio
    return render_template('index.html')

@app.route('/participants', methods=['GET', 'POST'])
def participants():
    # Gestiona la página de los participantes: añadir uno nuevo o mostrar los existentes
    if request.method == 'POST':
        nom = request.form['nom']
        if gestio_participants.validar_nom(nom):
            gestio_participants.afegir_participant(nom)  # Añadir un nuevo participante
            puntuacions_data = puntuacions.obtenir_classificacio()  # Obtener la clasificación actual
            if nom not in puntuacions_data:
                puntuacions_data[nom] = {"nom": nom, "punts": 0}  # Añadir al ranking con 0 puntos si no está
                puntuacions.desar_estat(puntuacions_data)  # Guardar el estado actualizado
        return redirect(url_for('participants'))  # Redirige a la misma página después de añadir un participante
    return render_template('participants.html', participants=gestio_participants.obtenir_participants())  # Muestra los participantes existentes

@app.route('/partides', methods=['GET', 'POST'])
def partides():
    # Maneja la página de las partidas: mostrar calendario o simular una partida
    participants = gestio_participants.obtenir_participants()
    if not participants:
        return render_template('partides.html', partides=[], error="No participants found.")  # Error si no hay participantes
    
    puntuacions_data = puntuacions.obtenir_classificacio() or puntuacions.inicialitzar_puntuacions(participants)  # Inicializa o obtiene el estado de puntuaciones
    puntuacions.desar_estat(puntuacions_data)  # Guarda el estado de puntuaciones
    
    if request.method == 'POST':
        guanyador = request.form['guanyador']
        puntuacions.desar_estat(gestio_partides.simular_partida(puntuacions_data, guanyador))  # Simula la partida y guarda el resultado
        return redirect(url_for('partides'))  # Redirige para mostrar el calendario actualizado
    
    return render_template('partides.html', partides=gestio_partides.generar_calendari(participants))  # Muestra el calendario de partidas

@app.route('/puntuacions')
def puntuacions_view():
    # Muestra la página con la clasificación de puntuaciones
    return render_template('puntuacions.html', ranking=puntuacions.obtenir_classificacio())

if __name__ == '__main__':
    app.run(debug=True)  # Arranca el servidor Flask en modo debug
