move "D:\Downloads\rolistespod*" therolistespodcastExport.zip
"C:\Program Files\7-Zip\7z.exe" x therolistespodcastExport.zip
move /Y "rolistespod.wordpress.*" "rolistespodExport" 
ren rolistespodExport\therolistespodcast*.xml therolistespodcast.xml
move rolistespodExport\therolistespodcast.xml src\assets
del /Q therolistespodcastExport.zip
rmdir rolistespodExport









































