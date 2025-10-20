// BANCOS DE QUESTÕES (Estudante e Professor)
const questionsEstudante = [ { q: "Quanto é 2^3 ?", options: ["6", "8", "9", "12"], correct: 1, pillar: "Algoritmos", pillarTip: "Execute a multiplicação repetida: 2 × 2 × 2.", explanation: "2^3 significa 2 multiplicado por si mesmo 3 vezes: 2 × 2 × 2 = 8.", example: "2 × 2 = 4 → 4 × 2 = 8 ⇒ resposta 8." }, { q: "Qual o próximo número da sequência 1,2,3,4,... ?", options: ["5", "6", "7", "8"], correct: 0, pillar: "Reconhecimento de Padrões", pillarTip: "Observe o padrão (aumenta de 1 em 1).", explanation: "A sequência aumenta de 1: 4 + 1 = 5.", example: "4 + 1 = 5." }, { q: "Qual é 1/2 de 10?", options: ["2", "3", "5", "4"], correct: 2, pillar: "Abstração", pillarTip: "'Meio' significa dividir por 2; ignore detalhes irrelevantes.", explanation: "Metade de 10 é 10 ÷ 2 = 5.", example: "10 ÷ 2 = 5." }, { q: "Se cada pacote tem 4 balas, quantas balas em 3 pacotes?", options: ["7", "10", "12", "9"], correct: 2, pillar: "Decomposição", pillarTip: "Quebre: 3 pacotes × 4 balas por pacote.", explanation: "3 × 4 = 12.", example: "3 × 4 = 12." }, { q: "Qual conjunto contém apenas inteiros? {1/2,2,3} {1,-2,0} {π,2,5} {√2,3,4}", options: ["1", "2", "3", "4"], correct: 1, pillar: "Reconhecimento de Padrões", pillarTip: "Inteiros são números sem parte fracionária.", explanation: "{1,-2,0} são todos inteiros; outros têm frações/irracionais.", example: "Verificar: 1 inteiro, -2 inteiro, 0 inteiro." }, { q: "Quanto é 3+4?", options: ["5", "6", "7", "8"], correct: 2, pillar: "Algoritmos", pillarTip: "Siga passos simples de soma.", explanation: "3 + 4 = 7.", example: "3 + 4 = 7." }, { q: "Qual é 10 − 7?", options: ["1", "2", "3", "4"], correct: 2, pillar: "Algoritmos", pillarTip: "Subtraia seguindo a ordem correta.", explanation: "10 − 7 = 3.", example: "10 − 7 = 3." }, { q: "Complete: 5,10,15,... próximo?", options: ["16", "17", "18", "20"], correct: 3, pillar: "Reconhecimento de Padrões", pillarTip: "A sequência aumenta de 5 em 5.", explanation: "Último 15 + 5 = 20.", example: "15 + 5 = 20." }, { q: "Qual fração representa metade?", options: ["1/2", "1/3", "1/4", "2/3"], correct: 0, pillar: "Abstração", pillarTip: "'Metade' é 1/2, abstraia palavras para a operação.", explanation: "Metade = 1/2.", example: "Meio = 1/2." }, { q: "Se tenho 2 grupos de 3 maçãs, total?", options: ["5", "6", "7", "8"], correct: 1, pillar: "Decomposição", pillarTip: "Multiplique número de grupos pelo número por grupo.", explanation: "2 × 3 = 6.", example: "2 × 3 = 6." }, { q: "Qual número é par? 7, 12, 9, 15", options: ["7", "12", "9", "15"], correct: 1, pillar: "Reconhecimento de Padrões", pillarTip: "Números pares são divisíveis por 2.", explanation: "12 ÷ 2 = 6 → é par.", example: "12 é divisível por 2." }, { q: "Quanto é 4 × 2?", options: ["6", "7", "8", "9"], correct: 2, pillar: "Algoritmos", pillarTip: "Multiplicação direta.", explanation: "4 × 2 = 8.", example: "4 × 2 = 8." }, { q: "1 + 1 = ?", options: ["1", "2", "3", "4"], correct: 1, pillar: "Algoritmos", pillarTip: "Soma simples.", explanation: "1 + 1 = 2.", example: "1 + 1 = 2." }, { q: "Qual destes não é número inteiro? 5, -3, 2.5, 0", options: ["5", "-3", "2.5", "0"], correct: 2, pillar: "Reconhecimento de Padrões", pillarTip: "Procure partes fracionárias.", explanation: "2.5 tem parte decimal → não é inteiro.", example: "2.5 ≠ inteiro." }, { q: "Se eu tenho 10 e dou 4, quanto sobra?", options: ["6", "5", "7", "4"], correct: 0, pillar: "Decomposição", pillarTip: "Subtração: 10 − 4.", explanation: "10 − 4 = 6.", example: "10 − 4 = 6." } ];
const questionsProfessor = [ { q: "Qual o resultado de 5^3?", options: ["15", "25", "125", "35"], correct: 2, pillar: "Algoritmos", pillarTip: "Eleve calculando: 5 × 5 × 5.", explanation: "5^3 = 5 × 5 × 5 = 125.", example: "5 × 5 = 25 → 25 × 5 = 125." }, { q: "Resolva 2x + 3 = 7. x = ?", options: ["1", "2", "3", "4"], correct: 1, pillar: "Decomposição", pillarTip: "Isole a variável passo a passo.", explanation: "2x = 7 − 3 = 4 → x = 4/2 = 2.", example: "2x + 3 = 7 → 2x = 4 → x = 2." }, { q: "Fatore: x^2 − 5x + 6 = ?", options: ["(x-2)(x-3)", "(x+2)(x+3)", "(x-1)(x-6)", "Não fatorável"], correct: 0, pillar: "Reconhecimento de Padrões", pillarTip: "Procure dois números que multiplicam 6 e somam −5.", explanation: "−2 e −3 multiplicam 6 e somam −5 → (x−2)(x−3).", example: "x^2 − 5x + 6 = (x−2)(x−3)." }, { q: "Qual a média de 4,6,8?", options: ["5", "6", "7", "8"], correct: 2, pillar: "Abstração", pillarTip: "Média = soma dos valores ÷ quantidade.", explanation: "(4+6+8)=18 → 18 ÷ 3 = 6.", example: "(4 + 6 + 8) / 3 = 6." }, { q: "Resolva: 3 × (2 + 4) = ?", options: ["12", "18", "14", "15"], correct: 1, pillar: "Algoritmos", pillarTip: "Siga a ordem: parênteses primeiro.", explanation: "Atenção: 2 + 4 = 6, então 3 × 6 = 18.", example: "3 × (2 + 4) = 3 × 6 = 18." }, { q: "Simplifique: 10/5 = ?", options: ["1", "2", "3", "4"], correct: 1, pillar: "Abstração", pillarTip: "Divisão simples, abstraia unidades.", explanation: "10 ÷ 5 = 2.", example: "10 ÷ 5 = 2." }, { q: "Resolva: x/4 = 3 → x = ?", options: ["7", "12", "9", "10"], correct: 1, pillar: "Decomposição", pillarTip: "Multiplique ambos os lados por 4.", explanation: "x = 3 × 4 = 12.", example: "x/4 = 3 → x = 3×4 = 12." }, { q: "Se f(x)=2x+1, f(3) = ?", options: ["5", "6", "7", "8"], correct: 2, pillar: "Algoritmos", pillarTip: "Substitua x por 3 e calcule.", explanation: "2×3 + 1 = 7.", example: "2×3 = 6 → 6 + 1 = 7." }, { q: "O que é um número primo? 4,6,7,9 — qual primo?", options: ["4", "6", "7", "9"], correct: 2, pillar: "Reconhecimento de Padrões", pillarTip: "Primos têm apenas divisores 1 e ele mesmo.", explanation: "7 só é divisível por 1 e 7 → primo.", example: "7 ÷ 2,3 não inteiro → primo." }, { q: "Calcule 7 × 8", options: ["48", "54", "56", "64"], correct: 2, pillar: "Algoritmos", pillarTip: "Multiplicação direta.", explanation: "7 × 8 = 56.", example: "7 × 8 = 56." }, { q: "Resolva: 9 − (3 + 2) = ?", options: ["2", "3", "4", "5"], correct: 2, pillar: "Algoritmos", pillarTip: "Faça parênteses primeiro: 3 + 2 = 5, então 9 − 5 = 4.", explanation: "3 + 2 = 5 → 9 − 5 = 4.", example: "9 − (3 + 2) = 9 - 5 = 4." }, { q: "Encontre x: 4x = 20 → x = ?", options: ["4", "5", "6", "7"], correct: 1, pillar: "Decomposição", pillarTip: "Isole x dividindo ambos os lados por 4.", explanation: "x = 20 ÷ 4 = 5.", example: "4x = 20 → x = 5." }, { q: "Qual resultado de 2^4 ?", options: ["8", "12", "16", "10"], correct: 2, pillar: "Algoritmos", pillarTip: "Multiplique 2 por si mesmo 4 vezes.", explanation: "2 × 2 × 2 × 2 = 16.", example: "2×2=4 → 4×2=8 → 8×2=16." }, { q: "Fatore: x^2 − 4 = ?", options: ["(x-2)(x+2)", "(x-4)(x+1)", "(x-1)(x-4)", "Não fatorável"], correct: 0, pillar: "Reconhecimento de Padrões", pillarTip: "Diferença de quadrados: a^2 − b^2 = (a−b)(a+b).", explanation: "x^2 − 4 = x^2 − 2^2 = (x−2)(x+2).", example: "x^2 − 4 = (x−2)(x+2)." }, { q: "Média ponderada simples: notas 7 (peso1) e 9 (peso1). Média?", options: ["7", "8", "9", "16"], correct: 1, pillar: "Abstração", pillarTip: "Com pesos iguais, média é (7+9)÷2.", explanation: "(7 + 9) = 16 → 16 ÷ 2 = 8.", example: "(7 + 9) / 2 = 8." } ];

// ESTADOS GLOBAIS DO JOGO
let currentQuestion = 0;
let score = 0;
let record = Number(localStorage.getItem("record")) || 0;
let maxFaseAlcancada = Number(localStorage.getItem("maxFase")) || 1;
let timeLeft = 120;
let fase = 1;
let heroHP = 100;
let enemyHP = 100;
let maxEnemyHP = 100;
let nivel = "estudante";
let timerInterval;
let waitingForExplanation = false;
let pendingNext = null;

// INICIALIZAÇÃO DO JOGO
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("record").textContent = record;
    verificarDesbloqueioProfessor(); // ALTERAÇÃO: Nome da função atualizado
});

// NAVEGAÇÃO E CONTROLE DE TELAS
function voltarAoMenuPrincipal() {
    if (confirm("Tem certeza que quer sair? Todo o progresso desta partida será perdido.")) {
        clearInterval(timerInterval);
        document.getElementById("game-container").style.display = "none";
        document.getElementById("initial-screen").style.display = "block";
        verificarDesbloqueioProfessor(); // ALTERAÇÃO: Nome da função atualizado
        salvarRecorde();
    }
}

// LÓGICA PRINCIPAL DO JOGO
function iniciarJogo(escolha) {
    if (escolha === "professor" && maxFaseAlcancada <= 15) {
        alert("🔒 Modo Professor bloqueado — complete 15 fases no modo Estudante primeiro.");
        return;
    }
    
    nivel = escolha;
    score = 0;
    currentQuestion = 0;
    timeLeft = 120;
    fase = 1;
    heroHP = 100;
    maxEnemyHP = 100;
    enemyHP = 100;
    
    document.getElementById("initial-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    
    document.getElementById("score").textContent = score;
    document.getElementById("fase").textContent = fase;
    document.getElementById("heroHealth").style.width = "100%";
    document.getElementById("enemyHealth").style.width = "100%";
    
    iniciarTimer();
    showQuestion();
}

function iniciarTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Tempo esgotado! Pontuação: " + score);
            salvarRecorde();
            location.reload();
        }
    }, 1000);
}

function getBanco() {
    return (nivel === "professor") ? questionsProfessor : questionsEstudante;
}

function showQuestion() {
    if (waitingForExplanation) return;
    const banco = getBanco();
    const q = banco[currentQuestion % banco.length];
    document.getElementById("question").textContent = q.q;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(i);
        optionsDiv.appendChild(btn);
    });
}

function disableOptions() { document.querySelectorAll(".option").forEach(b => b.disabled = true); }
function enableOptions() { document.querySelectorAll(".option").forEach(b => b.disabled = false); }

function checkAnswer(i) {
    disableOptions();
    const banco = getBanco();
    const q = banco[currentQuestion % banco.length];

    if (i === q.correct) {
        score += 100;
        enemyHP -= 30;
        const enemyHealthPercent = Math.max(0, (enemyHP / maxEnemyHP) * 100);
        document.getElementById("score").textContent = score;
        document.getElementById("enemyHealth").style.width = enemyHealthPercent + "%";
        if (enemyHP <= 0) {
            fase++;
            salvarProgressoFase();
            verificarDesbloqueioProfessor(); // ALTERAÇÃO: Nome da função atualizado
            document.getElementById("fase").textContent = fase;
            alert("🎉 Você venceu a fase " + (fase - 1) + "!");
            maxEnemyHP = 100 + (fase - 1) * 20;
            enemyHP = maxEnemyHP;
            document.getElementById("enemyHealth").style.width = "100%";
        }
        currentQuestion++;
        setTimeout(() => { enableOptions(); showQuestion(); }, 300);
    } else {
        score = Math.max(0, score - 50);
        heroHP -= 20;
        document.getElementById("score").textContent = score;
        document.getElementById("heroHealth").style.width = Math.max(0, heroHP) + "%";
        if (heroHP <= 0) {
            alert("💀 Você foi derrotado! Pontuação final: " + score);
            salvarRecorde();
            location.reload();
            return;
        }
        waitingForExplanation = true;
        pendingNext = function() {
            waitingForExplanation = false;
            pendingNext = null;
            currentQuestion++;
            enableOptions();
            showQuestion();
        };
        mostrarExplicacao(q, i);
    }
}

// PROGRESSO E DESBLOQUEIO
function salvarProgressoFase() {
    if (fase > maxFaseAlcancada) {
        maxFaseAlcancada = fase;
        localStorage.setItem("maxFase", maxFaseAlcancada);
    }
}

/**
 * ALTERAÇÃO: Esta função agora controla APENAS o desbloqueio do Modo Professor.
 */
function verificarDesbloqueioProfessor() {
    const btnProfessor = document.getElementById("professorMenuBtn");
    const unlockMsg = document.getElementById("unlock-message");

    const desbloqueado = maxFaseAlcancada > 15;

    btnProfessor.disabled = !desbloqueado;
    
    if (desbloqueado) {
        btnProfessor.innerHTML = "Modo Professor";
        unlockMsg.textContent = "Parabéns! O Modo Professor foi desbloqueado.";
    } else {
        btnProfessor.innerHTML = "🔒 Modo Professor";
        unlockMsg.textContent = `Complete ${16 - maxFaseAlcancada} fase(s) para desbloquear o Modo Professor. (Progresso: ${maxFaseAlcancada - 1}/15)`;
    }
}

function salvarRecorde() {
    if (score > record) {
        localStorage.setItem("record", score);
        record = score;
        document.getElementById("record").textContent = record;
        alert("🏆 Novo recorde: " + score);
    }
}

// CONTROLES DOS MODAIS (Pop-ups)
function mostrarExplicacao(q, chosenIndex) {
    const modal = document.getElementById("explicacaoModal");
    const content = document.getElementById("explicacaoContent");
    const chosenText = q.options[chosenIndex] || "—";
    const correctText = q.options[q.correct];
    let html = `<span class="closeModal" onclick="fecharExplicacao()">X</span><h2>Resposta incorreta</h2><p>Você escolheu: <strong>${chosenText}</strong><br>Resposta correta: <strong>${correctText}</strong></p><h3>Por que errou?</h3><div>${q.explanation}</div><h3>Exemplo (passo a passo)</h3><pre>${q.example}</pre><p style="margin-top:10px"><strong>Pilar recomendado:</strong> ${q.pillar}</p><p style="font-size:13px;color:#555">Feche esta janela para continuar.</p>`;
    content.innerHTML = html;
    modal.style.display = "flex";
}

function fecharExplicacao() {
    document.getElementById("explicacaoModal").style.display = "none";
    if (typeof pendingNext === "function") {
        pendingNext();
    }
}

function abrirPilares() { document.getElementById("pilaresModal").style.display = "flex"; }
function fecharPilares() { document.getElementById("pilaresModal").style.display = "none"; }
function abrirObjetivo() { document.getElementById("objetivoModal").style.display = "flex"; }
function fecharObjetivo() { document.getElementById("objetivoModal").style.display = "none"; }