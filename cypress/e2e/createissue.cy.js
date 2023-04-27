class JiraIssuePage {
  visit() {
    cy.visit('https://jira.trungk18.com/project/board')
  }

  clickCreateIssueButton() {
    cy.get("app-navbar-left div:nth-child(3)").click()
  }

  selectIssueType(issueType) {
    cy.get("div[class='form-group'] issue-type-select").click()
    cy.get(`nz-option-item:nth-child(${issueType})`).click()
  }

  selectIssuePriority(issuePriority) {
    cy.get("div[class='mt-3 form-group'] issue-priority-select").click()
    cy.get(`nz-option-item:nth-child(${issuePriority})`).click()
  }

  enterSummary(summary) {
    cy.get("input[formcontrolname='title']").type(summary)
  }

  enterDescription(description) {
    cy.get("div[data-gramm='false']").type(description)
  }

  setAssignee() {
    cy.get("issue-assignees-select nz-select").click()
    cy.get("nz-option-item:nth-child(3)").click()
  }

  clickCreateIssue() {
    cy.get("j-button button[type='submit']").click()
  }

  clickOnIssue(issueNumber) {
    cy.get(`div[id='Backlog'] issue-card:nth-child(${issueNumber})`).click()
  }

  changeStatusTo(status) {
    cy.get("issue-status j-button[class='ant-dropdown-trigger']").click()
    cy.get(`ul.mt-3>li:nth-child(${status})`).click()
  }

  changePriorityTo(priority) {
    cy.get("issue-priority j-button[class='ant-dropdown-trigger']").click()
    cy.get(`span.priority-label:contains(${priority})`).should('be.visible').click();
  }

  closeDialog() {
    cy.get("j-button[icon='times'] button[type='button']").click()
  }
}

describe('Create JIRA issue', () => {
  const jiraIssuePage = new JiraIssuePage()

  beforeEach(() => {
    jiraIssuePage.visit()
  })

  it('passes', () => {
    jiraIssuePage.clickCreateIssueButton()
    jiraIssuePage.selectIssueType(2)
    jiraIssuePage.selectIssuePriority(4)
    jiraIssuePage.enterSummary('Testcase for Jira Clone')
    jiraIssuePage.enterDescription('As an applicant I need to create a testcase for a Jira clone')
    jiraIssuePage.setAssignee('Captain')
    jiraIssuePage.clickCreateIssue()
    jiraIssuePage.clickOnIssue(4)
    jiraIssuePage.changeStatusTo(2)
    jiraIssuePage.changePriorityTo('Highest')
    jiraIssuePage.closeDialog()
  })
})


