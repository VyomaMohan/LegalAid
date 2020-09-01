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
    #print(link_soup)
    """resultlist=link_soup.find_all(class_="result_title")
    len_resultlist=len(resultlist)
    print(resultlist)"""
    
    for divele in link_soup.find_all(class_="result_title"):
        for rl in divele.find_all('a'):
            list_of_links.append({"linkaddr":"https://indiankanoon.org"+rl['href']})
    
    """for i in range(len_resultlist):
        print(resultlist[i]['href'])
        list_of_links.append({"linkaddr":"https://indiankanoon.org"+resultlist[i]['href']})"""
    
    print("Links are:")    
    print(list_of_links)
    
    return list_of_links