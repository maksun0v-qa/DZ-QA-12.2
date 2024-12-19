describe('Проверка авторизации', function () {

    it('позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт 
         cy.get('#mail').type('german@dolnikov.ru'); // ввели правильный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
         cy.get('#loginButton').click(); // килк по "войти"
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка надписи выведенной
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка отображения крестика
     })


    it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт 
         cy.get('#forgotEmailButton').click(); // килк по "забыли пароль"
         cy.get('#mailForgot').type('lalala@dolnikov.ru'); // ввести любой мэйл
         cy.get('#restoreEmailButton').click(); // клик отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка надписи выведенной
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка отображения крестика    
     })


    it('негативный кейс авторизации пароля', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт 
         cy.get('#mail').type('german@dolnikov.ru'); // ввели правильный логин
         cy.get('#pass').type('lalala'); // ввели неправильный пароль
         cy.get('#loginButton').click(); // килк по "войти"
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка надписи выведенной
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка отображения крестика
     })
  

    it('негативный кейс валидации логина', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт 
         cy.get('#mail').type('germandolnikov.ru'); // ввели правильный логин без @
         cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
         cy.get('#loginButton').click(); // килк по "войти"
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка надписи выведенной
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка отображения крестика
     })


    it('приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт 
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели правильный логин строчный/не
         cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
         cy.get('#loginButton').click(); // килк по "войти"
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка надписи выведенной
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка отображения крестика
     })

 })





// Найти поле логин и вести правильный логин
// Найти поле пароль и вести правильный пароль
// Найти кнопку войти и нажать
// Проверить нужный текст и наличие кнопки крестик