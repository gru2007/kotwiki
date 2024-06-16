# Description.ext
Это один из главных файлов в Вашей миссии, он описывает все её параметры, константы и тд. Так что мы сейчас разберем его основные составляющие.

## Структура файла {#structure}
Файл состоит из классов и параметров ключ-значение внутри них. Всё, что вы напишите в этом файл, может быть получено через скрипты SQF.

Рассмотрим пример:
::: code-group
```ext [description.ext]
// Эта конструкция позволяет включать другие файлы внутрь description.ext, позволяет сохранить читаемость 
#include "profiles_framework\roles.ext" // [!code highlight]

// Основные параметры миссии, полный список на сайте BisWiki
loadScreen="data\loadScreen.jpg";
overviewPicture="data\overviewPicture.paa";
OnLoadMission = "Добро пожаловать на сервер";
onLoadName = "KOT";
briefingName = "KOT";
author = "created by kot";
overviewText="Добро пожаловать на сервер";
cba_settings_hasSettingsFile=1;
respawnOnStart=-1;
DisabledAI = 1;
enableDebugConsole[] = {};
zeusCompositionScriptLevel = 2;
respawn=3;
respawnDelay=6.5841131;
forceRotorLibSimulation = 2;            // https://community.bistudio.com/wiki/Description.ext#forceRotorLibSimulation

// Другие параметры, записаны через структуру класса
class Header
{
	gameType =  RPG;	// Game type
	minPlayers =  1;	// minimum number of players the mission supports
	maxPlayers = 128;	// maximum number of players the mission supports
};

// Объявляение функций
class CfgFunctions {
	class KOT {
		class Arsenals {
			file = "systems\arsenals";
			class initArsenal { };
			class initMultiArsenal { };
		};
	};
};
```
:::

Давайте рассмотрим синтаксис ext немного глубже:
```ext
#include "..\roles_id.ext" // Вышеописанное включение других файлов // [!code focus]

class CfgSkills {
  class supply_medical {
    roleRequired = false; // Можно задать bool значение // [!code focus]
    roles[] = {};
    condition = "true";
    flagItems[] = {"JLTS_ids_gar_medical","JLTS_ids_gar_commander"}; // Можно задать массив используя такую конструкцию // [!code focus]
    init = "";
    onRespawn = "_thisConfig call SOG_fnc_removeAllVars"; // Можно задать обычную строку // [!code focus]

    items[] = { // [!code focus:3]
        {"MRH_FoldedMedicalTent",1} // Массивы могут быть вложенными 
    };

    class action1 { // так же можно вкладывать классы в классы // [!code focus:7]
      tooltip = "<t color='#2ECC71'>Запрос медикаментов</t>";
      script = "_thisConfig spawn SOG_fnc_skill_supply";
      priority = -1;
      condition = "(vehicle player == player) && [_thisFlag] call SOG_fnc_checkFlag";
      arguments = "[]";
    };

    maxUses = 2;
    cd = 15 * 60; // Можно выполнять математические операции // [!code focus]
  };

};
```

## Все параметры {#all}
Параметров, что можно указать очень много, и их перечислили на [этой странице BisWiki](https://community.bistudio.com/wiki/Description.ext). Просто включите переводчик и прочитайте описание, после чего опробуйте.