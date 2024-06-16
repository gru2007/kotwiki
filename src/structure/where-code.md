# Где храняться скрипты в Arma 3? {#where}

Основные скрипты в Arma 3 храняться в файлах SQF в миссии или в модах, однако вызывать код внутри них можно по разному:
- Через функцию `execVM`
- Преобразовав файл в функцию вида `ПРЕФИКС_fnc_Функция`

## Способы запуска {#ways}
Предположим что у нас такая файловая структура в миссии:
```
.
├─ description.ext
├─ coolscripts
│  ├─ fn_callDrone.sqf
└─ badscripts
   └─ explodeDrone.sqf
```
### `execVM` {#execVM}
1. Вызвать файл `explodeDrone.sqf` мы сможем написав такой код:
```sqf
[] execVM "badscripts\explodeDrone.sqf";
```
### `KOT_fnc_callDrone` {#func}
1. А чтобы вызвать `fn_callDrone.sqf`, приписка `fn_` обязательна, нам нужно в файл `description.ext` добавить такой код:
::: code-group
```ext [description.ext]
class CfgFunctions {
	class KOT { // Префикс любой на латинице
		class CoolScirpts { // Что угодно на латинице
			file = "coolscripts"; // Путь до папки, можно добавить и подпапку через \ 
			class callDrone { }; // Название файла после fn_
		};
	};
};
```
:::
2. После этого файл можно вызвать через такую команду:
```sqf
[/*Аргументы*/] call KOT_fnc_callDrone; // call позволяет дождаться выполнения, так код может вернуть значение
[/*Аргументы*/] spawn KOT_fnc_callDrone; // spawn просто запустит код отдельно
```