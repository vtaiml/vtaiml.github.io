<script>
    import "../app.css";
</script>

<nav>
    <div class="flex-1 flex justify-center mr-auto">
        <a href="/" class="group text-sky-600 transition duration-300 font-extrabold">
            home
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-700"></span></a>
        <a href="/about" class="group text-sky-600 transition duration-300 font-extrabold">
            about
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-700"></span></a>
        <a href="/lectures" class="group text-sky-600 transition duration-300 font-extrabold">
            lectures
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-700"></span></a>
        <a href="/resources" class="group text-sky-600 transition duration-300 font-extrabold">
            resources
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-700"></span></a>
        <a href="https://calendar.google.com/calendar/u/2?cid=dnRhaW1sY2x1YkBnbWFpbC5jb20" class="group text-sky-600 transition duration-300 font-extrabold">
            calendar
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-700"></span></a>
    </div>
</nav>

<slot></slot>

<style lang="postcss">
	nav { 
        margin : 1em; 
    }
    a {
		color: black;
		font-family: 'Ubuntu Mono';
        font-style: oblique;
		font-size: 1.5em;
	}
    a + a {
        margin-left: 1em;
    }
</style>