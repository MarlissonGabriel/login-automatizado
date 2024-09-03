import pyautogui
import time

time.sleep(1)
pyautogui.press("win")
time.sleep(1)
pyautogui.write("Opera")
time.sleep(1)
pyautogui.press("enter")
time.sleep(1)
pyautogui.write("http://127.0.0.1:5500/index.html")
pyautogui.press("enter")
time.sleep(2)
pyautogui.press("tab")
pyautogui.write("marlisson2003")
pyautogui.press("enter")
pyautogui.write("@MinhaSenha1")
pyautogui.press("enter")