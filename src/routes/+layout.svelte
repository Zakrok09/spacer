<script lang="ts">
    let { children } = $props();
    import "../app.css";
</script>

<div class="flex text-surface-100 bg-surface-900 font-sans">
    {@render children()}
</div>
