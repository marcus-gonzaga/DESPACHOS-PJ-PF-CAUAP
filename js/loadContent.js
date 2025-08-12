document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar partials (fragmentos HTML) em elementos específicos
    async function loadPartial(url, elementId) {
        try {
            // Tenta buscar o conteúdo da URL fornecida
            const response = await fetch(url);
            
            // Verifica se a requisição foi bem-sucedida (status 2xx)
            if (!response.ok) {
                // Se não foi, lança um erro com o status da resposta
                throw new Error(`Erro ao carregar ${url}: ${response.status} (${response.statusText})`);
            }
            
            // Converte a resposta em texto HTML
            const text = await response.text();
            
            // Insere o HTML carregado no elemento com o ID especificado
            document.getElementById(elementId).innerHTML = text;
        } catch (error) {
            // Em caso de qualquer erro durante o processo (rede, parsing, etc.)
            console.error('Falha ao carregar partial:', error);
            // Opcional: exibe uma mensagem de erro amigável na página para o usuário
            document.getElementById(elementId).innerHTML = '<p style="color: red; padding: 10px; border: 1px solid red; background-color: #ffeaea;">Erro ao carregar componente. Verifique a conexão ou tente recarregar a página.</p>';
        }
    }

    // Chama a função para carregar o cabeçalho e o rodapé
    // Os caminhos './header-partial.html' e './footer-partial.html'
    // indicam que os arquivos estão na mesma pasta que o index.html.
    loadPartial('./header-partial.html', 'header-placeholder');
    loadPartial('./footer-partial.html', 'footer-placeholder');
});