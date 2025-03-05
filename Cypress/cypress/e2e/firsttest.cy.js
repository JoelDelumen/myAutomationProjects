/// <reference types="cypress" />
import 'cypress-xpath';


describe('Workspace', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://letcode.in/');
        cy.contains(' LetCode with Koushik ').should('be.visible');
        cy.xpath('//app-root/app-header/nav/div/div[2]/div[1]/a[1]').click(); //workspace tab
        cy.contains('Ready to be a Pro Engineer?').should('be.visible');
        cy.xpath('//app-root/app-test-site/section[2]/div/div/div/div[2]/app-menu/div/footer/a').click(); //Edit Button
        cy.contains('Input').should('be.visible');
    })

    it('Enter Full Name', () => {
        cy.get('#fullName').type('Joel Delumen');
    });

    it('Append a Text', () => {
        cy.xpath('//app-root/app-edit/section/div/div/div[1]/div/div/div[2]/div/input')
        .invoke('val')
        .then((currentValue) => {
            cy.xpath('//app-root/app-edit/section/div/div/div[1]/div/div/div[2]/div/input')
            .type(' New Text');
        })
    })
});