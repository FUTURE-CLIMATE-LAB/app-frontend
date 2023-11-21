from selenium import webdriver
from time import sleep

driver = webdriver.Chrome("C:\Users\PC\Downloads\Compressed\chromedriver")
driver.get("https://www.google.com/maps/@-16.2883,-63.549347,6z?entry=ttu")
sleep(2)

def searchplace():
      Place = driver.find_element_by_class_name("searchboxinput xiQnY")
      Place.send_keys("Cochabamba, Bolivia")
      Submit = driver.find_element_by_xpath("/html/body/div[3]/div[8]/div[3]/div[1]/div[1]/div/div[2]/div[1]/button")
      Submit.click()
searchplace():
    
def directions():
      sleep(10)
      directions = driver.find_element_by_xpath("/html/body/div[3]/div[8]/div[9]/div/div/div[1]/div[2]/div/div[1]/div/div/div[4]/div[1]/button/span/span")
      directions.click()
directions()

def find():
      sleep(6)
      find = driver.find_element_by_xpath("/html/body/div[3]/div[8]/div[3]/div[1]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[1]/div/input")   
      find.send_keys("Cochabamba, Bolivia")        
      sleep(6)
      search = driver.find_element_by_xpath("/html/body/div[3]/div[8]/div[3]/div[1]/div[2]/div/div[3]/div[1]/div[1]/div[2]/button[1]/span") 
      search.click()  
find()          

def kilometers():
    sleep(3)
    Totalkilometers = driver.find_element_by_xpath("/html/body/div[3]/div[8]/div[9]/div/div/div[1]/div[2]/div/div[1]/div/div/div[4]/div[1]/div[1]/div/div[1]/div[2]/div")           
    print("Totalkilometers:", Totalkilometers.text)
    sleep(5)
    Bus = driver.find_element_by_xpath("/html/body/div[3]/div[8]/div[9]/div/div/div[1]/div[2]/div/div[1]/div/div/div[4]/div[1]/div[1]/div/div[1]/div[1]")
    print("Bus Travel:", Bus.text)
    sleep(3)
kilometers()