<script>
	import { Router } from "@sveltech/routify";
	import { routes } from "../.routify/routes";
</script>

<style global lang="scss">
	@import "./styles/mixins.scss";
	@import "./styles/reset.scss";
	@import "./styles/global.scss";
</style>

<Router {routes} />
