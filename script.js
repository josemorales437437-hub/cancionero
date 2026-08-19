const selector = document.getElementById('selector');
const titulo = document.getElementById('titulo');
const artista = document.getElementById('artista');
const letra = document.getElementById('contenedor-letra');
const btnImprimir = document.getElementById('btn-imprimir');
const btnSubir = document.getElementById('btn-subir');
const btnBajar = document.getElementById('btn-bajar');
const transpDisplay = document.getElementById('transp-display');

// ==========================================
// ¡AQUÍ ES SÚPER FÁCIL! Solo pega tu letra entre las comillas invertidas (` `)
// ==========================================
const listaCanciones = [
    {
        id: "de_aqui_hasta_el_final",
        titulo: "De aquí hasta el final",
        artista: "Bodas",
        letra: `
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
        `
    },
    {
        id: "Carros_del_Faraon",
        titulo: "Carros del Faraón",
        artista: "Alabanza",
        letra: `
    Dm                   C          Ab        A7     Dm
//Cantare al señor por siempre su diestra es todo poder//
    Dm      C
//Hecho al mar
             Dm
quien los perseguía
            C
jinete y caballo
           Dm
hecho a la mar//
    C        F      Gm            A7         
Hecho a la mar los carros del faraón Hey, Hey
Dm              C              Ab     A7           Dm
//La la la la la la la la la la la la la la la la la//
      Dm       C
//Mi padre es dios
          Dm
y yo lo exalto
      C
Mi padre es dios
         Dm
y lo exaltare//
  C          F      Gm          A7         
Hecho a la mar los carros del faraón Hey, Hey
    Dm              C              Ab     A7      Dm
//La la la la la la la la la la la la la la la la la//

        `
    },
     {
        id: "Saturame_o_Abrasame",
        titulo: "Saturame o Abrasame",
        artista: "Meditacion",
        letra: `

E               G#m      A   F#m B7         
Vengo a ti hoy señor postrado a tus pies
        E        G#m       A   F#m B7           
y me humillo mi señor necesito mas de ti. (2 veces)
B7      C#m            B7
estas aquí te puedo sentir
           C#m             B7      E
respiro tu paz a mi lado tu estas
E
Abrázame
         B7 C#m
llena mi vida
A          B7      E
dame más y más de ti. (2 veces)
        `
    },
   {
        id: "Algo esta_cayendo_aqui",
        titulo: "Algo está cayendo aquí",
        artista: "Meditacion",
        letra: `

     [Estrofa]
D                  Em  A                              
Algo está cayendo aquí
                    D   Bm
Es tan fuerte sobre mí
                Em A
Mis manos Levantare
            D       A
Y su gloria tocare. (2 veces)

	[Estrillo]      
A       D    
Está cayendo 
                A
su gloria sobre mí 
         Em
Sanando heridas 
               G
Levantando al caído 
                 A
su gloria está aquí. (2 veces)

                   D
      Su Gloria está aquí.     (final)   
        `
    },
      {
        id: "Aliviame",
        titulo: "Aliviame",
        artista: "Meditacion",
        letra: `
                [Estrofa 1]
 D                                         G
En esos momentos que siento que no tengo fuerzas
    D                                   A
Quisiera saber si me escuchar al tocar tu puerta
 D                                   G
Quisiera saber si me amas porque me siento sin amor
   D                                  A
Quisiera saber si mis lágrimas aliviaran este dolor.
  D
Alíviame
       F#m                        Bm
Ven y quítame estas cadenas socórreme
     F#m                          G
Si quieres no abras la puerta yo estaré bien
        D            A             D  A  D
Si solo sé que te interesa mi corazón. (2 veces)

                [Estrfa 2]
D                                        G              
En ese momento que todos me han dado la espalda
  D                              A
Quisiera saber oh Jesús si tú me amas
    D                               G
Quisiera saber si me amas porque me siento sin amor
    D                                  A           D
Quisiera saber si mis lágrimas aliviaran este dolor.

        `
    },
      {
        id: "Saturame_o_Abrasame",
        titulo: "Saturame o Abrasame",
        artista: "Meditacion",
        letra: `

E               G#m      A   F#m B7         
Vengo a ti hoy señor postrado a tus pies
        E        G#m       A   F#m B7           
y me humillo mi señor necesito mas de ti. (2 veces)
B7      C#m            B7
estas aquí te puedo sentir
           C#m             B7      E
respiro tu paz a mi lado tu estas
E
Abrázame
         B7 C#m
llena mi vida
A          B7      E
dame más y más de ti. (2 veces)
        `
    },
   {
        id: "Hoy_perdoname",
        titulo: "Hoy perdóname",
        artista: "Meditacion",
        letra: `

D       Bm     G Em     A
Hoy perdóname hoy por siempre
      D           D7
Sin mirar a la mentira 
      G        
Lo vacío en nuestras vidas
         D
Nuestras faltas
              A
De amor y caridad.
D       Bm     G Em     A
Hoy perdóname hoy por siempre
          D           D7
A un sabiendo que he caído
        G        
Que de ti siempre había huido 
        D
Hoy regreso arrepentido
         A           D
Vuelvo a ti vuelvo a ti.
        `
    },
    {
        id: "Levanto_mis_manos",
        titulo: "Levanto mis manos",
        artista: "Meditacion",
        letra: `

D D7         G       A              F#m    Bm
Levanto mis manos, aunque no tenga fuerzas
             Em    A                 D
Levanto mis manos, aunque tenga mil problemas.
D D7                G                  A
Cuando levanto mis manos comienzo a sentir 
      F#m                Bm
Una unción que me hace cantar
                    Em
Cuando levanto mis manos 
              A        D  D7
Comienzo a sentir el fuego
                    G                   A
Cuando levanto mis manos mis cargas se van 
        F#m           Bm
Nuevas fuerzas tú me das.
                Em                   A
Todo esto es posible todo esto es posible
         G       A     D
Cuando levanto mis manos.
        `
    },
    {
        id: "Oh_deja",
        titulo: "Oh deja",
        artista: "Meditacion",
        letra: `
          [Estrofa 1]
D D7    G                  A
Oh deja que el señor te envuelva
    F#m             Bm
En su espiritu de amor
   Em             A            D
Satisfaga hoy tú alma y corazon
D D7     G               A
Entregale lo que te impide
       F#m         Bm
Y su espiritu vendra
      Em          A      D
Sobre ti vida nueva te dara.
        [Estribillo]
D D7 G A       F#m  Bm    Em     A   D  D7
     Cristo, oh cristo, ven y llenanos
     G    A      F#m Bm  Em       A   D
     Cristo, oh cristo, llenanos de ti.
        [Estrofa 2]
D D7     G                A
Alzamos nuestra voz con gozo
    F#m              Bm
Nuestra alabanza a ti
       Em             A              D
Con dulzura te entregamos nuestro ser
D7       G            A
Entrega toda tu tristeza
       F#m         Bm
En el nombre de jesus
     Em            A             D
Y abundante vida hoy tendras en el.
        `   
    },
    {
        id: "Saname_Señor",
        titulo: "Saname Señor",
        artista: "Meditacion",
        letra: `
   [Estrofa]
D          Bm
Hoy señor Jesús
            Em          A
Vengo ante ti para alabarte
  D           Bm
Hoy señor Jesús
          Em            A
Con tu poder puedes cambiarme
 D           Bm
Hoy señor Jesús
             Em         A
Vengo ante ti para adorarte
D            Bm
Hoy señor Jesús
        Em            A
Con tu poder puedes sanarme.
         [Estribillo]
 D              Bm
Sáname, señor, hoy quiero vivir
G           Em             A
Dame de tu amor sin ti no puedo ser feliz
  D              Bm
Sáname, señor, líbrame del mal
G           Em             A           D
Toca el corazón para alcanzar la santidad.

        `
    },
    // Para agregar más, solo copia y pega otro bloque igual arriba de esta línea
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

// Cargar opciones en el menú desplegable
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