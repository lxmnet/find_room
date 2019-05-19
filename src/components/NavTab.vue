<template>
<div class="nav_box">
	<div class="nav_item" v-for="item in category">
		<img :src="item.image" :alt="item.title">
		<span>{{ item.title }}</span>
	</div>
</div>
</template>
<script>
export default {
	name: 'nav-tab',
	props: {
		category: Array
	}
}
</script>
<style lang="scss" scoped>
.nav_box{
	width: 100%;
	display: flex;
	margin-top: 65px;
	border-bottom: 1px solid #f1f1f1;
	padding-bottom: 30px;
}
.nav_item{
	width: 25%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	img {
		width: 100px;
		height: 100px;
	}
	span{
		margin-top: 10px;
	}
}
</style>