// =====================
// Lista de verbos irregulares (ampliada)
// =====================
// Estructura:
//  base: infinitivo
//  past: pasado simple
//  participle: participio pasado
//  meaning: traducción / ayuda en español (opcional)
const VERBS = [
    { base: "arise", past: "arose", participle: "arisen", meaning: "surgir / levantarse" },
    { base: "be", past: "was/were", participle: "been", meaning: "ser / estar" },
    { base: "bear", past: "bore", participle: "borne/born", meaning: "soportar / dar a luz" },
    { base: "beat", past: "beat", participle: "beaten", meaning: "golpear / vencer" },
    { base: "become", past: "became", participle: "become", meaning: "convertirse" },
    { base: "begin", past: "began", participle: "begun", meaning: "empezar" },
    { base: "bend", past: "bent", participle: "bent", meaning: "doblar" },
    { base: "bet", past: "bet", participle: "bet", meaning: "apostar" },
    { base: "bid", past: "bid/bade", participle: "bid/bidden", meaning: "ofertar / pujar" },
    { base: "bite", past: "bit", participle: "bitten", meaning: "morder" },
    { base: "bleed", past: "bled", participle: "bled", meaning: "sangrar" },
    { base: "blow", past: "blew", participle: "blown", meaning: "soplar" },
    { base: "break", past: "broke", participle: "broken", meaning: "romper" },
    { base: "breed", past: "bred", participle: "bred", meaning: "criar / reproducir" },
    { base: "bring", past: "brought", participle: "brought", meaning: "traer" },
    { base: "broadcast", past: "broadcast", participle: "broadcast", meaning: "transmitir" },
    { base: "build", past: "built", participle: "built", meaning: "construir" },
    { base: "burn", past: "burned/burnt", participle: "burned/burnt", meaning: "quemar" },
    { base: "burst", past: "burst", participle: "burst", meaning: "reventar / explotar" },
    { base: "buy", past: "bought", participle: "bought", meaning: "comprar" },
    { base: "catch", past: "caught", participle: "caught", meaning: "atrapar" },
    { base: "choose", past: "chose", participle: "chosen", meaning: "elegir" },
    { base: "cling", past: "clung", participle: "clung", meaning: "aferrarse" },
    { base: "come", past: "came", participle: "come", meaning: "venir" },
    { base: "cost", past: "cost", participle: "cost", meaning: "costar" },
    { base: "creep", past: "crept", participle: "crept", meaning: "arrastrarse / deslizarse" },
    { base: "cut", past: "cut", participle: "cut", meaning: "cortar" },
    { base: "deal", past: "dealt", participle: "dealt", meaning: "tratar / negociar" },
    { base: "dig", past: "dug", participle: "dug", meaning: "cavar" },
    { base: "do", past: "did", participle: "done", meaning: "hacer" },
    { base: "draw", past: "drew", participle: "drawn", meaning: "dibujar / arrastrar" },
    { base: "dream", past: "dreamed/dreamt", participle: "dreamed/dreamt", meaning: "soñar" },
    { base: "drink", past: "drank", participle: "drunk", meaning: "beber" },
    { base: "drive", past: "drove", participle: "driven", meaning: "conducir" },
    { base: "eat", past: "ate", participle: "eaten", meaning: "comer" },
    { base: "fall", past: "fell", participle: "fallen", meaning: "caer" },
    { base: "feed", past: "fed", participle: "fed", meaning: "alimentar" },
    { base: "feel", past: "felt", participle: "felt", meaning: "sentir" },
    { base: "fight", past: "fought", participle: "fought", meaning: "pelear" },
    { base: "find", past: "found", participle: "found", meaning: "encontrar" },
    { base: "flee", past: "fled", participle: "fled", meaning: "huir" },
    { base: "fly", past: "flew", participle: "flown", meaning: "volar" },
    { base: "forbid", past: "forbade/forbad", participle: "forbidden", meaning: "prohibir" },
    { base: "forget", past: "forgot", participle: "forgotten", meaning: "olvidar" },
    { base: "forgive", past: "forgave", participle: "forgiven", meaning: "perdonar" },
    { base: "freeze", past: "froze", participle: "frozen", meaning: "congelar" },
    { base: "get", past: "got", participle: "got/gotten", meaning: "obtener / conseguir" },
    { base: "give", past: "gave", participle: "given", meaning: "dar" },
    { base: "go", past: "went", participle: "gone", meaning: "ir" },
    { base: "grow", past: "grew", participle: "grown", meaning: "crecer" },
    { base: "hang", past: "hung", participle: "hung", meaning: "colgar" },
    { base: "have", past: "had", participle: "had", meaning: "tener" },
    { base: "hear", past: "heard", participle: "heard", meaning: "oír" },
    { base: "hide", past: "hid", participle: "hidden", meaning: "esconder" },
    { base: "hit", past: "hit", participle: "hit", meaning: "golpear" },
    { base: "hold", past: "held", participle: "held", meaning: "sostener" },
    { base: "hurt", past: "hurt", participle: "hurt", meaning: "herir / doler" },
    { base: "keep", past: "kept", participle: "kept", meaning: "mantener / guardar" },
    { base: "kneel", past: "knelt/kneeled", participle: "knelt/kneeled", meaning: "arrodillarse" },
    { base: "know", past: "knew", participle: "known", meaning: "saber / conocer" },
    { base: "lay", past: "laid", participle: "laid", meaning: "poner / colocar" },
    { base: "lead", past: "led", participle: "led", meaning: "liderar / guiar" },
    { base: "lean", past: "leaned/leant", participle: "leaned/leant", meaning: "inclinarse" },
    { base: "leap", past: "leaped/leapt", participle: "leaped/leapt", meaning: "saltar" },
    { base: "learn", past: "learned/learnt", participle: "learned/learnt", meaning: "aprender" },
    { base: "leave", past: "left", participle: "left", meaning: "dejar / irse" },
    { base: "lend", past: "lent", participle: "lent", meaning: "prestar" },
    { base: "let", past: "let", participle: "let", meaning: "permitir / dejar" },
    { base: "lie", past: "lay", participle: "lain", meaning: "yacer / estar acostado" },
    { base: "light", past: "lit/lighted", participle: "lit/lighted", meaning: "encender / iluminar" },
    { base: "lose", past: "lost", participle: "lost", meaning: "perder" },
    { base: "make", past: "made", participle: "made", meaning: "hacer / fabricar" },
    { base: "mean", past: "meant", participle: "meant", meaning: "significar / querer decir" },
    { base: "meet", past: "met", participle: "met", meaning: "conocer / reunirse" },
    { base: "pay", past: "paid", participle: "paid", meaning: "pagar" },
    { base: "put", past: "put", participle: "put", meaning: "poner" },
    { base: "read", past: "read", participle: "read", meaning: "leer" },
    { base: "ride", past: "rode", participle: "ridden", meaning: "montar / conducir" },
    { base: "ring", past: "rang", participle: "rung", meaning: "sonar / llamar" },
    { base: "rise", past: "rose", participle: "risen", meaning: "elevarse / levantarse" },
    { base: "run", past: "ran", participle: "run", meaning: "correr" },
    { base: "say", past: "said", participle: "said", meaning: "decir" },
    { base: "see", past: "saw", participle: "seen", meaning: "ver" },
    { base: "seek", past: "sought", participle: "sought", meaning: "buscar" },
    { base: "sell", past: "sold", participle: "sold", meaning: "vender" },
    { base: "send", past: "sent", participle: "sent", meaning: "enviar" },
    { base: "set", past: "set", participle: "set", meaning: "poner / ajustar" },
    { base: "shake", past: "shook", participle: "shaken", meaning: "sacudir" },
    { base: "shine", past: "shone", participle: "shone", meaning: "brillar" },
    { base: "shoot", past: "shot", participle: "shot", meaning: "disparar" },
    { base: "show", past: "showed", participle: "shown/showed", meaning: "mostrar" },
    { base: "shrink", past: "shrank/shrunk", participle: "shrunk/shrunken", meaning: "encogerse" },
    { base: "shut", past: "shut", participle: "shut", meaning: "cerrar" },
    { base: "sing", past: "sang", participle: "sung", meaning: "cantar" },
    { base: "sink", past: "sank/sunk", participle: "sunk", meaning: "hundirse" },
    { base: "sit", past: "sat", participle: "sat", meaning: "sentarse" },
    { base: "sleep", past: "slept", participle: "slept", meaning: "dormir" },
    { base: "slide", past: "slid", participle: "slid", meaning: "deslizarse" },
    { base: "speak", past: "spoke", participle: "spoken", meaning: "hablar" },
    { base: "spend", past: "spent", participle: "spent", meaning: "gastar / pasar (tiempo)" },
    { base: "spill", past: "spilled/spilt", participle: "spilled/spilt", meaning: "derramar" },
    { base: "spin", past: "spun", participle: "spun", meaning: "girar / hilar" },
    { base: "spoil", past: "spoiled/spoilt", participle: "spoiled/spoilt", meaning: "arruinar / estropear" },
    { base: "spread", past: "spread", participle: "spread", meaning: "extender / esparcir" },
    { base: "spring", past: "sprang/sprung", participle: "sprung", meaning: "saltar / brotar" },
    { base: "stand", past: "stood", participle: "stood", meaning: "estar de pie" },
    { base: "steal", past: "stole", participle: "stolen", meaning: "robar" },
    { base: "stick", past: "stuck", participle: "stuck", meaning: "pegar / adherirse" },
    { base: "sting", past: "stung", participle: "stung", meaning: "picar" },
    { base: "stink", past: "stank/stunk", participle: "stunk", meaning: "apestar" },
    { base: "strike", past: "struck", participle: "struck/stricken", meaning: "golpear / hacer huelga" },
    { base: "swear", past: "swore", participle: "sworn", meaning: "jurar" },
    { base: "sweep", past: "swept", participle: "swept", meaning: "barrer" },
    { base: "swim", past: "swam", participle: "swum", meaning: "nadar" },
    { base: "swing", past: "swung", participle: "swung", meaning: "balancearse" },
    { base: "take", past: "took", participle: "taken", meaning: "tomar / llevar" },
    { base: "teach", past: "taught", participle: "taught", meaning: "enseñar" },
    { base: "tear", past: "tore", participle: "torn", meaning: "rasgar / romper" },
    { base: "tell", past: "told", participle: "told", meaning: "contar / decir" },
    { base: "think", past: "thought", participle: "thought", meaning: "pensar" },
    { base: "throw", past: "threw", participle: "thrown", meaning: "lanzar" },
    { base: "understand", past: "understood", participle: "understood", meaning: "entender" },
    { base: "wake", past: "woke/waked", participle: "woken/waked", meaning: "despertar" },
    { base: "wear", past: "wore", participle: "worn", meaning: "llevar puesto / usar" },
    { base: "win", past: "won", participle: "won", meaning: "ganar" },
    { base: "withdraw", past: "withdrew", participle: "withdrawn", meaning: "retirar / retirarse" },
    { base: "write", past: "wrote", participle: "written", meaning: "escribir" }
];

// =====================
// Referencias al DOM
// =====================
const questionCountInput = document.getElementById("questionCount");
const startBtn = document.getElementById("startBtn");
const quizSection = document.getElementById("quizSection");
const quizForm = document.getElementById("quizForm");
const questionsContainer = document.getElementById("questionsContainer");
const resultPanel = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");
const checkBtn = document.getElementById("checkBtn");

// Estado actual del quiz
let currentQuestions = [];

// =====================
// Utilidades
// =====================

// Barajar un array (Fisher–Yates)
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Normaliza un texto para comparar (minúsculas, sin espacios ni guiones)
function normalize(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[\s-]+/g, "");
}

// Compara la respuesta del usuario con la(s) solución(es)
function isCorrectAnswer(userInput, correctAnswer) {
    if (!userInput || !correctAnswer) return false;

    const normalizedUser = normalize(userInput);

    // correctAnswer puede ser "learned/learnt", "got, gotten", etc.
    const options = correctAnswer
        .split(/[\/,]/) // separa por / o ,
        .map(option => normalize(option))
        .filter(option => option.length > 0);

    return options.includes(normalizedUser);
}

// Limpia panel de resultado
function clearResult() {
    resultPanel.textContent = "";
    resultPanel.className = "result-panel";
}

// Muestra resultado
function showResult(message, type = "success") {
    resultPanel.textContent = message;
    resultPanel.className = `result-panel visible ${type}`;
}

// =====================
// Lógica principal del quiz
// =====================

function createQuiz() {
    clearResult();
    questionsContainer.innerHTML = "";

    const requested = parseInt(questionCountInput.value, 10);

    if (isNaN(requested) || requested <= 0) {
        showResult("Por favor ingresa un número válido de preguntas.", "warning");
        return;
    }

    const questionCount = Math.min(requested, VERBS.length);

    currentQuestions = shuffle(VERBS).slice(0, questionCount);

    const table = document.createElement("table");
    table.className = "questions-table";

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>#</th>
            <th>Infinitivo</th>
            <th>Significado</th>
            <th>Pasado simple</th>
            <th>Participio pasado</th>
        </tr>
    `;

    const tbody = document.createElement("tbody");

    currentQuestions.forEach((verb, index) => {
        const tr = document.createElement("tr");
        tr.dataset.base = verb.base;
        tr.dataset.past = verb.past;
        tr.dataset.participle = verb.participle;

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${verb.base}</strong></td>
            <td>${verb.meaning || ""}</td>
            <td class="cell-past">
                <input
                    type="text"
                    name="past-${index}"
                    autocomplete="off"
                    placeholder="Pasado simple"
                />
                <div class="correct-answer"></div>
            </td>
            <td class="cell-participle">
                <input
                    type="text"
                    name="participle-${index}"
                    autocomplete="off"
                    placeholder="Participio pasado"
                />
                <div class="correct-answer"></div>
            </td>
        `;

        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    questionsContainer.appendChild(table);

    quizSection.classList.remove("hidden");
    checkBtn.disabled = false;
}

function handleSubmit(event) {
    event.preventDefault();

    if (!currentQuestions.length) {
        showResult("Primero debes comenzar un quiz.", "warning");
        return;
    }

    let totalFields = currentQuestions.length * 2;
    let correctFields = 0;

    const rows = questionsContainer.querySelectorAll("tbody tr");

    rows.forEach((row) => {
        const correctPast = row.dataset.past;
        const correctParticiple = row.dataset.participle;

        const pastCell = row.querySelector(".cell-past");
        const participleCell = row.querySelector(".cell-participle");

        const pastInput = pastCell.querySelector("input");
        const participleInput = participleCell.querySelector("input");

        const pastAnswerDiv = pastCell.querySelector(".correct-answer");
        const participleAnswerDiv = participleCell.querySelector(".correct-answer");

        pastCell.classList.remove("correct", "incorrect");
        participleCell.classList.remove("correct", "incorrect");
        pastAnswerDiv.textContent = "";
        participleAnswerDiv.textContent = "";

        if (isCorrectAnswer(pastInput.value, correctPast)) {
            correctFields++;
            pastCell.classList.add("correct");
        } else {
            pastCell.classList.add("incorrect");
            pastAnswerDiv.textContent = `✔ ${correctPast}`;
        }

        if (isCorrectAnswer(participleInput.value, correctParticiple)) {
            correctFields++;
            participleCell.classList.add("correct");
        } else {
            participleCell.classList.add("incorrect");
            participleAnswerDiv.textContent = `✔ ${correctParticiple}`;
        }
    });

    const percentage = (correctFields / totalFields) * 100;
    const grade = (correctFields / totalFields) * 10;

    let type = "success";
    let messageExtra = "";

    if (grade >= 8) {
        messageExtra = "¡Excelente trabajo! 💪";
    } else if (grade >= 6) {
        type = "warning";
        messageExtra = "Vas bien, pero puedes seguir mejorando. 🙂";
    } else {
        type = "danger";
        messageExtra = "Te recomiendo repasar un poco más. ¡Ánimo! 📚";
    }

    const message = [
        `Respuestas correctas: ${correctFields} de ${totalFields} formas verbales.`,
        `Porcentaje: ${percentage.toFixed(1)}%`,
        `Nota promedio: ${grade.toFixed(2)} / 10`,
        messageExtra
    ].join(" | ");

    showResult(message, type);
    checkBtn.disabled = true;
}

function handleReset() {
    createQuiz();
}

// =====================
// Eventos
// =====================
startBtn.addEventListener("click", createQuiz);
quizForm.addEventListener("submit", handleSubmit);
resetBtn.addEventListener("click", handleReset);
``