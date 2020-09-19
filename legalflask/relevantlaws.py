# -*- coding: utf-8 -*-
"""
Created on Sun Apr  5 18:51:13 2020

@author: Mohan
"""

import nltk
import yaml
import re
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

sentence =""
vocab=[]

keyword_stream = open('testyaml2.yml', 'r')
data = yaml.load(keyword_stream,Loader=yaml.FullLoader)
relevance_stream=open('testrel2.yml','r') #here
rel_data=yaml.load(relevance_stream,Loader=yaml.FullLoader)

def common(a,b):
    a_set=set(a)
    b_set=set(b)
    c_set=(a_set & b_set)
    return len(c_set)

def tokenize(sentence):
    words = []
    w = word_extraction(sentence)
    words.extend(w)
        
    words = sorted(list(set(words)))
    return words

def word_extraction(sentence):
    stop_words = set(stopwords.words('english')) 
    words = re.sub("[^\w]", " ",  sentence).split()
    cleaned_text = [w.lower() for w in words if w not in stop_words]
    return cleaned_text

def relevantlaws(probstring):
    
    global sentence
    sentence=probstring
    global vocab
    vocab=tokenize(sentence)
    
    
    lawlist=[]
    rellist=[]
    response=[]
    
    for i in range(0,len(vocab)):
        #templist=data[vocab[i]]
        templist=data.get(vocab[i],"none")
        if(templist!="none"):
            for j in range(0,len(templist)):
                lawlist.append(templist[j])
    
    lawlist = list(dict.fromkeys(lawlist))
    
    for i in range(len(lawlist)):
        law_keywords=rel_data.get(lawlist[i],[])
        total_words=len(law_keywords)
        if(law_keywords!="none"):
            similar_words=common(law_keywords,vocab)
        else:
            similar_words=0
        
        if(total_words!=0):
            relevance_percent=(similar_words/total_words)*100
            rellist.append(relevance_percent)
    
    print(lawlist)
    print(rellist)
    
    
    for i in range(0,len(lawlist)):
        response.append({"law":lawlist[i],"rel":rellist[i]})
    
    return response