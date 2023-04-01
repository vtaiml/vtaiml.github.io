<script>
    let logo = '/logo.png'
    let discord = 'https://discord.gg/WfQ8ECZqDv'
    let insta = 'https://www.instagram.com/vtaiml/'
    let gobbler = 'https://gobblerconnect.vt.edu/organization/aiml'
    let email = 'vtaimlclub@gmail.com'
    let discord_logo = '/discord.png'
    let insta_logo = '/instagram.png'
    let gobbler_logo = '/vt.png'
    let email_logo = '/gmail.png'
    let listserv = 'https://gmail.us7.list-manage.com/subscribe?u=3a0a34fe9f1a32722c65f5ed6&id=408de5089a'
</script>

<div class="grid grid-cols-3 items-center h-full pt-5">
    <div class="pl-10 p-2 text-start">
        <h1 class="text-6xl font-extrabold">Hi. We're Virginia Tech's <h1 class="text-violet-700">AI/ML Club.</h1></h1>
    </div>
    <div class="p-2 justify-self-center">
        <img src={logo} alt="club logo" class="rounded-full">
    </div>
    <div class="pr-10 p-2 text-end">
        <h2 class="text-2xl font-normal">
            We get together every week to discuss ML architectures and recent innovations.
        </h2>
        <br/>
        <h2 class="text-2xl font-normal"><h2 class="text-violet-700 font-bold">Meeting Time: </h2>Tuesday 5PM @ Randolph 216</h2>
        <br/>
        <h2 class="text-2xl font-normal">
            <h2 class="text-violet-700 font-bold">Discord: </h2>
            Click <a href={discord} class="underline">this link</a> to get regular announcements/location updates!
        </h2>
        <br/>
        <h2 class="text-2xl font-normal">
            <h2 class="text-violet-700 font-bold">Listserv: </h2>
            Join our <a href={listserv} class="underline">listserv</a> for regular emails!
        </h2>

        
    </div>
</div>

<footer class="flex justify-center pt-20">
    <a href={discord}><img src={discord_logo} alt="Discord link" class="border-4 transition-all duration-500 hover:border-violet-700 rounded object-contain h-20 w-20"></a>
    <a href={insta}><img src={insta_logo} alt="Instagram link" class="bg-zinc-500 border-4 transition-all duration-500 hover:border-violet-700 rounded object-contain h-20 w-20"></a>
    <a href={gobbler}><img src={gobbler_logo} alt="GobblerConnect link" class="bg-zinc-500 border-4 transition-all duration-500 hover:border-violet-700 rounded object-contain h-20 w-20"></a>
    <a href={"mailto:" + email}><img src={email_logo} alt="Mail link" class="border-4 transition-all duration-500 hover:border-violet-700 rounded object-contain h-20 w-20"></a>
</footer>

<style lang="postcss">
    :global(html) {
        background-color: #9AADB9;
    }

	h1, h2, a {
		font-family: 'Ubuntu Mono';
	}
    a {
        color: darkorchid;
    }
    a + a {
        margin-left: 1em;
    }
</style>