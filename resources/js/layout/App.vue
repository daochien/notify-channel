<template>
    <div class="app-component">
        <div class="app-wapper">
            <nav-bar></nav-bar>
            <side-bar></side-bar>
            <router-view></router-view>
        </div>
        <right-bar></right-bar>
    </div>
</template>
<script>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
import Rightbar from './Rightbar.vue';

export default {
    components: {
        'nav-bar': Navbar,
        'side-bar': Sidebar,
        'right-bar': Rightbar,
    },
    created() {

    }

}
</script>
<style lang="scss" scoped>

.app-component {
    .app-wapper {
        height: 100%;
        overflow: hidden;
        width: 100%;
    }

}
</style>
