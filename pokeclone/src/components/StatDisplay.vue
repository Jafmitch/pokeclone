<template>
    <div class="container">
        <table>
            <tr class="space">
                <th>Health</th>
                <td>{{ stats.health }}</td>
            </tr>
            <tr class="space">
                <th>Stamina</th>
                <td>{{ stats.stamina }}</td>
            </tr>
            <tr class="space">
                <th>Agility</th>
                <td>{{ stats.agility }}</td>
            </tr>
            <tr class="space">
                <th>Power</th>
                <td>{{ stats.power }}</td>
            </tr>
            <tr class="space">
                <th>Attunement</th>
                <td>{{ stats.attunement }}</td>
            </tr>
            <tr class="space">
                <th>Guard</th>
                <td>{{ stats.guard }}</td>
            </tr>
            <tr class="space">
                <th>Fortitude</th>
                <td>{{ stats.fortitude }}</td>
            </tr>
            <tr class="space">
                <th>Luck</th>
                <td>{{ stats.luck }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { DEFAULT_STATS } from "../scripts/constants";

export default {
    name: "StatCreator",
    props: {
        stats: {
            default: DEFAULT_STATS,
            type: Object,
        },
    },
};
</script>

<style scoped>
table {
    border-spacing: 10px;
}
.container {
    text-align: right;
}
</style>
