# -*- coding: utf-8 -*-
"""
Created on Wed Apr 22 17:30:28 2020

@author: Mohan
"""

import cv2
import pytesseract
import PIL
from PIL import Image

def documentreader(imagefile):
    
    pil_image=Image.open(imagefile)
    #img = cv2.imread(pil_image, cv2.IMREAD_UNCHANGED)
    #print(pil_image.width)
    #decoded_image=cv2.imdecode(imagefile,cv2.IMREAD_COLOR)
    #img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    
    pytesseract.pytesseract.tesseract_cmd=r"C:\Program Files\Tesseract-OCR\tesseract.exe"
    custom_config = r'--oem 3 --psm 6'
    
    passageString=pytesseract.image_to_string(pil_image,lang='eng',config=custom_config)
    passageString=passageString.replace('\n',' ')
    
    return passageString
