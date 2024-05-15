<script lang="ts">
	import { Styles, TabContent, TabPane } from '@sveltestrap/sveltestrap';

	import traslate from './translate';
	import config from './configs/config';

	let theme = 'dark';
</script>

<Styles {theme} />

<TabContent pills>
	<TabPane tabId="setting" tab={traslate('tab.setting')} active>
		<p></p>
		<content>
			설정
		</content>
	</TabPane>
	<TabPane tabId="tips" tab={traslate('tab.tips')}>
		<p></p>
		<content>
			게임 팁
		</content>
	</TabPane>
	<TabPane tabId="buildGPT" tab={traslate('tab.buildGPT')}>
		<p></p>
		<content>
			빌드 추천
		</content>
	</TabPane>
	<TabPane tabId="changes" tab={traslate('tab.changes')}>
		<p></p>
		<content>
			업데이트 내역
		</content>
	</TabPane>
</TabContent>
<footer>
	<p>{traslate('app.made_in')}  <a href={config.info.github_url} target="_blank">Simple POE Trade</a></p>
</footer> 

<style>
	/* main {
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
	} */

	content {
		padding: 10px;
	}

	footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    /* background-color: #fff; */
    padding: 10px 0;
	}

	footer a {
		text-decoration: none;
		/* color: inherit; */
	}
</style>
