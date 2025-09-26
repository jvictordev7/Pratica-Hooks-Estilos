# 🎨 Prática Hooks & Estilos

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-7.1.12-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Styled_Components-6.1.19-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components"/>
  <img src="https://img.shields.io/badge/Material_UI-7.3.2-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material-UI"/>
</div>

<div align="center">
  <h3>🚀 Aplicação interativa demonstrando hooks do React e diferentes abordagens de estilização</h3>
  <p>
    <strong>6 atividades práticas</strong> • <strong>Design responsivo</strong> • <strong>Interface moderna</strong>
  </p>
</div>

---

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [🚀 Como Executar](#-como-executar)
- [📱 Responsividade](#-responsividade)
- [🎨 Atividades](#-atividades)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **Prática Hooks & Estilos** é uma aplicação educativa desenvolvida para demonstrar na prática os principais conceitos do React, incluindo hooks personalizados e diferentes abordagens de estilização. O projeto apresenta uma interface moderna e responsiva com navegação intuitiva entre as atividades.

### 🎪 Demonstração ao Vivo
> **[🔗 Acesse a aplicação](https://pratica-hooks-estilos.vercel.app/)** *(substitua pelo seu link de deploy)*

---

## ✨ Funcionalidades

- 🔄 **Navegação dinâmica** entre 6 atividades diferentes
- 📱 **Design totalmente responsivo** para desktop, tablet e mobile
- 🎨 **Múltiplas abordagens de estilização**:
  - CSS Modules
  - Styled Components  
  - Material-UI
  - Estilos inline dinâmicos
- 🪝 **Hooks personalizados** demonstrando boas práticas
- ⚡ **Interface reativa** com efeitos visuais suaves
- 🎯 **Componentes reutilizáveis** bem estruturados

---

## 🛠️ Tecnologias

### Core
- **[React 19.1.1](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[Vite 7.1.12](https://vitejs.dev/)** - Build tool ultrarrápida
- **[JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Linguagem de programação

### Estilização
- **[Styled Components 6.1.19](https://styled-components.com/)** - CSS-in-JS
- **[Material-UI 7.3.2](https://mui.com/)** - Biblioteca de componentes
- **[CSS Modules](https://github.com/css-modules/css-modules)** - CSS com escopo local
- **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)** - Folhas de estilo

### Desenvolvimento
- **[ESLint](https://eslint.org/)** - Linter para JavaScript
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** - Plugin React para Vite

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/jvictordev7/Pratica-Hooks-Estilos.git
   cd Pratica-Hooks-Estilos
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Visualiza build de produção
npm run lint     # Executa o linter
```

---

## 📱 Responsividade

O projeto foi desenvolvido com **mobile-first** e se adapta perfeitamente a:

| Dispositivo | Largura | Características |
|-------------|---------|----------------|
| 📱 **Mobile** | ≤ 768px | Botões otimizados para toque, padding reduzido |
| 💻 **Desktop** | > 768px | Layout expandido, espaçamentos maiores |

### Técnicas Utilizadas
- ✅ Flexbox para layouts responsivos
- ✅ Media queries para breakpoints
- ✅ Unidades relativas (rem, %, vw/vh)
- ✅ Otimização de toque para mobile

---

## 🎨 Atividades

### 1️⃣ Botão com Estilo Dinâmico
> **Conceito:** Estado local com `useState`
- Botão que muda cor e texto baseado no estado
- Efeitos visuais de hover e click
- Demonstração de state management básico

### 2️⃣ Alertas com CSS Modules
> **Conceito:** CSS Modules para estilos isolados
- Componentes de alerta com diferentes tipos
- Estilos com escopo local
- Reutilização de estilos

### 3️⃣ Styled Components
> **Conceito:** CSS-in-JS
- Card de produto estilizado
- Props dinâmicas para estilos
- Styled components com tema

### 4️⃣ useEffect em Ação
> **Conceito:** Efeitos colaterais e ciclo de vida
- Contador com efeitos de side-effect
- Cleanup de efeitos
- Logs de desenvolvimento

### 5️⃣ Hook Personalizado
> **Conceito:** Custom hooks para lógica reutilizável
- Hook `useToggle` para estado booleano
- Interruptor visual com animações
- Abstração de lógica complexa

### 6️⃣ Card com Material-UI
> **Conceito:** Biblioteca de componentes
- Card de produto profissional
- Componentes Material-UI
- Tema e customização avançada

---

## 📁 Estrutura do Projeto

```
📦 Pratica-Hooks-Estilos
├── 📁 public/
│   └── vite.svg
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Alerta.jsx
│   │   ├── Alerta.module.css
│   │   ├── BotaoDinamico.jsx
│   │   ├── CardProduto.jsx
│   │   ├── CardProdutoMUI.jsx
│   │   ├── Interruptor.jsx
│   │   └── UseEffectDemo.jsx
│   ├── 📁 hooks/
│   │   └── useToggle.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── 📄 index.html
├── 📄 package.json
├── 📄 README.md
└── 📄 vite.config.js
```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add: Minha nova feature'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

### 💡 Ideias para Contribuição
- 🎨 Novos temas de cores
- 📱 Melhorias na responsividade
- 🔧 Novas atividades práticas
- 🐛 Correções de bugs
- 📚 Melhorias na documentação

---

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/jvictordev7.png" width="100px" style="border-radius: 50%" alt="João Victor"/>
  <br/>
  <strong>João Victor</strong>
  <br/>
  <a href="https://github.com/jvictordev7">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  <a href="https://www.linkedin.com/in/dev-joao-victor/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
</div>

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, deixe uma estrela!</p>
  <p>🚀 Desenvolvido com ❤️ e muito ☕</p>
</div>