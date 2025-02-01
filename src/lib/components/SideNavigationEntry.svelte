<script lang="ts">
    import Icon from "@iconify/svelte";

    interface Props {
        label: string,
        icon: string,
        callback: () => void,
        labelRight?: string;
    }

    let { label, icon, callback, labelRight = "" }: Props = $props();
</script>

<li class="hover:bg-surface-700 cursor-pointer rounded-lg transition-all duration-75">
    <button type="button" class="p-1 w-full flex items-center gap-2 cursor-pointer"
            onclick={callback}>
        <Icon icon={icon} />
        <span class="">{label}</span>
        <span class="grow text-right text-surface-500">{labelRight}</span>
    </button>
</li>


