import os
import random

import numpy as np
from flask import Flask, jsonify, make_response, request
from flask_cors import CORS

#import requests

app = Flask(__name__)
CORS(app)

GAMES = {}
GAMES[321] = {
                "cards": [
                    {
                    "beenClicked": "false",
                    "color": "tan",
                    "id": 0,
                    "word": "nurse"
                    },
                    {
                    "beenClicked": "false",
                    "color": "red",
                    "id": 1,
                    "word": "moscow"
                    },
                    {
                    "beenClicked": "false",
                    "color": "red",
                    "id": 2,
                    "word": "maple"
                    },
                    {
                    "beenClicked": "false",
                    "color": "blue",
                    "id": 3,
                    "word": "olive"
                    },
                    {
                    "beenClicked": "false",
                    "color": "red",
                    "id": 4,
                    "word": "wall"
                    },
                    {
                    "beenClicked": "false",
                    "color": "tan",
                    "id": 5,
                    "word": "ghost"
                    },
                    {
                    "beenClicked": "false",
                    "color": "tan",
                    "id": 6,
                    "word": "van"
                    },
                    {
                    "beenClicked": "false",
                    "color": "tan",
                    "id": 7,
                    "word": "cross"
                    },
                    {
                    "beenClicked": "false",
                    "color": "blue",
                    "id": 8,
                    "word": "server"
                    },
                    {
                    "beenClicked": "false",
                    "color": "tan",
                    "id": 9,
                    "word": "fall"
                    },
                    {
                    "beenClicked": "false",
                    "color": "blue",
                    "id": 10,
                    "word": "gold"
                    },
                    {
                    "beenClicked": "false",
                    "color": "blue",
                    "id": 11,
                    "word": "turkey"
                    },
                    {
                    "beenClicked": "false",
                    "color": "tan",
                    "id": 12,
                    "word": "box"
                    },
                    {
                    "beenClicked": "false",
                    "color": "tan",
                    "id": 13,
                    "word": "war"
                    },
                    {
                    "beenClicked": "false",
                    "color": "red",
                    "id": 14,
                    "word": "eagle"
                    },
                    {
                    "beenClicked": "false",
                    "color": "red",
                    "id": 15,
                    "word": "dwarf"
                    },
                    {
                    "beenClicked": "false",
                    "color": "blue",
                    "id": 16,
                    "word": "rome"
                    },
                    {
                    "beenClicked": "false",
                    "color": "blue",
                    "id": 17,
                    "word": "knife"
                    },
                    {
                    "beenClicked": "false",
                    "color": "red",
                    "id": 18,
                    "word": "angel"
                    },
                    {
                    "beenClicked": "false",
                    "color": "red",
                    "id": 19,
                    "word": "giant"
                    },
                    {
                    "beenClicked": "false",
                    "color": "black",
                    "id": 20,
                    "word": "chocolate"
                    },
                    {
                    "beenClicked": "false",
                    "color": "red",
                    "id": 21,
                    "word": "forest"
                    },
                    {
                    "beenClicked": "false",
                    "color": "blue",
                    "id": 22,
                    "word": "mammoth"
                    },
                    {
                    "beenClicked": "false",
                    "color": "blue",
                    "id": 23,
                    "word": "circle"
                    },
                    {
                    "beenClicked": "false",
                    "color": "red",
                    "id": 24,
                    "word": "rock"
                    }
                ],
                "firstPlayer": "red",
                "totalPacks": 4,
                "wordPacks": [
                    "Sports_Teams",
                    "Default",
                    "NSFW",
                    "Premier_League"
                ]
}

def randomColor():
    num = random.randint(0,2)
    if num == 0:
        return {"first": "red",
                "second": "blue"}
    else:
        return {"first": "blue",
                "second": "red"}

def get25words(firstPlayer, packName):
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
    
    allWords = []
    wordsSet = set()

    fileName = os.path.join("WordPacks", packName + ".txt")
    with open(fileName, 'r') as in_file:
        #allPlayers = in_file.readline().split(',')
        allWords = in_file.readlines()

    while len(wordsSet) < 25:
        wordsSet.add((allWords[random.randint(0,len(allWords)-1)]))

    wordsSet = list(wordsSet)
    returnedElements = []
    for i in range(0,len(wordsSet)):
        returnedElements.append({
            "word": wordsSet[i].strip(),
            "color": colorArray[i],
            "beenClicked": "false"
        })

    return returnedElements


def getWordPacks():
    path = 'WordPacks'
    files = []
    for _,_,f in os.walk(path):
        for file in f:
            if '.txt' in file:
                files.append(file.split(".")[0])
    return files

def makeGame(packName):
    context = {}
    firstPlayer = randomColor()
    context["firstPlayer"] = firstPlayer["first"]
    context["cards"] = get25words(firstPlayer, packName)
    packs = getWordPacks()
    context["wordPacks"] = packs
    context["totalPacks"] = len(packs)
    return context
    

@app.route("/api/v1/", methods=["GET"])
def generateSinglePlayerGame():
    context = makeGame("Default")
    return jsonify(**context)


@app.route("/api/v1/<string:packName>", methods=["GET", "POST"])
def generateMultiplayerGame(packName):
    if request.method == 'POST':
        context = {}
        make_response(jsonify(**context), 201)
    else:
        firstPlayer = randomColor()
        context = {}
        context["firstPlayer"] = firstPlayer["first"]
        context["cards"] = get25words(firstPlayer, packName)
        packs = getWordPacks()
        context["wordPacks"] = packs
        context["totalPacks"] = len(packs)
        return jsonify(**context)

@app.route("/api/v1/createGame/<int:gameId>/<string:packName>", methods=["GET", "POST"])
def getPackGame(gameId, packName):
    if gameId in GAMES:
        return jsonify(**GAMES[gameId])
    context = makeGame(packName)
    GAMES[gameId] = context
    return jsonify(**context)

@app.route("/api/v1/createGame/<int:gameId>/", methods=["GET", "POST"])
def getDefaultGame(gameId):
    if gameId in GAMES:
        return jsonify(**GAMES[gameId])
    context = makeGame("Default")
    GAMES[gameId] = context
    return jsonify(**context)

@app.route("/api/v1/deleteAllGames/", methods=["GET", "POST"])
def deleteAllGames():
    print(GAMES)
    GAMES.clear()
    print(GAMES)

# @app.route("/api/v1/users", methods=["GET"])
# def users():
#     context = {}
#     url = "http://localhost:5000/api/v1"
#     query_results = requests.get(url).json()
#     context["test"] = query_results["newExample"]
#     return jsonify(**context)

# if __name__ == "__main__":
#     app.run(debug=True)