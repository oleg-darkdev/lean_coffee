<script>
  import {Logos, CallToAction, Price, Header, Features, Guide} from "../lib/widgets";
</script>

<Header />
<section>
	<div class="mx-auto px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:max-w-7xl 2xl:px-12">
		<div class="mx-auto flex flex-wrap items-center 2xl:max-w-7xl">
			<div class="mb-16 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pr-24">
				<span class="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
					Your tagline
				</span>
				<h1
					class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl"
				>
					Medium length display headline.
				</h1>
				<p class="mb-8 text-left text-base leading-relaxed text-gray-500">
					Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS,
					HTML &amp; Next.js.
				</p>
				<div class="prose-md prose">
					<ul>
						<li class="text-gray-500">Ain't no sunshine when she's gone.</li>
						<li class="text-gray-500">Expensive feature.</li>
						<li class="text-gray-500">Really good feauture.</li>
					</ul>
				</div>
				<div class="mt-0 max-w-7xl sm:flex lg:mt-6">
					<div class="mt-3 rounded-lg sm:mt-0">
						<button
							class="block transform items-center rounded-xl bg-blue-600 px-10 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							>Get bundle</button
						>
					</div>
					<div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
						<button
							class="block transform items-center rounded-xl border-2 border-white px-10 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
							>See features</button
						>
					</div>
				</div>
			</div>
			<div class="mt-12 w-full rounded-xl lg:w-5/6 lg:max-w-lg xl:mt-0">
				<div>
					<div class="relative w-full max-w-lg">
						<div
							class="animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-violet-300 opacity-70 mix-blend-multiply blur-xl filter"
						/>

						<div
							class="animate-blob animation-delay-4000 absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-fuchsia-300 opacity-70 mix-blend-multiply blur-xl filter"
						/>
						<div class="relative">
							<img
								class="mx-auto rounded-lg object-cover object-center shadow-2xl"
								alt="hero"
								src="/assets/images/placeholders/squareCard.png"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<Logos />
<Features />
<CallToAction />
<Guide />
<Price />



