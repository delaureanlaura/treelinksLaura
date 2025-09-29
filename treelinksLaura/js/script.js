// Estrutura de dados dos links (RF01 - Links Fixos)
const linksData = [
    {
        id: 'codeminds',
        title: 'CodeMinds - Meu Estágio',
        description: 'Onde ensino programação para crianças',
        url: 'https://codeminds.com.br',
        icon: 'fas fa-code',
        color: '#ec4899',
        featured: true // RF05 - Destaque especial
    },
    {
        id: 'portfolio',
        title: 'Meu Portfólio',
        description: 'Conheça meus projetos',
        url: 'https://delaureanlaura.github.io/portif-lio',
        icon: 'fas fa-laptop-code',
        color: '#f472b6'
    },
    {
        id: 'instagram',
        title: 'Instagram',
        description: '@laurarocosta',
        url: 'https://www.instagram.com/laurarocosta?igsh=MTQ4bWtndmZoM2I0aQ%3D%3D&utm_source=qr',
        icon: 'fab fa-instagram',
        color: '#e1306c'
    },
    {
        id: 'spotify',
        title: 'Spotify',
        description: 'Minhas playlists',
        url: 'https://open.spotify.com/user/22ldmtvjckl4po7xqj52denki?si=f456b35844fb42df',
        icon: 'fab fa-spotify',
        color: '#1db954'
    }
];

// Gerenciamento de tema
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.themeToggle = null;
        this.themeIcon = null;
    }

    init() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = document.getElementById('themeIcon');
        
        if (!this.themeToggle || !this.themeIcon) {
            console.error('Elementos de tema não encontrados');
            return;
        }

        // Aplicar tema inicial
        this.applyTheme(this.currentTheme);
        
        // Adicionar event listener
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Atualizar ícone
        if (this.themeIcon) {
            if (theme === 'dark') {
                this.themeIcon.className = 'fas fa-sun';
            } else {
                this.themeIcon.className = 'fas fa-moon';
            }
        }
        
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        // Adicionar animação de rotação
        if (this.themeToggle) {
            this.themeToggle.classList.add('rotating');
            setTimeout(() => {
                this.themeToggle.classList.remove('rotating');
            }, 300);
        }

        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        
        console.log(`Tema alterado para: ${newTheme}`);
    }
}

// Instância global do gerenciador de tema
const themeManager = new ThemeManager();

// Função para criar um link (RF02 - Personalização Visual)
function createLinkElement(link) {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.target = '_blank'; // RF04 - Abertura em nova aba
    linkElement.rel = 'noopener noreferrer';
    linkElement.className = `link-item ${link.featured ? 'featured' : ''}`;
    linkElement.style.setProperty('--link-color', link.color);
    
    linkElement.innerHTML = `
        <div class="link-icon">
            <i class="${link.icon}"></i>
        </div>
        <div class="link-content">
            <h3 class="link-title">${link.title}</h3>
            <p class="link-description">${link.description}</p>
        </div>
        <div class="link-arrow">
            <i class="fas fa-external-link-alt"></i>
        </div>
    `;
    
    // Adicionar evento de clique para analytics (opcional)
    linkElement.addEventListener('click', function() {
        console.log(`Link clicado: ${link.title}`);
        // Aqui poderia ser adicionado código de analytics
    });
    
    return linkElement;
}

// Função para renderizar todos os links (RNF01 - Manutenibilidade)
function renderLinks() {
    const container = document.getElementById('linksContainer');
    
    if (!container) {
        console.error('Container de links não encontrado');
        return;
    }
    
    // Limpar container
    container.innerHTML = '';
    
    // Renderizar cada link
    linksData.forEach(link => {
        const linkElement = createLinkElement(link);
        container.appendChild(linkElement);
    });
}

// Função para adicionar animações de entrada
function addEntranceAnimations() {
    const links = document.querySelectorAll('.link-item');
    
    links.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
        link.classList.add('animate-in');
    });
}

// Função para adicionar efeitos de hover e interatividade
function addInteractiveEffects() {
    const links = document.querySelectorAll('.link-item');
    
    links.forEach(link => {
        // Efeito de hover com som (opcional)
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Efeito de clique
        link.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        link.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });
}

// Função de inicialização
function init() {
    // Inicializar gerenciador de tema
    themeManager.init();
    
    // Renderizar links
    renderLinks();
    
    // Adicionar animações após um pequeno delay
    setTimeout(() => {
        addEntranceAnimations();
        addInteractiveEffects();
    }, 100);
    
    console.log('Página de links da Laura inicializada com sucesso!');
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);

// Função para compartilhamento (RF06 - Compartilhamento Simples)
function shareProfile() {
    if (navigator.share) {
        navigator.share({
            title: 'Laura Costa Rocha - Links',
            text: 'Conheça o trabalho da Laura na programação e ensino para crianças!',
            url: window.location.href
        });
    } else {
        // Fallback para copiar URL
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copiado para a área de transferência!');
        });
    }
}

