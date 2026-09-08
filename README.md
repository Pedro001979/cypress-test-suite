# Automação de Testes E2E — Cypress

![Cypress](https://img.shields.io/badge/Cypress-13.x-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Mochawesome](https://img.shields.io/badge/Relatórios-Mochawesome-6C63FF)

## Sobre o projeto

Suíte de **testes automatizados End-to-End** desenvolvida com Cypress para validar fluxos de uma aplicação de e-commerce.

O projeto demonstra técnicas importantes de automação Web, incluindo interceptação de requisições, navegação entre abas, reutilização de comandos e geração de evidências de execução.

## Cenários e técnicas

- Testes de fluxos críticos de usuário
- Validação de interface e comportamento
- Interceptação e validação de requisições HTTP
- Tratamento de navegação entre abas
- Reutilização de comandos e helpers
- Execução headless via linha de comando
- Geração de relatórios HTML/JSON

## Stack

- Cypress 13
- JavaScript
- Node.js / npm
- Mochawesome
- Puppeteer para suporte a cenários específicos de navegação

## Estrutura

```text
cypress/
├── e2e/
├── fixtures/
├── support/
│   └── utils/
└── ...

cypress.config.js
package.json
```

## Execução

```bash
npm install
npm test
```

Os resultados podem ser analisados pelos relatórios gerados após a execução da suíte.

## O que este projeto demonstra

Mais do que executar comandos no navegador, este projeto evidencia conhecimentos de **estratégia de automação, validação de comportamento, tratamento de dependências externas e geração de evidências**.

## Autor

**Pedro Ricardo**  
QA Automation | Cypress | JavaScript | API | Mobile

[GitHub](https://github.com/Pedro001979) · [LinkedIn](https://www.linkedin.com/in/pedro-ricardo-6a3b76236/)

---

Licença: ISC
