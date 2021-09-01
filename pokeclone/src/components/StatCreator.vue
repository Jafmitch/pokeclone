<template>
    <div class="container">
        <div class="space">
            <label class="bold">Name</label>
            <input v-model="stats.name" type="text" name="name" />
        </div>
        <div>
            <p class="bold">Type</p>
            <div class="type-grid-container">
                <div class="radio-list">
                    <p>Type 1</p>
                    <div :key="type" v-for="type of types">
                        <input type="radio" v-model="typeVal1" :value="type" />
                        <label :for="type" :style="typeStyle(type)">
                            {{ type }}
                        </label>
                    </div>
                </div>
                <div>
                    <p>Type 2</p>
                    <input type="radio" v-model="typeVal2" value="" />
                    <label for="none">(none)</label>
                    <div :key="type" v-for="type of types">
                        <input :value="type" type="radio" v-model="typeVal2" />
                        <label :style="typeStyle(type)" for="none">{{
                            type
                        }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p class="bold">Stats</p>
            <div class="grid-container">
                <div class="space">
                    <label for="health">Health</label>
                    <input
                        class="small-input"
                        name="health"
                        type="text"
                        v-model="stats.health"
                    />
                </div>
                <div class="space">
                    <label for="stamina">Stamina</label>
                    <input
                        class="small-input"
                        name="stamina"
                        type="text"
                        v-model="stats.stamina"
                    />
                </div>
                <div class="space">
                    <label for="agility">Agility</label>
                    <input
                        class="small-input"
                        name="agility"
                        type="text"
                        v-model="stats.agility"
                    />
                </div>
                <div class="space">
                    <label for="power">Power</label>
                    <input
                        class="small-input"
                        name="power"
                        type="text"
                        v-model="stats.power"
                    />
                </div>
                <div class="space">
                    <label for="attunement">Attunement</label>
                    <input
                        class="small-input"
                        name="attunement"
                        type="text"
                        v-model="stats.attunement"
                    />
                </div>
                <div class="space">
                    <label for="guard">Guard</label>
                    <input
                        class="small-input"
                        name="guard"
                        type="text"
                        v-model="stats.guard"
                    />
                </div>
                <div class="space">
                    <label for="fortitude">Fortitude</label>
                    <input
                        class="small-input"
                        name="fortitude"
                        type="text"
                        v-model="stats.fortitude"
                    />
                </div>
                <div class="space">
                    <label for="luck">Luck</label>
                    <input
                        class="small-input"
                        name="luck"
                        type="text"
                        v-model="stats.luck"
                    />
                </div>
            </div>
        </div>
        <div class="extra-space">
            <button v-on:click="handleSave">Save</button>
        </div>
    </div>
</template>

<script>
import { TYPE_NAMES } from "../scripts/constants";
import { getTypeStyle } from "../scripts/stats_helper";

export default {
    computed: {
        types: () => TYPE_NAMES,
    },
    data() {
        return { stats: {}, typeVal1: "air", typeVal2: "" };
    },
    methods: {
        typeStyle: getTypeStyle,
        handleSave() {
            if (this.onSave) {
                this.stats.type = [this.typeVal1];
                if (this.typeVal2 && this.typeVal2 != this.typeVal1)
                    this.stats.type.push(this.typeVal2);
                this.onSave(this.stats);
            } else console.log("No function registered on save");
            this.stats = {};
        },
    },
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
label {
    padding-right: 20px;
}
.bold {
    font-weight: bold;
}
.container {
    text-align: left;
}
.extra-space {
    padding: 10px;
}
.grid-container {
    display: grid;
    grid: auto auto / auto auto auto auto;
}
.small-input {
    height: 12px;
    width: 30px;
}
.space {
    padding: 5px;
}
.type-grid-container {
    display: grid;
    grid: auto / auto auto;
}
</style>
