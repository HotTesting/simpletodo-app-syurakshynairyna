//JasmineJS 2

let URL = 'http://maxcabrera.com/code/todo-list/'

describe('TODO site', function () {
   
   it('should have requested title', function () {
       browser.get(URL)
       expect(browser.getTitle()).toBe('Angular2 Seed')
   })

   it('should create new note', function () {
       browser.get(URL)
       let webelement = $('input.enter-todo')
       webelement.sendKeys('Buy weimaraner')
       webelement.submit()
       browser.sleep(1000)

       webelement.sendKeys('Travel to Tokyo')
       webelement.submit()
       browser.sleep(1000)

       webelement.sendKeys('Get to know Doctor Strange')
       webelement.submit()
       browser.sleep(1000)

       let notes = $$('todo-list .small-12')

       //expect(notes.getText()).not.toContain('New Shiny note')expect(notes.g
       expect(notes.getText()).toContain('Buy weimaraner', 'Travel to Tokyo', 'Get to know Doctor Strange')
   })

   it('should delete all requested notes', function () {
      browser.get(URL)
      for (let i = 1; i <= 3; i++ ) {

      let checkbox = $(‘input.enter-todo’) body > app > todo-list > div > div:nth-child(1) > todo-list-render > div > input[type=”checkbox”]’)
      checkbox.click();
      browser.sleep(5000)

       expect(notes.getText()).not.toContain('Buy weimaraner', 'Travel to Tokyo', 'Get to know Doctor Strange');
       expect(notes.isDisplayed()).toBe(false);

   }
    )

})
