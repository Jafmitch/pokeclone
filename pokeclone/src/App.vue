<template>
    <div id="app">
        <combatant-box />
    </div>
</template>

<script>
import CombatantBox from "./components/CombatantBox.vue";

export default {
    name: "App",
    components: { CombatantBox },
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
</style>
