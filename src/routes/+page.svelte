<script lang="ts">

import SideNavigation from "$lib/components/SideNavigation.svelte";
import { openedTab } from "$lib/state/interface-state";
</script>

<div class="w-80 bg-surface-800 flex flex-col">
    <SideNavigation projects={[]} />
</div>
<div class="w-full">
    <p>assadsasasd</p>{$openedTab}
</div>
