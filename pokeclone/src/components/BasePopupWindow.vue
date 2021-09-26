<template>
    <div class="popup-background">
        <figure class="popup-window">
            <div class="close-button" v-on:click="closePopup">&times;</div>

            <!-- @slot Popup content -->
            <slot></slot>
        </figure>
    </div>
</template>
<script>
/**
 * This component is the skeleton for a simple popup window that appears in the
 * middle of the screen.
 *
 * @author Jason A. F. Mitchell
 * @displayName Base Popup Window
 */
export default {
    methods: {
        closePopup() {
            this.close();
        },
    },
    props: {
        /**
         * The function supplied by the parent that should close this popup
         * window. This component will call this function when one of its
         * buttons are clicked.
         *
         */
        close: {
            type: Function,
            default: function() {
                console.log("no function registered");
            },
        },
    },
};
</script>
<style scoped>
.close-button {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    padding-right: 5px;
}
.close-button:hover,
.close-button:focus {
    color: #000;
    cursor: pointer;
}
.popup-background {
    align-items: center;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: 10000;
}
.popup-window {
    background-color: white;
    position: fixed;
    text-align: center;
    vertical-align: middle;
    width: min-content;
    z-index: 2;
}
</style>