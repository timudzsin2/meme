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
with open("images.js", "w", encoding="utf-8") as f:
    f.write(js_szoveg)


# videók