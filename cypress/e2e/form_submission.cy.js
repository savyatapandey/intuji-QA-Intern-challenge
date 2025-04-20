import {
  fillBasicInfo,
  selectDOB,
  selectSubjects,
  selectHobbies,
  uploadPicture,
  enterAddress,
  selectStateAndCity,
  submitForm
} from '../support/form_helpers';

Cypress.on('uncaught:exception', () => false);

describe('Form Submission Tests', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#fixedban').invoke('remove');
    cy.get('footer').invoke('remove');
  });

  it('Positive Test', () => {
    fillBasicInfo('John', 'Doe', 'john.doe@example.com', 'Male', '9876543210');
    selectDOB('01', 'January', '2000');
    selectSubjects(['Math', 'English']);
    selectHobbies(['Reading']);
    uploadPicture('sample.jpg');
    enterAddress('123 Main Street');
    selectStateAndCity('NCR', 'Delhi');
    submitForm();

    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
  });

  it('Negative Test', () => {
    fillBasicInfo('John', 'Doe', 'john.doe.example.com', 'Male', '98765432ab');
    selectDOB('01', 'January', '2000');
    selectSubjects(['Math', 'English']);
    selectHobbies(['Reading']);
    uploadPicture('sample.jpg');
    enterAddress('123 Main Street');
    selectStateAndCity('NCR', 'Delhi');
    submitForm();

    cy.get('#example-modal-sizes-title-lg').should('not.exist');
    cy.get('#userEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('Edge Test', () => {
    fillBasicInfo(' ', ' ', 'john.doe@example.com', 'Male', '9876543210');
    selectDOB('01', 'January', '2000');
    selectSubjects(['Math', 'English']);
    selectHobbies(['Reading']);
    uploadPicture('sample.jpg');
    enterAddress('123 Main Street');
    selectStateAndCity('NCR', 'Delhi');
    submitForm();
    cy.get('table tbody tr').eq(0)
    .find('td')
    .eq(1)
    .should('not.be.empty')
  });
});

