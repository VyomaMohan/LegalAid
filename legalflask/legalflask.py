# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

from flask import Flask, request, make_response, jsonify
from flask_cors import CORS, cross_origin

import webscrapingprog
import relevantlaws
import documentreader
import docsummarizer
import recognizename
import mongohelper

app=Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/relevant1')
def helloworld():
    return "Hello world"

@app.route('/similar',methods=["GET"])
@cross_origin(supports_credentials=True)
def returnsSimilarCases():
    print("Reached method")
    caseString=request.args.get("cstring")
    strlist=caseString.split(" ")
    caseString="+".join(strlist)
    print(caseString)
    resultString=webscrapingprog.webscrapingprog(caseString)
    res=make_response(jsonify(resultString), 200)
    return res

@app.route('/relevant',methods=["GET"])
@cross_origin(supports_credentials=True)
def relevantLawList():
    problemString=request.args.get("pstring")
    print(problemString)
    resultString=relevantlaws.relevantlaws(problemString)
    print("Acquired result:")
    print(resultString)
    res=make_response(jsonify(resultString),200)
    return res

@app.route('/documentsummary',methods=["POST"])
@cross_origin(supports_credentials=True)
def documentAnalysis():
    try:
        imagefile=request.files.get('imagefile','')
        pic_content= documentreader.documentreader(imagefile)
        #print(pic_content)
        pic_summary=docsummarizer.docsummarizer(pic_content)
        print(pic_summary)
        res=make_response(jsonify(pic_summary),200)
        
    except Exception as err:
        print(err)
    return res

@app.route('/documentner',methods=["POST"])
@cross_origin(supports_credentials=True)
def documentEntities():
    try:
        imagefile=request.files.get('imagefile','')
        pic_content=documentreader.documentreader(imagefile)
        name_list=recognizename.recognizename(pic_content)
        res=make_response(jsonify(name_list),200)
    except Exception as err:
        print(err)
    return res

@app.route('/dbgetall',methods=["GET"])
@cross_origin(supports_credentials=True)
def getAllFromDb():
    try:
        results=mongohelper.getAll()
        res=make_response(jsonify(results),200)
    except Exception as err:
        print(err)
    return res

@app.route('/dbparticular',methods=["GET"])
@cross_origin(supports_credentials=True)
def getParticular():
    field=request.args.get("field")
    print("Argument is"+field)
    fee=request.args.get("fee")
    print("Argument is"+fee)
    
    try:
        results=mongohelper.getParticular(field,fee)
        res=make_response(jsonify(results),200)
    except Exception as err:
        print(err)
    return res

@app.route('/lawyerfield',methods=["GET"])
@cross_origin(supports_credentials=True)
def getLawyerField():
    field=request.args.get("field")
    print("Argument is"+field)
    
    try:
        results=mongohelper.getLawyerField(field)
        res=make_response(jsonify(results),200)
    except Exception as err:
        print(err)
    
    return res


if __name__=='__main__':
    app.run()
