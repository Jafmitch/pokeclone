<template>
    <div>
        <div class="combatant-title">{{ playerName }}</div>
        <div class="stat-box-container">
            <div class="padding"><stat-display :stats="stats" /></div>
        </div>
        <div class="space-between"></div>
        <div><button v-on:click="editStats">Edit Stats</button></div>
    </div>
</template>

<script>
import StatDisplay from "./StatDisplay.vue";

export default {
    components: { StatDisplay },
    methods: {
        editStats() {
            if (this.edit) this.edit(this.playerName);
        },
    },
    props: {
        edit: {
            type: Function,
        },
        playerName: {
            type: String,
        },
        stats: {
            type: Object,
        },
    },
};
</script>

<style scoped>
.combatant-title {
    background-color: black;
    color: white;
    font-weight: bold;
    text-align: center;
}
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
