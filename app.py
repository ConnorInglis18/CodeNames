from flask import Flask
from flask import jsonify 
from flask_cors import CORS
import random
import numpy as np
#import requests

app = Flask(__name__)
CORS(app)


def randomColor():
    num = random.randint(0,2)
    if num == 0:
        return {"first": "red",
                "second": "blue"}
    else:
        return {"first": "blue",
                "second": "red"}

def get25Players(firstPlayer):
    colorArray = []

    # add colors to color array
    for _ in range(0,9):
        colorArray.append(firstPlayer["first"])
    for _ in range(0,8):
        colorArray.append(firstPlayer["second"])
    for _ in range(0,1):
        colorArray.append("black")
    for _ in range(0,7):
        colorArray.append("tan")

    # generate a random permutation of the color array
    colorArray = np.random.permutation(colorArray)
    
    allPlayers = []
    playersSet = set()

    with open("wordlist.txt", 'r') as in_file:
        allPlayers = in_file.readline().split(',')

    while len(playersSet) < 25:
        playersSet.add((allPlayers[random.randint(0,len(allPlayers)-1)], colorArray[len(playersSet)]))

    return list(playersSet)
    

@app.route("/api/v1/", methods=["GET"])
def helloWorld():
    firstPlayer = randomColor()
    players = get25Players(firstPlayer)
    context = {}
    context["firstPlayer"] = firstPlayer["first"]
    context["players"] = players
    return jsonify(**context)

# @app.route("/api/v1/users", methods=["GET"])
# def users():
#     context = {}
#     url = "http://localhost:5000/api/v1"
#     query_results = requests.get(url).json()
#     context["test"] = query_results["newExample"]
#     return jsonify(**context)

# if __name__ == "__main__":
#     app.run(debug=True)