Крок 1

• Створи репозиторій з назвою goit-node-cli, склонуй та ініціалізуй в ньому проєкт за допомогою команди npm init. Встанови як залежність проєкту пакет commander

• В корінь проєкту помісти файли з папки src



Крок 2



• У файл contacts.js зроби імпорт модулів fs (у версії, яка працює з промісами - fs/promises) і path для роботи з файловою системою.



• Створи змінну contactsPath і запиши в неї шлях до файлу contacts.json. Для складання шляху використовуй методи модуля path.



• Додай асинхронні функції для роботи з колекцією контактів. У функціях використовуй модуль fs та його методи readFile() і writeFile(). Відповідні функції мають повертати необхідні дані за допомогою оператора return. Вивід в консоль в написаних функціях здійснюватись не повинен.



• Зроби експорт створених функцій.
Крок 3



• Зроби імпорт функцій з файла contacts.js в файл index.js.



• Далі використовуй готову функцію invokeAction(), яка отримує тип виконуваної дії і необхідні аргументи. Функція має викликати відповідний метод з файлу contacts.js, передаючи йому необхідні аргументи. Результат роботи викликаної функції слід вивести в консоль.



Крок 4



Запусти команди в терміналі і переконайся, що код працює належним чином.
