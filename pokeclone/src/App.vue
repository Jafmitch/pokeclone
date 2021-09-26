<template>
    <div id="app">
        <base-popup-window :close="closeStatEditor" v-if="editingStats">
            <h2 center-title>Stat Editor</h2>
            <div class="padding">
                <stat-creator :onSave="updateStats" />
            </div>
        </base-popup-window>
        <div class="app-container">
            <div class="combat-box">
                <combatant-box
                    player-name="Player 1"
                    :edit="openStatEditor"
                    :stats="player1Stats"
                />
            </div>
            <div class="combat-box">
                <combatant-box
                    player-name="Player 2"
                    :edit="openStatEditor"
                    :stats="player2Stats"
                />
            </div>
        </div>
        <div class="bottom-log">
            <h2>Combat Log</h2>
            <div class="log-messages">
                <div :key="log.timeStamp" v-for="log of combatLog">
                    -> {{ log.message }}
                    <li
                        class="log-etc"
                        :key="message"
                        v-for="message of log.etc"
                    >
                        {{ message }}
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BasePopupWindow from "./components/BasePopupWindow.vue";
import CombatantBox from "./components/CombatantBox.vue";
import StatCreator from "./components/StatCreator.vue";

import { DEFAULT_STATS } from "./scripts/constants";
import { isValid } from "./scripts/stats_helper";

function initStats() {
    let object = {};
    for (let key of Object.keys(DEFAULT_STATS))
        object[key] = DEFAULT_STATS[key];

    return object;
}
export default {
    components: { BasePopupWindow, CombatantBox, StatCreator },
    data: function () {
        return {
            combatLog: [],
            editingStats: "",
            player1Stats: initStats(),
            player2Stats: initStats(),
        };
    },
    methods: {
        addToLog(message) {
            let log = {};
            if (typeof message === "string") log.message = message;
            else log = message;
            log.timeStamp = Date.now();
            this.combatLog.push(log);
        },
        closeStatEditor() {
            this.editingStats = "";
            this.addToLog(`Closed stats editor dialogue.`);
        },
        openStatEditor(target) {
            this.editingStats = target;
            this.addToLog(`Opened stats editor dialogue for ${target}.`);
        },
        updateStats(newStats) {
            let stats = {};
            let log = {
                message: `Updated ${this.editingStats} stats.`,
                etc: [],
            };
            if (this.editingStats === "Player 1") stats = this.player1Stats;
            else if (this.editingStats === "Player 2")
                stats = this.player2Stats;
            for (let statName of Object.keys(newStats)) {
                console.log(typeof newStats[statName]);
                if (isValid(newStats[statName], statName)) {
                    log.etc.push(
                        `${statName.toUpperCase()} changed to ${
                            newStats[statName]
                        }`
                    );
                    stats[statName] = newStats[statName];
                }
            }

            this.addToLog(log);
            this.editingStats = "";
        },
    },
    mounted() {
        this.addToLog("Combat started.");
    },
};
</script>

<style scoped>
#app {
    font-family: "Times New Roman", Times, serif;
    font-size: 12px;
    text-align: center;
}
.app-container {
    display: grid;
    display: grid;
    grid: auto / 50% 50%;
}
.bottom-log {
    border: 2px solid black;
    bottom: 1%;
    column-span: all;
    height: 30vh;
    padding: 5px;
    position: fixed;
    width: 98%;
}
.center-title {
    text-align: center;
}
.combat-box {
    margin: 20px;
}
.log-messages {
    border: 1px solid grey;
    font-family: "Courier New";
    font-size: 11px;
    overflow-y: scroll;
    padding-left: 20px;
    text-align: left;
    height: 80%;
}
.log-etc {
    padding-left: 30px;
}
</style>
