import os


# képek
# fájlok beolvasása a mappából
fajlok = os.listdir("images")

# JavaScript kód összeállítása
js_szoveg = 'export const IMAGES = [\n'
i = 0
while i < len(fajlok):
    sor = '    "' + 'images' + '/' + fajlok[i] + '"'
    if i < len(fajlok) - 1:
        sor += ','
    js_szoveg += sor + '\n'
    i += 1
js_szoveg += '];\n'

# Kiírás fájlba
with open("imagesArray.js", "w", encoding="utf-8") as f:
    f.write(js_szoveg)



# videók
# fájlok beolvasása a mappából
fajlok = os.listdir("videos")

# JavaScript kód összeállítása
js_szoveg = 'export const VIDEOS = [\n'
i = 0
while i < len(fajlok):
    sor = '    "' + 'videos' + '/' + fajlok[i] + '"'
    if i < len(fajlok) - 1:
        sor += ','
    js_szoveg += sor + '\n'
    i += 1
js_szoveg += '];\n'

# Kiírás fájlba
with open("videosArray.js", "w", encoding="utf-8") as f:
    f.write(js_szoveg)



# hang effektek
# fájlok beolvasása a mappából
fajlok = os.listdir("soundEffects")

# JavaScript kód összeállítása
js_szoveg = 'export const SOUND_EFFECTS = [\n'
i = 0
while i < len(fajlok):
    sor = '    "' + 'sounds' + '/' + fajlok[i] + '"'
    if i < len(fajlok) - 1:
        sor += ','
    js_szoveg += sor + '\n'
    i += 1
js_szoveg += '];\n'

# Kiírás fájlba
with open("soundEffectsArray.js", "w", encoding="utf-8") as f:
    f.write(js_szoveg)



# háttér hangok
# fájlok beolvasása a mappából
fajlok = os.listdir("backgroundSounds")

# JavaScript kód összeállítása
js_szoveg = 'export const BACKGROUND_SOUNDS = [\n'
i = 0
while i < len(fajlok):
    sor = '    "' + 'bsounds' + '/' + fajlok[i] + '"'
    if i < len(fajlok) - 1:
        sor += ','
    js_szoveg += sor + '\n'
    i += 1
js_szoveg += '];\n'

# Kiírás fájlba
with open("backgroundSoundsArray.js", "w", encoding="utf-8") as f:
    f.write(js_szoveg)
