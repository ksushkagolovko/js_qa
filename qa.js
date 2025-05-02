// Спочатку робимо Масив всіх користувачів з емейл адресами
var users = [
    {userName: "Test", lastName: "Test", email: "test.test@gmail.com"},
    {userName: "Dmitro", lastName: "Porohov", email: "dmitro.porohov@yahoo.com"},
    {userName: "Andrii", lastName: "", email: "andrii@mail.ru"},
    {userName: "Fake", lastName: "One", email: "not.valid@email.com"},
    {userName: "Cool", lastName: "Guy", email: "name1.name2@gmail.com"},
    {userName: "Wrong", lastName: "Symbol", email: "user!@gmail.com"},
  ]
// далі складаємо оегулярний вираз для перевірки емейлів:
var emailPattern = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/i
// Після масив для зберігання гідних довіри емейлів 
var validEmails = []
// робимо сортування  всіх користувачів
for (var i = 0; i < users.length; i++){
  var currentEmail = users[i].email
// робимо перевірку  чи відповідає email регулярному виразу
  if (emailPattern.test(currentEmail)){
    validEmails.push(currentEmail)}
}

console.log(validEmails)
