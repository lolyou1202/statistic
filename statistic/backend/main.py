from flask import Flask, render_template, g, jsonify, request

app = Flask(__name__, template_folder='../assets/build', static_folder='../assets/build/static')

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5000)
