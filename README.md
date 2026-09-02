Este repositório contém resoluçoes praticas focado em testes automatizados e validação de funcionalidades usando a framework Cypress.

## Sobre o Projeto

O projeto foi estruturado para explorar funcionalidades avançadas de testes end-to-end, incluindo interceptação de requisições, navegação entre abas e geração de relatórios detalhados. Todas as validações e testes são executados contra a aplicação de e-commerce [Loja EBAC](http://lojaebac.ebaconline.art.br/).

## Tecnologias Utilizadas

- **Cypress** (v13.17.0) - Framework de testes end-to-end
- **JavaScript** - Linguagem de implementação dos testes
- **Mochawesome** (v7.1.4) - Gerador de relatórios em HTML
- **Puppeteer** (v21.9.0) - Automação do navegador
- **HTML** - Estrutura dos relatórios

A composição do projeto é 61,8% HTML e 38,2% JavaScript.

## Estrutura do Repositório

```
.
├── cypress/                 # Diretório principal da configuração Cypress
│   └── support/
│       └── utils/
│           └── tabNavigation.js    # Utilitários para navegação entre abas
├── mochawesome-report/      # Relatórios gerados após execução dos testes
├── cypress.config.js        # Configuração principal do Cypress
├── package.json            # Dependências do projeto
├── package-lock.json       # Lock file das dependências
└── .gitignore             # Arquivos ignorados pelo Git
```

## Configuração

### Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```

### Arquivo de Configuração

O arquivo `cypress.config.js` define:

- **Base URL**: `http://lojaebac.ebaconline.art.br/`
- **Suporte a navegação entre abas**: Tarefa customizada para lidar com múltiplas abas do navegador
- **Debugging**: Porta de debug do Chrome configurada dinamicamente
- **Relatórios**: Gerados em formato HTML e JSON através do Mochawesome

## Executando os Testes

Para rodar a suite completa de testes:

```bash
npm test
```

Este comando executará todos os testes configurados e gerará um relatório automaticamente no diretório `mochawesome-report/`.

## Utilities

### Tab Navigation

A aplicação implementa suporte customizado para navegação entre abas do navegador através do arquivo `cypress/support/utils/tabNavigation.js`. Isso permite:

- Trocar entre múltiplas abas
- Manter sincronização de estado durante testes
- Debug facilitado com a porta de debugging do Chrome

## Relatórios

Os relatórios de testes são gerados automaticamente pelo Mochawesome e salvos em `mochawesome-report/`. Estes incluem:

- Resultados em formato JSON para integração
- Relatório HTML interativo com visualização dos resultados
- Histórico de múltiplas execuções (sem sobrescrita)

## Autor

Pedro Ricardo

## Licença

ISC
