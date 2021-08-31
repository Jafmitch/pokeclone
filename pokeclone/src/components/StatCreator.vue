<template>
    <div class="container">
        <div class="space">
            <label for="health">Health</label>
            <input v-model="stats.health" type="text" name="health" />
        </div>
        <div class="space">
            <label for="stamina">Stamina</label>
            <input v-model="stats.stamina" type="text" name="stamina" />
        </div>
        <div class="space">
            <label for="agility">Agility</label>
            <input v-model="stats.agility" type="text" name="agility" />
        </div>
        <div class="space">
            <label for="power">Power</label>
            <input v-model="stats.power" type="text" name="power" />
        </div>
        <div class="space">
            <label for="attunement">Attunement</label>
            <input v-model="stats.attunement" type="text" name="attunement" />
        </div>
        <div class="space">
            <label for="guard">Guard</label>
            <input v-model="stats.guard" type="text" name="guard" />
        </div>
        <div class="space">
            <label for="fortitude">Fortitude</label>
            <input v-model="stats.fortitude" type="text" name="fortitude" />
        </div>
        <div class="space">
            <label for="luck">Luck</label>
            <input v-model="stats.luck" type="text" name="luck" />
        </div>
        <div class="space">
            <button v-on:click="handleSave">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { stats: {} };
    },
    methods: {
        handleSave: function () {
            if (this.onSave) this.onSave(this.stats);
            else console.log("No function registered on save");
            this.stats = {};
        },
    },
    name: "StatCreator",
    props: {
        onSave: {
            default: null,
            type: Function,
        },
    },
};
</script>

<style scoped>
button {
    font-family: "Times New Roman", Times, serif;
    font-size: 11px;
}
input {
    height: 12px;
    width: 30px;
}
label {
    padding-right: 20px;
}
.container {
    text-align: right;
}
.space {
    padding: 5px;
}
</style>
