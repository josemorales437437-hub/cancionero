const selector = document.getElementById('selector');
const titulo = document.getElementById('titulo');
const artista = document.getElementById('artista');
const letra = document.getElementById('contenedor-letra');
const btnImprimir = document.getElementById('btn-imprimir');
const btnSubir = document.getElementById('btn-subir');
const btnBajar = document.getElementById('btn-bajar');
const transpDisplay = document.getElementById('transp-display');

// Lista de canciones con la letra incluida directamente
const listaCanciones = [
    {
        id: "de_aqui_hasta_el_final",
        titulo: "De aquí hasta el final",
        artista: "Bodas",
        letra: `[Verso 1]
    D              A7     Bm
De aquí hasta el final contigo
   G             Em   A7
de hoy hasta la eternidad,
  D               A7    Bm
será el Señor nuestro camino
      G            Em    A7
y su amor será nuestra razón.

    D              A7     Bm
De aquí hasta el final contigo
   G             Em   A7
de hoy hasta la eternidad,
  D               A7    Bm
será el Señor nuestro camino
      G            Em    A7
y su amor será nuestra razón.

D       F#      Bm
Para ti yo seré luz cuando no puedas ver
G         Em             A7
para mi serás sol cuando llueva,
D       F#      Bm
trataré para ti de ser cada vez mejor
G    A7            D
y llenarte con mi amor.

D       F#      Bm
Para ti yo seré luz cuando no puedas ver
G         Em             A7
para mi serás sol cuando llueva,
D       F#      Bm
trataré para ti de ser cada vez mejor
G    A7            D
y llenarte con mi amor.
    }
    // Agrega más canciones aquí copiando la misma estructura
];

let textoOriginal = "";
let semitonosActuales = 0;  

const escala = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const bemoles = {'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#'};

function transponerAcorde(acorde, pasos) {
    for (let b in bemoles) {
        if (acorde.startsWith(b)) {
            acorde = acorde.replace(b, bemoles[b]);
        }
    }
    const match = acorde.match(/^([A-G][#]?)(.*)$/);
    if (!match) return acorde;

    const notaBase = match[1];
    const sufijo = match[2];

    let index = escala.indexOf(notaBase);
    if (index === -1) return acorde;

    let nuevoIndex = (index + pasos) % 12;
    if (nuevoIndex < 0) nuevoIndex += 12;

    return escala[nuevoIndex] + sufijo;
}

function actualizarVisualizacion() {
    if (!textoOriginal) return;

    let textoProcesado = textoOriginal;

    if (semitonosActuales !== 0) {
        const regexAcordes = /\b([A-G][#b]?[m|#|maj|sus|dim|7]*)\b/g;
        textoProcesado = textoProcesado.replace(regexAcordes, (acorde) => {
            return transponerAcorde(acorde, semitonosActuales);
        });
    }

    const regexColor = /\b([A-G][#b]?[m|#|maj|sus|dim|7]*)\b/g;
    let letraConColor = textoProcesado.replace(regexColor, '<span class="acorde">$1</span>');
    
    letra.innerHTML = letraConColor;
    transpDisplay.innerText = semitonosActuales === 0 ? "Original" : (semitonosActuales > 0 ? `+${semitonosActuales}` : semitonosActuales);
}

// Cargar opciones en el menú
listaCanciones.forEach(cancion => {
    let option = document.createElement('option');
    option.value = cancion.id;
    option.text = `${cancion.titulo} - ${cancion.artista}`;
    selector.appendChild(option);
});

// Evento al cambiar de canción
selector.addEventListener('change', (e) => {
    const idCancion = e.target.value;
    const info = listaCanciones.find(c => c.id === idCancion);
    semitonosActuales = 0;

    if (info) {
        titulo.innerText = info.titulo;
        artista.innerText = info.artista;
        textoOriginal = info.letra;
        actualizarVisualizacion();
    } else {
        titulo.innerText = "Título";
        artista.innerText = "Artista";
        letra.innerText = "";
        textoOriginal = "";
        transpDisplay.innerText = "Original";
    }
});

btnSubir.addEventListener('click', () => { if (textoOriginal) { semitonosActuales++; actualizarVisualizacion(); } });
btnBajar.addEventListener('click', () => { if (textoOriginal) { semitonosActuales--; actualizarVisualizacion(); } });
btnImprimir.addEventListener('click', () => window.print());