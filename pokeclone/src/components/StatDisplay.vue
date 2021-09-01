<template>
    <div class="container">
        <table>
            <tr class="space">
                <th>Name:</th>
                <td class="display-name">
                    {{ stats.name }}
                </td>
            </tr>
            <tr class="space">
                <th>Type:</th>
                <td colspan="3">
                    <div v-if="stats.type.length > 1">
                        <span :style="getTypeStyle(stats.type[0])">
                            {{ stats.type[0] }}
                        </span>
                        /
                        <span :style="getTypeStyle(stats.type[1])">
                            {{ stats.type[1] }}
                        </span>
                    </div>
                    <div v-else-if="stats.type.length > 0">
                        <span :style="getTypeStyle(stats.type[0])">
                            {{ stats.type[0] }}
                        </span>
                    </div>
                    <div v-else>(none)</div>
                </td>
            </tr>
        </table>
        <table>
            <tr class="space">
                <th>Hlt.</th>
                <td>{{ stats.health }}</td>
                <th>Stm.</th>
                <td>{{ stats.stamina }}</td>
                <th>Agl.</th>
                <td>{{ stats.agility }}</td>
                <th>Pwr.</th>
                <td>{{ stats.power }}</td>
            </tr>
            <tr class="space">
                <th>Atn.</th>
                <td>{{ stats.attunement }}</td>
                <th>Grd.</th>
                <td>{{ stats.guard }}</td>
                <th>Frt.</th>
                <td>{{ stats.fortitude }}</td>
                <th>Lck.</th>
                <td>{{ stats.luck }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
// import { DEFAULT_STATS } from "../scripts/constants";
import { getTypeStyle } from "../scripts/stats_helper";

export default {
    calculated: {},
    methods: {
        getTypeStyle: (type) => getTypeStyle(type),
    },
    props: {
        stats: {
            type: Object,
        },
    },
};
</script>

<style scoped>
table {
    border-spacing: 10px;
    text-align: left;
}
.container {
    text-align: right;
}
.display-name {
    font-size: 14px;
    font-style: italic;
}
</style>
