<script>
	let open = false;

  import { links } from "../../../shared";
</script>

<header class=" w-full max-w-7xl">
	<div
		x-data={open}
		class="mx-auto flex max-w-screen-xl flex-col p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
	>
		<div class="flex flex-row items-center justify-between lg:justify-start">
			<a
				href="./index.html"
				class="tracking-relaxed transform text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out lg:pr-8"
			>
				wickedblocks
			</a>
			<button
				class="focus:shadow-outline rounded-lg focus:outline-none md:hidden"
				on:click={() => (open = !open)}
			>
				<svg fill="currentColor" viewBox="0 0 20 20" class="h-8 w-8">
					<path
						x-show={!open}
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
					<path
						x-show={open}
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
						style="display: none"
					/>
				</svg>
			</button>
		</div>

		<nav
			:class={open ? 'hidden:' : 'flex:'}
			class="hidden flex-grow flex-col items-center border-blue-600 pb-4 md:flex md:flex-row md:justify-end md:pb-0 lg:border-l-2 lg:pl-2"
		>
    {#each links as link}
			<a
				class="focus:shadow-outline mt-2 px-4 py-2 text-sm text-gray-500 hover:text-blue-600 focus:outline-none md:mt-0"
				href={link.link}>{link.title}</a
			>
    {/each}

			<div class="inline-flex list-none items-center gap-2 lg:ml-auto">
				<button
					class="block transform items-center rounded-xl border-2 border-white px-10 py-2.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
					>Sign in</button
				>
				<button
					class="block transform items-center rounded-xl bg-blue-600 px-10 py-3 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>Sign up</button
				>
			</div>
		</nav>
	</div>
</header>
