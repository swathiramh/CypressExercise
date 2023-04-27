describe('Create JIRA issue', () => {
  it('passes', () => {

    //Open the page https://jira.trungk18.com/project/board
    cy.visit('https://jira.trungk18.com/project/board')

    //Click the plus icon (“Create issue”) on the left side-menu
    cy.get(".anticon.text-xl.text-white.anticon-plus").click()
    
    //Select issue type „Story”
    cy.get("div[class='form-group'] issue-type-select").click().type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{enter}')

    //Select issue priority „High”
    cy.get("div[class='mt-3 form-group'] issue-priority-select").click().type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{enter}')
    
    //Enter a short summary “Testcase for Jira Clone”
    cy.get("input[formcontrolname='title']").type("Testcase for Jira Clone")

    //Enter a description „As an applicant I need to create a testcase for a Jira clone”  
    cy.get("div[class='ql-editor ql-blank'] p").type("As an applicant I need to create a testcase for a Jira clone")

    //Set the assignee to „Captain”
    cy.get("nz-select[nzmode='multiple'] nz-select-top-control").type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{upArrow}').type('{enter}')
    
    //Click „Create Issue”
    cy.get("button[type='submit'] span").click()

    //Click on the newly created issue
    cy.get("div[id='Backlog'] issue-card:nth-child(4)").click()

    //Change the Priority to „Highest”
    cy.get("issue-priority j-button[class='ant-dropdown-trigger']").click()
    cy.get('span.priority-label:contains("Highest")').should('be.visible').click();

    //Close the dialog
    cy.get("j-button[icon='times'] button[type='button']").click()




  })
})

