/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const { homePage } = require("../support/pages/home.page.js");

describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.login(email, senha)
  })

  it('Adiconar item ao carrinho', () => {
    cy.intercept('GET', '**/public/getCategories', { fixture: 'categories.json' }).as('getCategories')
    homePage.addProduto()
  })

  it('Removendo item do carrinho', () => {
    cy.intercept('GET', '**/public/getCategories', { fixture: 'categories.json' }).as('getCategories')
    homePage.removeProduto()
  })

  it('Atualizar item no carrinho', () => {
      cy.intercept('GET', '**/public/getCategories', { fixture: 'categories.json' }).as('getCategories')
      homePage.addProduto()
      homePage.atualizarProduto()

  })
})