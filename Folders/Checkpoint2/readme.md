Sviluppiamo un Pokédex usando l’API https://pokeapi.co.
Punti obbligatori:
1. Creiamo una costante valorizzata con il nome del pokemon;
2. Tramite una chiamata GET a
“https://pokeapi.co/api/v2/pokemon/{POKEMON_NAME}” ricaviamo tutte le
informazioni necessarie;
3. Creare e fare il log di un oggetto con le informazioni principali del pokemon:
a. name;
b. base_experience;
c. abilities;
4. Ciclare le abilità e stampare solo quelle che hanno la proprietà is_hidden uguale
a false
5. Gestire i possibili errori della chiamata
Punti opzionali:
1. Creare 2 <p> in cui stampare le informazioni a e b del punto 3 e una lista <ul> in
cui, per ogni <li>, stampare le abilità del Pokemon