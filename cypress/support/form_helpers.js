export const fillBasicInfo = (firstName, lastName, email, gender, phone) => {
  cy.get('#firstName').clear().type(firstName);
  cy.get('#lastName').clear().type(lastName);
  cy.get('#userEmail').clear().type(email);
  cy.contains('label', gender).click();
  cy.get('#userNumber').clear().type(phone);
};

export const selectDOB = (day, month, year) => {
  cy.get('#dateOfBirthInput').click();
  cy.get('.react-datepicker__month-select').select(month);
  cy.get('.react-datepicker__year-select').select(year);
  cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month').click();
};

export const selectSubjects = (subjects) => {
  subjects.forEach(subject => {
    cy.get('.subjects-auto-complete__value-container').type(`${subject}{enter}`);
  });
};

export const selectHobbies = (hobbies) => {
  hobbies.forEach(hobby => {
    cy.contains('label', hobby).click();
  });
};

export const uploadPicture = (fileName) => {
  cy.get('#uploadPicture').attachFile(fileName);
};

export const enterAddress = (address) => {
  cy.get('#currentAddress').type(address);
};

export const selectStateAndCity = (state, city) => {
  cy.get('#state').click().get(`#react-select-3-option-0`).contains(state).click();
  cy.get('#city').click().get(`#react-select-4-option-0`).contains(city).click();
};

export const submitForm = () => {
  cy.get('#submit').click();
};

