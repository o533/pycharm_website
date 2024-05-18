from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # Render the HTML page
    return render_template('index.html')

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True)
