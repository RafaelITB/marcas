from flask import Flask, render_template_string

app = Flask(__name__)
@app.route('/')
def home():
    html_content = """ 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Hola tito1</title>
    </head>
    <body>
        <h1>E1 meu segon Python</h1>
        <ul>
    """
    for index in range(10):
        html_content += f"    <li>hola {index}</li>\n"

    html_content += """
        </ul>
    </body>
    </html>
    """
    return render_template_string(html_content)

if __name__ == '__main__':
    app.run(debug=True)   