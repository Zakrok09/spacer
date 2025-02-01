<script lang="ts">
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import SideBarEntry from "$lib/components/SideNavigationEntry.svelte";

    const { Story } = defineMeta({
        component: SideBarEntry
    });
</script>

<Story name="Base" />

