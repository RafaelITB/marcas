""" Aplicació Flask simple."""
from flask import Flask

app = Flask(__name__)

html_content = """ 
<!DOCTYPE html>
<html lang="ca">
    <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hola, Món!</title>
        <style>
            body {
                margin: 0;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: lightblue; /* Fondo azul claro */
                font-family: Arial, sans-serif;
            }
            h1 {
                color: white; /* Texto en blanco */
                font-size: 3em; /* Tamaño grande */
                text-align: center;
            }
        </style>
    </head>
<body>"""

html_content_end = """
</body>
</html>
"""

@app.route('/')
def home():
    """Retorna missatge benvinguda."""
    return (html_content + "<h1>Hola, Món!</h1>" + html_content_end)

@app.route('/user/<username>')
def show_user_profile(username):
    """Mostra el perfil de l'usuari."""
    return (html_content + f"<h1>Perfil de l'usuari: {username}<h1>" + html_content_end)

@app.route('/post/<int:post_id>')
def show_post(post_id):
    """Mostra el post amb l'ID donat."""
    return (html_content + f"<h1>Post ID: {post_id}<h1>" + html_content_end)
@app.route('/hello')
def hello():
    """Retorna una salutació."""
    return (html_content + "<h1>Hola, Món!</h1>" + html_content_end)

if __name__ == '__main__':
    app.run(debug=True)
