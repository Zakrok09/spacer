import { writable } from "svelte/store";

/**
 * Special ids:
 * 0 - Global view on tasks
 * 1 - Impending tasks (from either project)
 * 2 - Tasks for today (from either project)
 * 3 - Creating a new project
 */
export const openedTab = writable<number>(0);