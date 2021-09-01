<template>
    <div>
        <div class="stat-box-container">
            <div class="padding"><stat-display :stats="stats" /></div>
        </div>
        <div class="space-between"></div>
        <div class="stat-box-container">
            <div class="padding">
                <stat-creator :onSave="updateStats" />
            </div>
        </div>
    </div>
</template>

<script>
// import { DEFAULT_STATS } from "../scripts/constants";
import StatCreator from "./StatCreator.vue";
import StatDisplay from "./StatDisplay.vue";

export default {
    components: { StatCreator, StatDisplay },
    methods: {
        updateStats(newStats) {
            for (let statName of Object.keys(newStats))
                if (newStats[statName])
                    this.stats[statName] = newStats[statName];
        },
    },
    props: {
        stats: {
            type: Object,
        },
    },
};
</script>

<style scoped>
.padding {
    padding: 10px;
}
.space-between {
    height: 5px;
}
.stat-box-container {
    border: 2px solid black;
    padding: 10px;
}
</style>
