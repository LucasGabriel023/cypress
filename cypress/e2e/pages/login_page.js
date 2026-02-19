/// <reference types="Cypress"/>

import LoginElements from "../elements/login";
const loginElements = new LoginElements;

class LoginPage {

    acessarHomePage(){
        cypress.visit('www.site.com.br')
    }

    preencherDadosNaTela(){
        cypress.get(loginElements.inputEmail()).type('endereco@email.com')
        cypress.get(loginElements.inputPass()).type('senha')
    }

    clickEmLogin() {
        cy.get(LoginElements.btnEnter()).click()
}

}