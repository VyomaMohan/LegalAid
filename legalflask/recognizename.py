# -*- coding: utf-8 -*-
"""
Created on Wed Apr 22 20:46:29 2020

@author: Mohan
"""

import spacy
from spacy import displacy
from collections import Counter
import en_core_web_sm
from itertools import chain


def recognizename(text):
    nlp = en_core_web_sm.load()
    temp_list=nlp(text)
    print(temp_list)
    
    name_list=[]

    for i in temp_list.ents:
        if i.text.isdigit()==False:
            name_list.append({"name":i.text,"label":i.label})
    
    #res = list(set(chain.from_iterable(sub.values() for sub in name_list)))
    
    return name_list
    


