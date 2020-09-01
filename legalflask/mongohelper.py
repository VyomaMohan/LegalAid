# -*- coding: utf-8 -*-
"""
Created on Thu May 21 16:13:58 2020

@author: Mohan
"""

from pymongo import MongoClient
from pprint import pprint

connection_string="mongodb+srv://vyo:qwerty123@cluster0-7rdjk.mongodb.net/test"

client = MongoClient(connection_string)
db=client.admin

def getAll():
    templist=[]
    searchresults = client.legalaid.lawyers.find()
    for x in searchresults:
        #pprint(x)
        templist.append({"name":x["name"],"phonenumber":x["phonenumber"],"field":x["field"],"avgfee":x["avgfee"]})
    print(templist)
    return templist

def getParticular(field,fee):
    templist=[]
    
    
    if(field=="Any"):
        qfee=int(fee)
        searchresults = client.legalaid.lawyers.find({"avgfee":{"$lt":qfee}})
    elif(fee=="Any"):
        searchresults = client.legalaid.lawyers.find({"field":field})
    else:
        qfee=int(fee)
        searchresults = client.legalaid.lawyers.find({"field":field,"avgfee":{"$lte":int(qfee)}})
    
    for x in searchresults:
        templist.append({"name":x["name"],"phonenumber":x["phonenumber"],"field":x["field"],"avgfee":x["avgfee"]})
    print(templist)
    return templist
    