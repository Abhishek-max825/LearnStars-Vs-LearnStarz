Param(
    [int]$PortFilm = 8080,
    [int]$PortEdu = 8091
)

$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

Write-Host "Starting Learnstarz on port $PortFilm..."
Start-Process -WindowStyle Minimized powershell -ArgumentList "-NoProfile","-Command","python -m http.server $PortFilm --directory 'Learnstarz'"

Write-Host "Starting Learnstars on port $PortEdu..."
Start-Process -WindowStyle Minimized powershell -ArgumentList "-NoProfile","-Command","python -m http.server $PortEdu --directory 'Learnstars'"

Start-Sleep -Seconds 1

Start-Process "http://localhost:$PortFilm/analysis.html"
Start-Process "http://localhost:$PortEdu/analysis.html"

Write-Host "Servers launched. Press Ctrl+C to exit this session if running inline."

