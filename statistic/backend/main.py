from flask import Flask, render_template, g, jsonify, request
print(123)
app = Flask(__name__, template_folder='../assets/build', static_folder='../assets/build')

if __name__ == "__main__":
    app.run(debug=True, port=5000)
