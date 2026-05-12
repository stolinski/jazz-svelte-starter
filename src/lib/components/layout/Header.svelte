<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { getSession } from 'jazz-tools/svelte';

	const session = getSession();
	const is_admin = $derived(session?.claims.is_admin);
	const pathname = $derived(page.url.pathname);
</script>

{#if is_admin}
	<header>
		<nav>
			<a class:active={pathname === '/'} href={resolve('/')}>Home</a>
		</nav>
	</header>
{/if}
