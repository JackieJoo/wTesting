# Тест перевірка

Тест перевірка - це найменша структурна одиниця тестування, призначена для перевірки лише одного очікуваного результату виконання тесту. 

Тест перевірка[[1]](<https://en.wikipedia.org/wiki/Software_testing>)[[2]](https://en.wikipedia.org/w/index.php?search=test+check&title=Special%3ASearch&go=Go&ns0=1) оцінює окремі результати виконання дії з об'єктом тестування (модулем, рутиною, класом) з метою співставлення очікуваних і фактичних результатів виконання. 

[Тест кейс](TestCase.md) складається із одної або декількох перевірок. Достатньо лише однієї перевірки із результатом "failed" щоб увесь об'єкт, що тестується вважався таким, що не пройшов його.

### Список перевірок

- is - повертає "true", якщо передане значення повертає "true";
- isNot - повертає "true", якщо передане значення повертає "false";
- isNotError - повертає "true", якщо переданий вираз не повертає помилку;
- identical (il) - перевірка на абсолютне співпадіння двох значень. Повертає "true", якщо значення повністю співпадають;
- notIdentical (ni) - перевірка абсолютне неспівпадання двох значень. Повертає "true", якщо значення відрізняються;
- equivalent (et) - перевірка на співпадіння двох значень. Повертає "true", якщо значення співпадають. В перевірках математичних функцій може використовувати похибку для перевірки входження в діапазон допустимих значень;
- notEquivalent (ne) - перевірка на неспівпадіння двох значень. Повертає "true", якщо значення не співпадають. В перевірках математичних функцій може використовувати похибку для перевірки входження в діапазон допустимих значень;
- contains - повертає "true", якщо перший елемент містить в собі другий;
- gt - умова "більше ніж". Передається два аргумента. Якщо значення першого більше від другого, повертається "true".
- ge - умова "більше або дорівнює". Передається два аргумента. Якщо значення першого більше або рівне другому, повертається "true".
- lt - умова "менше ніж". Передається два аргумента. Якщо значення першого менше від другого, повертається "true".
- le - умова "менше або дорівнює". Передається два аргумента. Якщо значення першого менше або рівне другому, повертається "true".
- shouldThrowErrorSync - повертає "true", якщо виконання переданої функції генерує помилку. Виконання синхронне;
- shouldThrowErrorAsync - повертає "true", якщо виконання переданої функції генерує помилку. Виконання асинхронне.
- shouldThrowError - повертає "true", якщо виконання переданої функції генерує помилку;
- mustNotThrowError - повертає "true", якщо виконання переданої функції не генерує помилку;
- shouldMessageOnlyOnce - 