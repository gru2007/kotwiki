# Переменные {#vars}
Переменные работают так же как и в любых других языках. У каждой переменной есть тип данных и в зависимости от него можно выполнять различные действия. Так же переменные разделяются на локальные и сетевые, это будет разобрано в след главе.
Вот самые частоиспользуемые типы данных:
- Стандартные
 - Массив
 - Булево значение
 - Строка
 - Число
- "Армовские"
 - Объект
 - Группа
 - Код
 - Конфиг
 - Пространство имен
 - Сторона

На сайте [BisWiki](https://community.bistudio.com/wiki/Category:Data_Types) вы можете узнать весь список. Мы разберем самые частоиспользуемые и необычные.

## Объект {#object}
В Arma 3 объектами считаются как пропы и строения, так и игроки, солдаты и машины. С помощью различных скриптовых команд можно ими манипулировать.

Получить доступ к определенному объекту можно записав предварительно его в переменную через скрипты или через редактор. Так же возможно получить с помощью различных команд поиска объектов в радиусе.
Ключевой объект с которым мы взаимодействуем - игрок. Доступ к нему можно получить через константу `player`, но только локально. С сервера нужно искать через функцию `BIS_fnc_getUnitByUID`, указывая SteamID игрока.
::: code-group
```sqf [Локально]
// Через константу player, например так:
player addRating 500;
```
```sqf [Сервер]
_player = "76561198143028384" call BIS_fnc_getUnitByUID; // Указываем SteamID
_player enableStamina false;
```
:::

## Группа {#groups}
Группы это обычно объединения нескольких объектов солдат или техники. Мы можем найти группу объекта через функцию `group`:
```sqf
_Group = group player;
_Group setBehaviour "COMBAT";
```
::: tip ВАЖНО
Сетевой движок устроен таким образом, что каждая группа пренадлежит опреденной машине, которая обрабатывает данные связанные с ней (ИИ например).

Когда вы спавните ботов, то она будет принадлежать компьютеру, который её поставил. Если у него плохой интернет, то FPS упадет у всех на сервере.

Далее мы разберем как правильно переносить группы.
:::

## Код {#code}
Переменная может так же содержать в себе код для выполнения. Например так:
```sqf
_Handler = {
    _this spawn {
        params ["_unit", "_weapon", "_muzzle", "_mode", "_ammo", "_magazine", "_projectile", "_gunner"];

        switch (_magazine) do {
            // ..
        };
    };
};

["ace_firedPlayer", _Handler] call CBA_fnc_addEventHandler;
```
В данном примере код записывается в переменную, чтобы его вписать в обработчик событий CBA. Однако вы можете и просто выполнить его такой конструкцией, как функцию:
```sqf
_code = {return 1}
[] call _code; // вернет 1
```

## Конфиг {#config}
Структура, которая хранит в себе описание всех игровых объектов, вещей и тд. Подразделяется на конфиг миссии и самой игры.
Вот яркий пример как можно использовать:
```sqf
// ...
private _arsenal = getArray (missionConfigFile >> "CfgArsenals" >> "327" >> "items");
[_this, _arsenal, false] call ace_arsenal_fnc_initBox;
```
В нем мы записали арсенал в отдельный файл в конфиге миссии и получаем из него данные о том, что добавить в объект арсенала ACE.

## Пространство имен {#namespace}
Структура, которая хранит в себе переменные. Самое важное для нас это `missionNamespace`, пространство имен самой миссии.
Так же нельзя не отметить, что каждый [объект](#objects) тоже имеет свое пространство переменных. 
К этим пространствам можно получить доступ через `getVariable` и записать через `setVariable`.

## Сторона {#side}
Просто объект стороны, нужный в некоторых командах. Обычно это такие константы:
```sqf
west or blufor
east or opfor
resistance or independent
civilian
```