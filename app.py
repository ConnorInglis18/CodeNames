import os
import random

import numpy as np
from flask import Flask, jsonify, make_response, request
from flask_cors import CORS

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
        returnedElements.append([wordsSet[i].strip(),colorArray[i]])

    return returnedElements


def getWordPacks():
    path = 'WordPacks'
    files = []
    for _,_,f in os.walk(path):
        for file in f:
            if '.txt' in file:
                files.append(file.split(".")[0])
    return files
    

@app.route("/api/v1/", methods=["GET"])
def generateSinglePlayerGame():
    context = {}
    firstPlayer = randomColor()
    context["firstPlayer"] = firstPlayer["first"]
    context["words"] = get25words(firstPlayer, 'Default')
    packs = getWordPacks()
    context["wordPacks"] = packs
    context["totalPacks"] = len(packs)
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
        context["words"] = get25words(firstPlayer, packName)
        packs = getWordPacks()
        context["wordPacks"] = packs
        context["totalPacks"] = len(packs)
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