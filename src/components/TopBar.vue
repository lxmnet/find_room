<template>
<div class="top_bar_layout">
	<div class="top_bar">
		<div class="top_bar_position">
			<span>{{ city }}</span>
			<img src="../assets/down.png">
		</div>
		<div class="top_bar_logo"></div>
		<div class="top_bar_user">
			<img src="../assets/user.png" alt="user">
		</div>
	</div>
</div>
</template>
<script>
export default {
	name: 'top-bar',
	props: {
		city: String
	}
}
</script>
<style lang="scss" scoped>
.top_bar_layout{
	width: 100%;
	border-bottom: 1px solid #ebebeb;
	position: fixed;
	top: 0;
	left: 0;
	background: #fff;
}
.top_bar{
	height: 110px;
	padding: 0 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&_position{
		width: 100px;
		font-size: 32px;
		img{
			width: 20px;
			height: 14px;
			margin-left: 10px;
		}
	}
	&_logo{
		width: 190px;
		height: 50px;
		background: url(../assets/logo.png) no-repeat;
		background-size: contain;
		margin-top: 14px;
	}
	&_user{
		width: 100px;
		display: flex;
		justify-content: flex-end;
		margin-top: 10px;
		img{
			width: 46px;
			height: 46px;
		}
	}
}
</style>