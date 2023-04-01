<script>
    let discord = 'https://discord.gg/WfQ8ECZqDv'
    let email = 'vtaimlclub@gmail.com'
</script>

<div class="grid grid-cols-7 gap-10 pt-5">
	<div class="col-span-4 pl-20">
		<h1 class="text-6xl text-violet-700 font-extrabold pb-5">about</h1>
		<p class="text-3xl">
			We're a beginner-friendly club focused on helping disseminate info about machine learning.
            Our club primarily consists of theory lectures/workshops. We go over the behind-the-hood of different ML 
			architectures, show examples of real use cases, and discuss current events in AI.
			<br><br>
			If you're a student and you want to get in touch, the best way is via <a href={discord}>Discord</a>. You can also reach
            out to us via email at <a href={"mailto:" + email}>vtaimclub@gmail.com</a>.
		</p>
	</div>
	<div class="col-span-3 pr-20">
		<h1 class="text-6xl text-violet-700 font-extrabold pb-5">current leadership</h1>
		<p class="text-3xl"><b>President: </b><a href="https://v1kramb.github.io">Vikram Bala</a></p>
		<p class="text-3xl"><b>Vice President: </b>Krish Ganotra</p>
		<p class="text-3xl"><b>Executive Lecturer: </b>Caleb McIrvin</p>
		<p class="text-3xl"><b>Treasurer: </b>Aaron Whang</p>
		<p class="text-3xl"><b>Public Relations Officer: </b>Leah Ican</p>
		<p class="text-3xl"><b>Social Media Manager: </b>Vaishnavi Alavala</p>
		<p class="text-3xl"><b>Creative Director: </b>Isha Kandunoori</p>
		<p class="text-3xl"><b>Advisor: </b>Chreston Miller</p>
	</div>
</div>  
<div class="col-span-4 pl-20 pr-20">
	<h1 class="text-6xl text-violet-700 font-extrabold pb-5">past leadership</h1>
	<p class="text-3xl">
		<b>Notable Alumni: </b>
		Jonathan Reynosa (Co-President), Jinit Shah (Co-President), Goral Pahuja (Co-Vice President), Prad Singhal (Co-Vice President), 
		Aidan Sprague (Treasurer), Yasine Bensouda (Public Relations Officer), Simrat Khalsa (Social Media Manager), Sakshi Pitre (Creative Director), Colin Peppler
	</p>
</div>

<style>
	h1, p {
		font-family: 'Ubuntu Mono';
	}
	a {
        color: darkorchid;
        font-family: 'Ubuntu Mono';
		/* text-decoration: none; */
    }
	p + p {
		padding-top: 0.5em;
	}
</style>