@echo off
rem Imports the WordPress export downloaded in %1, then deploys it if %2 is "deploy".
rem Usage: scripts\windows\import-content.bat "D:\Downloads" [deploy]

cd /d "%~dp0..\.."

move "%~1\rolistespod*" therolistespodcastExport.zip
"C:\Program Files\7-Zip\7z.exe" x therolistespodcastExport.zip
move /Y "rolistespod.wordpress.*" "rolistespodExport"
ren rolistespodExport\therolistespodcast*.xml wordpress-export.xml
move /Y rolistespodExport\wordpress-export.xml wordpress-export.xml
del /Q therolistespodcastExport.zip
rmdir rolistespodExport
call npm run sanitize

if /i "%~2"=="deploy" call npm run rss-deploy
