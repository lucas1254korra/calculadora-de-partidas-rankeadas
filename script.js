const personagensPorRank = {
    "Ferro": "https://64.media.tumblr.com/2fba08dc4137cecc76c34fa18b4f2c8b/tumblr_n0uegx9Ou81r4zvxvo1_250.gif",
    "Bronze": "https://cdnb.artstation.com/p/assets/images/images/064/526/343/original/grant-king-knight-idle.gif?1688124262",
    "Prata": "https://orig00.deviantart.net/6aeb/f/2014/242/d/d/roman_archer_shoot__animation__by_six__down-d7xbxv9.gif",
    "Ouro": "https://static.wixstatic.com/media/5287a4_0dfd570a59dc49e1bf602ece7d0b7eba~mv2.gif",
    "Diamante": "https://64.media.tumblr.com/3e8f5c83b0644b96e252be8fa5774470/tumblr_od9xizb2bh1qkpz2go1_640.gif",
    "Lendário": "https://i.pinimg.com/originals/3f/17/34/3f173486753fa3dca648e290d8015cc9.gif",
    "Imortal": "https://opengameart.org/sites/default/files/forum-attachments/giphy.gif"
};

// Função que calcula o saldo
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função que determina o nível baseado nas vitórias
function determinarNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Função principal que calcula o rank
function calcularRank() {
    // Captura valores dos inputs
    const vitorias = parseInt(document.getElementById('vitorias').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);

    // Validação
    if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
        alert('⚠️ Por favor, insira valores válidos!');
        return;
    }

    // Cálculos usando as funções
    const saldo = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);

    const gifUrl = personagensPorRank[nivel];
    document.getElementById('personagemGif').src = gifUrl;

    // Exibir resultados
    document.getElementById('nivelResultado').textContent = nivel;
    document.getElementById('saldoResultado').textContent = saldo;
    document.getElementById('vitoriasResultado').textContent = vitorias;
    document.getElementById('derrotasResultado').textContent = derrotas;
    
    // Mensagem final
    const mensagem = `O Herói tem saldo de ${saldo} e está no rank ${nivel}`;
    document.getElementById('mensagemFinal').textContent = mensagem;
    document.getElementById('resultado').style.display = 'block';
    
    console.log(mensagem);
}

document.getElementById('derrotas').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularRank();
    }
});