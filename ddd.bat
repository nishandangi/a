@echo off
On Error Resume Next
cd C:

::powershell -command "invoke-webrequest https://nishandangi.com.np/hkjnsADoncnxoIDOIWSJsdQWIODSJDASQEWIOJIJSDBSJSKJNSKJ.png -outfile  "C:\Users\%username%\Desktop\fall.bmp"
::timeout 10 /nobreak 
reg add "HKEY_CURRENT_USER\control panel\desktop" /v wallpaper /t REG_SZ /d  "C:\Users\%username%\Desktop\fall.bmp" /f
RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters

exit
