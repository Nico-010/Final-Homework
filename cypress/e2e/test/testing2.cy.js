describe("Register User", () => {
    it("Register User", () => {
      
  //https://automationexercise.com\
  
  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  cy.visit("http://automationexercise.com");
  
  // 3. Verify that home page is visible successfully
  cy.url().should("eq", 'https://automationexercise.com/')
  
  // 4. Click on 'Signup / Login' button
  cy.get('a[href="/login"]').click();
  //href="/login"
  
  // 5. Verify 'New User Signup!' is visible
  cy.get('.signup-form >h2').should('be.visible').should('have.text','New User Signup!');
  
  // 6. Enter name and email address
  let signupName = 'lida';
  let signupEmail = 'test'+Math.round((Math.random()*1000000)) +'@gmail.com'
  cy.get('[data-qa="signup-name"]').type(signupName).should('have.value',signupName)
  cy.get('[data-qa="signup-email"]').type(signupEmail)
  
  // 7. Click 'Signup' button
  cy.get('[data-qa="signup-button"]').click()
  
  
  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  cy.get(".login-form> .title > b").should("have.text",'Enter Account Information')
  
  
  // 9. Fill details: Title, Name, Email, Password, Date of birth
  cy.get('[data-qa="name"]').clear().type(signupName);
  //cy.get('[data-qa="email"]').type(signupEmail);
  cy.get('[data-qa="password"]').type("Aa111111")
  cy.get('[data-qa="days"]').select(12)
  cy.get('[data-qa="months"]').select("May")
  cy.get('[data-qa="years"]').select("2010")
  // 10. Select checkbox 'Sign up for our newsletter!'
  cy.get('#newsletter').check()
  
  // 11. Select checkbox 'Receive special offers from our partners!'
  cy.get('#optin').check()
  
  // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  
  cy.get('[data-qa="first_name"]').clear().type('Jane Lane')
  cy.get('[data-qa="last_name"]').type("test")
  cy.get('[data-qa="address"]').type("test")
  cy.get('[data-qa="country"]').select("New Zealand")
  cy.get('[data-qa="state"]').type("test")
  cy.get('[data-qa="city"]').type("test")
  cy.get('[data-qa="zipcode"]').type("test")
  cy.get('[data-qa="mobile_number"]').type("test")
  // 13. Click 'Create Account button'
  cy.get('[data-qa="create-account"]').click()
  
  
  // 14. Verify that 'ACCOUNT CREATED!' is visible
  cy.contains('[data-qa="account-created"]', 'Account Created!').should('be.visible')
  // 15. Click 'Continue' button
  cy.get('[data-qa="continue-button"]').click()
  // 16. Verify that 'Logged in as username' is visible
  cy.get('.navbar-nav')
  .contains('a','Logged in as').should('be.visible')
  .get('b')
  .should('have.text', signupName)
  // 17. Click 'Delete Account' button
  
  cy.get('[href="/delete_account"]').should('contain',"Delete Account",).click()
  
  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  cy.contains('[data-qa="account-deleted"]', 'Account Deleted!').should('be.visible');
  cy.get('[data-qa="continue-button"]').click()
  });
  });
  