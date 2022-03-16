from flask import Flask, jsonify
from datetime import datetime

app = Flask(__name__)


@app.route('/test')
def index():
    return {'message': "The current time is {}.".format(datetime.now().strftime("%H:%M:%S"))}


if __name__ == "__main__":
    app.run(debug=True)
