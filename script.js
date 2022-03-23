const lista = document.querySelector("#git-lista");
const beskrivning = document.querySelector(".description");
const array = [{"name": "git push","desc":"Pushar kod till repot."},
{"name": "git pull","desc":"Hämtar kod från repot."},
{"name": "git help","desc":"Får fram en meny med hjälpkommandon."},
{"name": "git add .","desc":"Lägger till alla ändringar i sitt lokala repo"},
{"name": "git status","desc":"Tar fram förändringar man gjort i koden."},
{"name": "git commit -m","desc":"Lägger till meddelande i pushen."},
{"name": "git checkout","desc":"Byter branch."},
{"name": "git checkout -b","desc":"Skapar ny branch och byter till den."},
{"name": "git revert","desc":"Rullar bak om man committat något"},
{"name": "git update","desc":"Uppdaterar git."}];

    for (let i = 0; i < array.length; i++) {
        const kommando = array[i];
        const a = document.createElement("a");
        a.innerText = `${kommando.name}`;
        a.href = `#${i}`;
        const sec = document.createElement("section");
        sec.setAttribute("id", i);
        sec.innerHTML = `<div class="sec-title">${kommando.name}</div>${kommando.desc}`;
        const li = document.createElement("li");
        li.appendChild(a);
        lista.appendChild(li);
        beskrivning.appendChild(sec);
        }