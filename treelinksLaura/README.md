# Página de Links - Laura Costa Rocha

Uma página de links personalizada (estilo Linktree) criada especialmente para Laura Costa Rocha, estudante de Ciência da Computação e estagiária na Code Minds.

## 🎯 Características

- **Design Moderno**: Interface limpa e profissional com gradientes rosa suaves
- **Tema Claro/Escuro**: Alternância entre temas com botão flutuante
- **Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **SEO Otimizado**: Meta tags completas para melhor indexação em buscadores
- **Acessível**: Contraste otimizado e navegação por teclado
- **Interativo**: Animações de hover, transições suaves e efeitos visuais

## 🌙 **NOVA FUNCIONALIDADE: Alternância de Tema**

- **Tema Claro**: Fundo clean com gradiente rosa suave
- **Tema Escuro**: Fundo elegante com gradiente azul escuro
- **Botão Flutuante**: Localizado no canto superior direito
- **Persistência**: O tema escolhido é salvo no navegador
- **Animações**: Transições suaves entre temas com ícone rotativo

## 🔗 Links Incluídos

1. **Code Minds - Meu Estágio** (Destaque especial)
   - Onde Laura ensina programação para crianças
   - Link: https://codeminds.com.br

2. **Meu Portfólio**
   - Projetos e trabalhos da Laura
   - Link: https://delaureanlaura.github.io/portif-lio

3. **Instagram**
   - Perfil pessoal: @laurarocosta
   - Link: https://www.instagram.com/laurarocosta

4. **Spotify**
   - Playlists da Laura
   - Link: https://open.spotify.com/user/22ldmtvjckl4po7xqj52denki

## 📁 Estrutura do Projeto

```
laura-links-html/
├── index.html          # Página principal com botão de tema
├── css/
│   └── styles.css      # Estilos com suporte a tema claro/escuro
├── js/
│   └── script.js       # Lógica com gerenciador de tema
├── images/
│   └── avatar.png      # Foto de perfil
└── README.md           # Esta documentação
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Variáveis CSS para temas, gradientes e animações
- **JavaScript ES6**: Classes, localStorage e gerenciamento de estado
- **Font Awesome**: Ícones profissionais (lua/sol para tema)
- **Google Fonts**: Tipografia (Inter)

## ✅ Requisitos Atendidos

### Requisitos Funcionais (RF)
- ✅ **RF01**: Estrutura de links fixos implementada em JavaScript
- ✅ **RF02**: Personalização visual com cores rosa, fontes e ícones
- ✅ **RF03**: Layout totalmente responsivo (mobile-first)
- ✅ **RF04**: Todos os links abrem em nova aba
- ✅ **RF05**: Link da Code Minds em destaque especial
- ✅ **RF06**: URL simples e compartilhável
- ✅ **RF07**: SEO completo com meta tags

### Requisitos Não Funcionais (RNF)
- ✅ **RNF01**: Links organizados em array JSON para fácil manutenção
- ✅ **RNF02**: Compatível com Chrome, Firefox, Edge e Safari

### Funcionalidades Extras
- ✅ **Tema Claro/Escuro**: Alternância com persistência
- ✅ **Cores Rosa**: Paleta personalizada clean e moderna
- ✅ **Contraste Otimizado**: Legibilidade aprimorada em ambos os temas

## 🎨 Personalização

### Alternância de Tema
O tema é controlado automaticamente pelo JavaScript:
- Clique no botão flutuante (lua/sol) para alternar
- O tema escolhido é salvo automaticamente
- Transições suaves entre os temas

### Cores dos Temas
**Tema Claro:**
```css
--primary-color: #ec4899;        /* Rosa principal */
--bg-primary: linear-gradient(135deg, #fefcff 0%, #fdf2f8 30%, #fce7f3 100%);
--text-primary: #1f2937;         /* Texto escuro legível */
```

**Tema Escuro:**
```css
--bg-primary: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
--text-primary: #f8fafc;         /* Texto claro */
```

### Adicionar Novos Links
Para adicionar novos links, edite o array `linksData` no arquivo `js/script.js`:

```javascript
const linksData = [
    {
        id: 'novo-link',
        title: 'Título do Link',
        description: 'Descrição do link',
        url: 'https://exemplo.com',
        icon: 'fas fa-link',
        color: '#ec4899',
        featured: false // true para destaque
    }
];
```

## 🚀 Como Usar

1. **Hospedagem**: Faça upload dos arquivos para qualquer servidor web
2. **Domínio**: Configure um domínio personalizado (ex: laura.com/links)
3. **Personalização**: Edite os links e cores conforme necessário
4. **Compartilhamento**: Use a URL em biografias de redes sociais

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móveis (iOS/Android)
- ✅ Suporte a temas do sistema

## 🔧 Manutenção

### Atualizar Links:
1. Abra o arquivo `js/script.js`
2. Modifique o array `linksData`
3. Salve o arquivo

### Personalizar Cores:
1. Abra o arquivo `css/styles.css`
2. Modifique as variáveis CSS em `:root` e `[data-theme="dark"]`
3. Salve o arquivo

## 🆕 Novidades da Versão 2.0

- ✨ **Tema Claro/Escuro**: Alternância completa com botão flutuante
- 🌸 **Paleta Rosa**: Cores suaves e modernas
- 📱 **Contraste Melhorado**: Legibilidade otimizada
- 💾 **Persistência**: Tema salvo automaticamente
- 🎭 **Animações**: Transições suaves e efeitos visuais

## 📞 Suporte

Para dúvidas ou modificações, entre em contato com Laura Costa Rocha através dos links disponíveis na página.

---

**Desenvolvido com 💜 para Laura Costa Rocha**  
*Estudante de Ciência da Computação | Estagiária na Code Minds*

**Versão 2.0** - Com tema claro/escuro e design rosa clean

