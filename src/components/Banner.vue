<template>
<div class="banner_box">
	<img :src="link" alt="banner" class="banner">
</div>
</template>
<script>
export default {
	name: 'banner',
	props: {
		link: String
	}
}
</script>
<style>
.banner_box{
	width: 100%;
	display: flex;
	justify-content: center;
}
.banner{
	width: 93%;
	height: 340px;
}
</style>