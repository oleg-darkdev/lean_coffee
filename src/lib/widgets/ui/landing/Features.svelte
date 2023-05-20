<script>
	const benefitsList = [
		{
			title: 'Lorem ipsum is placeholder',
			desc: 'Simple timers keep everyone focused on the topic',
			icon: ''
		},
		{
			title: 'Lorem ipsum is placeholder',
			desc: 'Invite an unlimited number of attendees to your meeting with no need to register',
			icon: ''
		},
		{
			title: 'Lorem ipsum is placeholder',
			desc: 'Attendees may join the meeting using a url that takes them straight to the board',
			icon: ''
		}
	];
</script>

<section class="flex flex-col justify-center py-16 ">
	<div class="container m-auto mb-12 px-6 text-gray-500 md:px-12 xl:px-0">
		<div class="grid gap-6 lg:grid-cols-7 ">
			<div class="lg:col-span-3">
				<div
					class="space-y-4 rounded-3xl border border-gray-100 bg-white px-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none  sm:px-12 lg:px-8"
				>
					<div
						class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded border-2 border-violet-700 shadow-md shadow-violet-700"
						style="padding-top: 56.25%"
					>
						<iframe
							class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full rounded"
							src="https://player.vimeo.com/video/137857207"
							allowfullscreen
						/>
					</div>
				</div>
			</div>
			<div class="lg:col-span-2">
				<div class="mb-12 flex cursor-pointer flex-col overflow-hidden">
					<div class="flex flex-1 flex-col justify-between">
						<a href="/blog-post" />
						<div class="flex-1">
							<a href="/blog-post">
								<div class="flex space-x-1 pt-6 text-sm text-gray-500">
									<time datetime="2020-03-10"> Mar 10, 2020 </time>
									<span aria-hidden="true"> · </span>
									<span> 4 min read </span>
								</div>
							</a>
							<a href="#" class="mt-2 block space-y-6">
								<h3 class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
									See out let`s play viedo
								</h3>
								<p class="text-lg font-normal text-gray-500">
									Lean Coffee meetings uses a lightweight framework where attendees create the
									agenda and focus is maintained with effective time keeping
								</p>
								<p class="text-lg font-normal text-gray-500">
									Lean Coffee meetings uses a lightweight framework where attendees create the
									agenda and focus is maintained with effective time keeping
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="m-auto px-6 text-gray-600 xl:container md:px-12 xl:px-16">
		<div
			class="dark:lg:bg-darker flex-row-reverse justify-center space-y-6 rounded-[4rem] md:flex md:gap-6 md:space-y-0 lg:items-center lg:bg-gray-50 lg:p-16"
		>
			<div class="md:5/12 lg:w-1/2">
				<img src="" alt="image" loading="lazy" width="" height="" />
			</div>
			<div class="md:7/12 lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
					Quick setup, with no restrictions
				</h2>
				<p class="my-8 text-gray-600 dark:text-gray-300">
					These provide a permanent record to distribute to attendees. The session summary records
					your session time, meeting participants, agenda items and all the comments and actions
					added during the meeting. By actively participating in the meetings through the writing of
					notes and actions, your meeting’s minutes practically write themselves.
				</p>
				<div class="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
					{#each benefitsList as benefit}
						<div class="mt-8 flex gap-4 md:items-center">
							<div class="flex h-12 w-12 gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="m-auto h-6 w-6 text-indigo-500 dark:text-indigo-400"
								>
									<path
										fill-rule="evenodd"
										d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div class="w-5/6">
								<h4 class="text-lg font-semibold text-gray-700 dark:text-indigo-300">
									{benefit.title}
								</h4>
								<p class="text-gray-500 dark:text-gray-400">
									{benefit.desc}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
