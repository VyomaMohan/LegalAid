# -*- coding: utf-8 -*-
"""
Created on Tue Mar  3 14:14:53 2020

@author: Mohan
"""
import requests
from bs4 import BeautifulSoup

def webscrapingprog(probstring):
    list_of_links=[]
    
    page = requests.get("https://indiankanoon.org/search/?formInput="+probstring)
    
    link_soup = BeautifulSoup(page.content, 'html.parser')
    resultlist=link_soup.find_all(class_="result_url")
    len_resultlist=len(resultlist)
    
    for i in range(len_resultlist):
        list_of_links.append({"linkaddr":"https://indiankanoon.org"+resultlist[i]['href']})
    
    return list_of_links