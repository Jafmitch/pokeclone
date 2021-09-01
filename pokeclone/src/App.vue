<template>
    <div id="app">
        <div class="app-container">
            <div>
                <combatant-box name="player1" :stats="player1Stats" />
            </div>
            <div></div>
            <div>
                <combatant-box name="player2" :stats="player2Stats" />
            </div>
        </div>
    </div>
</template>

<script>
import { DEFAULT_STATS } from "./scripts/constants";
import CombatantBox from "./components/CombatantBox.vue";

function initStats() {
    let object = {};
    for (let key of Object.keys(DEFAULT_STATS))
        object[key] = DEFAULT_STATS[key];

    return object;
}

export default {
    components: { CombatantBox },
    data: function () {
        return {
            player1Stats: initStats(),
            player2Stats: initStats(),
        };
    },
};
</script>

<style scoped>
#app {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
    font-family: "Times New Roman", Times, serif;
    font-size: 12px;
    margin-top: 60px;
    text-align: center;
}
.app-container {
    display: grid;
    display: grid;
    grid: auto / 40% 20% 40%;
}
</style>
