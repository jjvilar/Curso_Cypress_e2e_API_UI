// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '../../Cypress_Codigos/cypress/support/commands'

require('cypress-xpath')

// Alternatively you can use CommonJS syntax:
// require('./commands')


Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-wc', 'data-cy', 'data-test', 'data-testid', 'id', 'class', 'attributes', 'tag', 'nth-child']
})