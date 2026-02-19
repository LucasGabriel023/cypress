describe('login', function(){
    it('Sign in', function(){
        cypress.visit('www.site.com.br')
        cypress.get('input[type="email"]').type('endereco@email.com')
        cypress.get('input[type="password"]').type('senha')
        cypress.get('btn').contains('Entrar').click()
    })
})