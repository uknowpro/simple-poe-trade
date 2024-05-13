<script lang="ts">
	import traslate from './translate';
	import config from './configs/config';

	export let ddd: string;
</script>


<h1>Progress {ddd}</h1>
<footer>
	<p>{traslate('app.made_in')} <a href={config.info.github_url} target="_blank">Simple POE Trade</a></p>
</footer> 

<style>
	main {
		text-align: left;
		padding: 1em;
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: #fff;
    padding: 10px 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
