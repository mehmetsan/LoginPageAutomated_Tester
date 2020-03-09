'''
    Written by: Mehmet Sanisoğlu
'''

from selenium import webdriver
import time
import os

file = open("inputs.txt", "r")
tasks = []

for each in file:
    line = each.split()
    username = line[0]
    password = line[1]
    des = line[2:]
    description = ""

    for each in des:
        description+= each
        description+= " "

    entry = [username,password,description]
    tasks.append(entry)



path = os.getcwd() + "\\login.html"
driver = webdriver.Chrome("C:\\webdrivers\\chromedriver.exe")
driver.get(path)


for each in tasks:

    userId = each[0]
    passWord = each[1]
    descript = each[2]

    print(descript)

    loginId = driver.find_element_by_id('loginField')
    loginId.clear()
    loginId.send_keys(userId)

    password = driver.find_element_by_id('passwordField')
    password.clear()
    password.send_keys(passWord)

    login = driver.find_element_by_id('submit')
    login.click()

    alert = driver.switch_to_alert()
    time.sleep(3)
    alert.dismiss()
