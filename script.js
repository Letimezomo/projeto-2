// Função para analisar os cenários de mensagens do desafio
function analisarMensagem(tipo) {
    const resultadoDiv = document.getElementById('resultado');
    const textoResultado = document.getElementById('resultado-texto');
    const badge = document.getElementById('status-badge');

    // Remove a classe hidden para mostrar o resultado
    resultadoDiv.classList.remove('hidden');

    if (tipo === 'urgente') {
        textoResultado.innerHTML = `<strong>Mensagem recebida:</strong> "Prezado cliente, sua conta será bloqueada. Regularize agora em: http://link-falso-atualizar.net"<br><br>
        <strong>Análise técnica:</strong> RISCO ALTO. Contém senso de urgência ("bloqueada agora") e um link que não pertence ao domínio oficial de nenhum banco real.`;
        
        badge.textContent = "⚠️ ALERTA DE GOLPE (Phishing)";
        badge.className = "badge badge-perigo";

    } else if (tipo === 'promocao') {
        textoResultado.innerHTML = `<strong>Mensagem recebida:</strong> "PARABÉNS! Você ganhou um iPhone 15! Cadastre-se em: http://sorteios-da-net.xyz/ganhou"<br><br>
        <strong>Análise técnica:</strong> RISCO ALTO. Ofertas boas demais para ser verdade acompanhadas de links alternativos (como .xyz) são táticas clássicas de roubo de dados.`;
        
        badge.textContent = "⚠️ ALERTA DE GOLPE (Fraude)";
        badge.className = "badge badge-perigo";

    } else if (tipo === 'segura') {
        textoResultado.innerHTML = `<strong>Mensagem recebida:</strong> "Ei, você viu aquele repositório de estudos que te mandei no GitHub? Está em github.com/seu-amigo/estudos"<br><br>
        <strong>Análise técnica:</strong> SEGURO. O domínio apontado é o oficial (github.com) e o contexto condiz com uma conversa normal, sem alarmismos ou solicitações de senhas.`;
        
        badge.textContent = "✅ APARENTEMENTE SEGURO";
        badge.className = "badge badge-seguro";
    }
}