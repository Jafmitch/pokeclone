<template>
    <div class="combat-box-container">
        <div><stat-creator :onSave="updateStats" /></div>
        <div></div>
        <div><stat-display :stats="stats" /></div>
    </div>
</template>

<script>
import { DEFAULT_STATS } from "../scripts/constants";
import StatCreator from "./StatCreator.vue";
import StatDisplay from "./StatDisplay.vue";

export default {
    components: { StatCreator, StatDisplay },
    data() {
        return {
            stats: DEFAULT_STATS,
        };
    },
    methods: {
        updateStats: function (newStats) {
            for (let statName of Object.keys(newStats))
                if (newStats[statName])
                    this.stats[statName] = newStats[statName];
        },
    },
    name: "CombatentBox",
};
</script>

<style scoped>
.combat-box-container {
    display: grid;
    grid: auto / 200px 50px 300px;
}
</style>
