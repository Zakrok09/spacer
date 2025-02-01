<script lang="ts">
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import SideBar from "./SideNavigation.svelte";

    const { Story } = defineMeta({
        component: SideBar
    });
</script>

<Story name="Base" args={{ projects: [] }} />

