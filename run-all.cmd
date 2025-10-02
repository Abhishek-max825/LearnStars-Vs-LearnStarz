@echo off
setlocal
cd /d "%~dp0"

REM Start Learnstarz (films) on 8080
start "Learnstarz-8080" cmd /c python -m http.server 8080 --directory "Learnstarz"

@REM REM Start Learnstars (education) on 8091
@REM start "Learnstars-8091" cmd /c python -m http.server 8091 --directory "Learnstars"

REM Give servers a moment to boot
timeout /t 1 /nobreak >nul

REM Open analysis pages
start "" http://localhost:8080/index.html
@REM start "" http://localhost:8091/analysis.html

echo Both servers started. Close this window if not needed.
endlocal

