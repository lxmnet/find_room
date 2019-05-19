<template>
<div class="search">
	<input type="text" placeholder="你想住在哪里？">
</div>
</template>
<script>
export default {
	name: 'search',
	props: {

	}
}
</script>
<style lang="scss" scoped>
.search{
	margin: 25px;
	height: 70px;
	background: #f5f5f5;
	border-radius: 2em;
	margin-top: 130px;
	input{
		width: 100%;
		height: 100%;
		outline: none;
		text-indent: 1em;
	}
}
</style>