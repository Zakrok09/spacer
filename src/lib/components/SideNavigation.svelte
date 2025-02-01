<script lang="ts">
    import SideBarEntry from "$lib/components/SideNavigationEntry.svelte";
    import type { Project } from "$lib/entities/Project";
    import { openedTab } from "$lib/state/interface-state";
    import Icon from "@iconify/svelte";

    let { projects }: { projects: Project[] } = $props();

    projects = [{ name: "Project 1", id: 1000 }, { name: "Project 2", id: 1001 }, { name: "Project 3", id: 1002 }];
</script>

<nav aria-label="Task Groups" class="h-screen w-full flex flex-col gap-4 p-4">
    <ul class="w-full flex flex-col gap-2 text-surface-200">
        <!--   TODO: make this be primary colour ghost  -->
        <li class="font-light hover:bg-surface-700 cursor-pointer rounded-lg transition-all duration-75">
            <button type="button" class="px-1 py-2 w-full flex items-center gap-2 cursor-pointer"
                    onclick={() => console.log("ssss")}>
                <Icon icon="heroicons-outline:plus" /> New Task
            </button>
        </li>
<!--        <SideBarEntry label="New Task" icon="heroicons-outline:plus" callback={() => console.log("ssss")} />-->
        <SideBarEntry label="Global" icon="heroicons-outline:book-open" callback={() => openedTab.set(0)} />
        <SideBarEntry label="Impending" icon="heroicons-outline:login" callback={() => openedTab.set(1)} />
        <SideBarEntry label="Today" icon="heroicons-outline:sun" callback={() => openedTab.set(2)} />
        <hr class="text-surface-400">
        {#each projects as project }
            <SideBarEntry label={project.name} icon="" callback={() => openedTab.set(project.id)} />
        {/each}
    </ul>
</nav>