# Скрипты по событиям {#event_scipts}
Так же есть файлы, которые вызываются при определенных обстоятельствах, инициализация игрока (клиент,сервер...), респавн игрока и так далее.

Ниже приведена таблица с [BisWiki](https://community.bistudio.com/wiki/Event_Scripts), подробнее можно прочитать там. Мы же разберем самые основные.
<table class="wikitable valign-top-row-2">
<tbody><tr>
<th>init* скрипты
</th>
<th>(on)Player* скрипты
</th>
<th>Другое
</th></tr>
<tr>
<td style="padding-right: 2em">
<div><div class="columns" style="column-count: 2 ; display: inline-block">
<ul><li><a href="https://community.bistudio.com/wiki/Event_Scripts#init.sqf">init.sqf</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#init.sqs">init.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#init3DEN.sqf">init3DEN.sqf</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#initIntro.sqf">initIntro.sqf</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#initIntro.sqs">initIntro.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#initJIPcompatible.sqf">initJIPcompatible.sqf</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#initPlayerLocal.sqf">initPlayerLocal.sqf</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#initPlayerServer.sqf">initPlayerServer.sqf</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#initServer.sqf">initServer.sqf</a></li></ul>
</div></div>
</td>
<td style="padding-right: 2em">
<div><div class="columns" style="column-count: 2 ; display: inline-block">
<ul><li><a href="https://community.bistudio.com/wiki/Event_Scripts#onPlayerKilled.sqf">onPlayerKilled.sqf</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#onPlayerKilled.sqs">onPlayerKilled.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#onPlayerRespawn.sqf">onPlayerRespawn.sqf</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#onPlayerRespawn.sqs">onPlayerRespawn.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#onPlayerRespawnAsSeagull.sqs">onPlayerRespawnAsSeagull.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#onPlayerRespawnOtherUnit.sqs">onPlayerRespawnOtherUnit.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#onPlayerResurrect.sqs">onPlayerResurrect.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#playerKilledScript.sqs">playerKilledScript.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#playerRespawnScript.sqs">playerRespawnScript.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#playerRespawnSeagullScript.sqs">playerRespawnSeagullScript.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#playerRespawnOtherUnit.sqs">playerRespawnOtherUnit.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#playerResurrectScript.sqs">playerResurrectScript.sqs</a></li></ul>
<p><br>
</p>
</div></div>
</td>
<td style="padding-right: 2em">
<ul><li><a href="https://community.bistudio.com/wiki/Event_Scripts#exit.sqf">exit.sqf</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#exit.sqs">exit.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#missionFlow.fsm">missionFlow.fsm</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#onFlare.sqs">onFlare.sqs</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#pauseOnLoad.sqf">pauseOnLoad.sqf</a></li>
<li><a href="https://community.bistudio.com/wiki/Event_Scripts#teamSwitchScript.sqs">teamSwitchScript.sqs</a></li></ul>
</td></tr></tbody></table>

## Основные файлы {#files}
Все файлы приведенные выше должны быть расположены в корне миссии. Разберем главные из них:

### **init.sqf** `Все`
Вызывается при запуске миссии как на клиентах, что входят на сервер, так и на самом сервере.

### **initPlayerLocal.sqf** `Клиент`
Вызывается при входе игрока на сервер у него локально. Полезен для клиентских настроек, например цветокоррекции.

### **initPlayerServer.sqf** `Сервер`
Вызывается при входе игрока на сервер на сервере, позволяет например выполнить проверку на зевса и выдать.

### **initServer.sqf** `Сервер`
Вызывается при старте сервера, нужен чисто для настроек сервера и запуска скриптов.

### **onPlayerRespawn.sqf** `Клиент`
Вызывается при возрождении игрока локально у него.