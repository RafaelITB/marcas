# Torneig d'Escacs - Desenvolupament d'una Aplicació Web

## Introducció
En aquest projecte crearàs una aplicació web per gestionar un torneig d'escacs utilitzant **Flask** com a framework backend i **HTML** per a la interfície d'usuari. Aquest projecte et permetrà treballar amb conceptes com:

- Expressió d'idees i objectius funcionals a través de vistes web.
- Validació d'entrades d'usuari amb expressions regulars.
- Gestió de dades amb fitxers i estructures com diccionaris.
- Disseny d'una interfície intuïtiva amb formularis HTML.
- Organització del codi en un projecte Flask modular.

Aquest projecte manté els objectius funcionals dels exercicis anteriors, però ara l'interacció es farà completament a través d'una interfície web.

---

## Especificacions del projecte

### 1. Funcionalitats

L'aplicació haurà de permetre:

1. **Gestió de participants**:
    - Afegeix nous participants al torneig mitjançant un formulari.
    - Valida que els noms dels participants només continguin lletres i espais.
    - Mostra la llista de participants registrats en una vista separada.

2. **Simulació de partides**:
    - Genera partides entre jugadors de forma automàtica o manual.
    - Permet avançar les jornades del torneig (en mode lliga o eliminatòries).
    - Mostra una vista amb els resultats actuals de cada jornada.

3. **Puntuacions i classificació**:
    - Porta el seguiment de les puntuacions dels jugadors.
    - Genera un rànquing ordenat de jugadors segons les seves puntuacions.
    - Permet veure els resultats finals i el guanyador.

4. **Persistència de dades**:
    - Guarda l'estat del torneig (participants, puntuacions, partides) en fitxers.
    - Permet carregar un torneig guardat anteriorment.

5. **Filtrar i cercar informació**:
    - Filtra partides o jugadors segons criteris específics (exemple: nom d'un jugador).

---

### 2. Requisits tècnics

1. **Framework:** Flask (Python).
2. **Plantilles:** Fitxers HTML (no és necessari CSS ni JavaScript per al projecte base).
3. **Gestió de dades:** Ús de fitxers per guardar i carregar la informació del torneig.
4. **Validacions:** Ús d'expressions regulars per assegurar la correcció de les dades introduïdes pels usuaris.
5. **Organització del projecte:**
    - Esquelet de l'aplicació dividit en mòduls.
    - Fitxers HTML per a cada vista.

---

### 3. Esquelet del projecte

El projecte s'ha d'organitzar de la següent manera:

```
torneig_escacs/
├── templates/
│   ├── index.html          # Pàgina principal
│   ├── participants.html   # Formulari i vista de participants
│   ├── partides.html       # Vista de partides i resultats
│   ├── puntuacions.html    # Vista de puntuacions i rànquing
├── app.py                  # Fitxer principal per arrencar l'aplicació
├── gestio_participants.py  # Mòdul per gestionar participants
├── gestio_partides.py      # Mòdul per gestionar partides
├── puntuacions.py          # Mòdul per gestionar puntuacions
├── utils.py                # Funcions auxiliars (validacions, etc.)
```

---

### 4. Descripció dels mòduls

#### **`app.py`**
Aquest fitxer és el punt d'entrada de l'aplicació i contindrà:

- La configuració de l'aplicació Flask.
- Les rutes per a cada pàgina o funcionalitat.
- La connexió amb els mòduls que implementen la lògica.

#### **`gestio_participants.py`**
Aquest mòdul s'encarregarà de:

- Afegir i validar noms de participants.
- Gestionar la llista de participants.
- Desar i carregar participants des de fitxers.

#### **`gestio_partides.py`**
Aquest mòdul s'encarregarà de:

- Generar partides automàticament o manualment.
- Gestionar l'avanç de jornades en un torneig.
- Guardar i carregar les partides.

#### **`puntuacions.py`**
Aquest mòdul inclourà:

- Actualització i visualització de les puntuacions.
- Càlcul del rànquing i determinació del guanyador.
- Estadístiques opcionals (percentatges de victòries, etc.).

#### **`utils.py`**
Aquest mòdul contindrà funcions auxiliars, com ara:

- Validació d'entrades amb expressions regulars.
- Funcions per gestionar errors.

---

### 5. Passos a seguir

#### **Part 1: Configurar Flask i les rutes**
1. Crea el fitxer `app.py` amb l'estructura bàsica d'una aplicació Flask.
2. Defineix rutes per a les següents funcionalitats:
    - Pàgina principal (`/`).
    - Formulari per afegir participants (`/participants`).
    - Vista de partides (`/partides`).
    - Vista de puntuacions (`/puntuacions`).

#### **Part 2: Implementar la lògica del servidor**
1. Completa els mòduls `gestio_participants.py`, `gestio_partides.py` i `puntuacions.py`.
2. Implementa totes les funcionalitats descrites abans (validacions, gestió de fitxers, etc.).

#### **Part 3: Dissenyar les plantilles HTML**
1. Crea un formulari a `participants.html` per introduir noms de participants.
2. Mostra els resultats i classificacions a `puntuacions.html`.
3. Mostra el calendari de partides a `partides.html`.

---

## Reptes opcionals
1. Afegeix funcionalitats per mostrar estadístiques avançades (exemple: jugador amb més victòries consecutives).
2. Implementa la possibilitat de reiniciar el torneig sense perdre els participants registrats.

---

## Instruccions finals
- Completa cada part seguint l'ordre indicat.
- Prova l'aplicació a mesura que vas implementant les funcionalitats.
- Bona sort i diverteix-te desenvolupant la teva aplicació web de gestió de tornejos d'escacs!



>
> Enunciat resumit:
>

# Torneig d'Escacs - Desenvolupament d'Aplicació Web

Aquest projecte consisteix en crear una aplicació web amb Flask per gestionar un torneig d'escacs.
Llegeix les instruccions i omple els `# TODO` als fitxers Python per implementar les funcionalitats.

## Estructura del projecte
- **`app.py`**: Fitxer principal amb les rutes.
- **`gestio_participants.py`**: Funcions per gestionar participants.
- **`gestio_partides.py`**: Funcions per gestionar partides.
- **`puntuacions.py`**: Funcions per gestionar puntuacions.
- **`utils.py`**: Funcions auxiliars.

## Com començar
1. Completa els fitxers marcats amb `# TODO`.
2. Executa l'aplicació amb `python app.py`.
3. Obre el navegador i ves a `http://localhost:5000`.

Bona sort!
