<script>
	// import { Button } from 'flowbite-svelte';

	const instruction = [
		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			status: 1,
			bgColor: 'bg-current'
		},

		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			status: 0,
			bgColor: 'bg-darkFuchsia'
		},
		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			status: 0,
			bgColor: 'bg-freshGreen'
		},
		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			status: 0,
			bgColor: 'bg-white'
		},
		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			status: 0,
			bgColor: 'bg-white'
		},
		{
			title: 'Lorem ipsum dolor',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			status: 0,
			bgColor: 'bg-white'
		}
	];

	export let appScreen;
</script>

<div class="flex justify-center">
	<div class="max-w-md  timeline h-auto">
		<img class="rounded-t-lg w-full" src="/images/steps.png" alt="Image" />

		<div class="pr-6 pb-4 pt-6 h-auto max-w-sm ">
			<div class="pt-2 w-full flex flex-col h-auto justify-center">
				<div class="text-center">
					<h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-100 dark:text-white">
						Steps
					</h5>
					<!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>  -->
				</div>

				<div class="flex flex-row mb-4">
					<div class="lines ml-4 mr-2 mt-4">
						{#each instruction as step, i}
							<div class="dot" />
							{#if i < instruction.length - 1}
								<div class="line " />
							{/if}
						{/each}
					</div>

					<div class="max-w-lg">
						{#each instruction as step}
							<div
								class="flex  flex-col {step.bgColor}  shadow-md text-gray-500 rounded-lg border border-gray-200 p-2 mb-2"
							>
								<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mb-2text-gray-500 dark:text-gray-400 "><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg> -->

								<a href="/" class="">
									<h5
										class="mb-2 text-2xl font-semibold tracking-tight text-gray-100 dark:text-white"
									>
										{step.title}
									</h5>
								</a>
								<p class="mb-3 font-normal text-gray-100 dark:text-gray-400">
									{step.description}
								</p>
								<a href={step.link} class="inline-flex items-center text-gray-100 hover:underline">
									Пройден
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-5 h-5 ml-2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
											class=""
										/>
									</svg>
								</a>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="flex justify-center w-full ">
        <h2>button</h2>
				<!-- <Button
					size="xl"
					on:click={() => {
						appScreen++;
						console.log('click');
					}}
					color="alternative"
					pill={true}
				>
					Next step
				</Button> -->
			</div>
		</div>
	</div>
</div>

<style>
	.cardTop {
		height: 360px;
		/* background-image: url(/images/steps.png); */
		/* background: #fac24f; */
		border-radius: 8px;
		display: flex;
		overflow: hidden;
		align-items: flex-end;
	}

	.timeline {
		background: #ecf1f524;
		mix-blend-mode: normal;
		backdrop-filter: blur(15px);
		position: absolute;
		top: 144px;
		border-radius: 8px;
	}

	.dot {
		width: 14px;
		height: 14px;
		background: #d1d6e6;
		border-radius: 7px;
	}
	.line {
		height: 136px;
		width: 2px;
		background: #d1d6e6;
		margin-left: 5.3px;
	}
</style>
