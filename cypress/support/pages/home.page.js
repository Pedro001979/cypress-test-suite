/// <reference types="cypress" />

export const homePage = {
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },
    addProduto(){
        cy.get('[href="/Tab/Browse"]').click()
        cy.wait(1000)
        cy.get(':nth-child(13) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
        cy.wait(1000)
        cy.get('[data-testid="addToCart"]').click()
    },
    removeProduto(){
        cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr').click()
        cy.get('[data-testid="remove"]').click()
        cy.wait(1000)

    },
    atualizarProduto(){
        cy.get('[href="/Tab/Browse"]').click()
        cy.wait(1000)
        cy.get(':nth-child(13) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
        cy.wait(1000)
        cy.get('[data-testid="addToCart"]').click()
        cy.get('[data-testid="addItem"] > .css-146c3p1').click()
        cy.wait(1000)
    }
}