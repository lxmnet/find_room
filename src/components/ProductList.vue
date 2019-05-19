<template>
<div class="product_list">
	<div class="product_list_title">优选房源</div>
	<div class="product_list_item" v-for="item in products">
		<div class="product_list_item_layout">
			<img :src="item.image" :alt="item.title">
			<div class="product_list_info">
				<p>{{ item.title }}</p>
				<span>{{ item.desc }}</span>
				<div class="tag_box">
					<div class="tag" v-for="tag in item.tags">{{ tag }}</div>
				</div>
				<div class="price"><i>{{ item.price }}</i>元/月</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
	name: 'product-list',
	props: {
		products: Array
	}
}
</script>
<style lang="scss" scoped>
.product_list_title{
	padding: 0 25px;
	font-size: 42px;
	font-weight: 700;
	color: #333;
	margin: 30px 0 0 0;
}
.product_list_item_layout{
	display: flex;
	border-bottom: 1px solid #f1f1f1;
	padding: 30px 0;
}
.product_list_item {
	padding: 0 25px;
	img{
		width: 220px;
		height: 168px;
		margin-right: 20px;
	}	
	.product_list_info{
		display: flex;
		flex-direction: column;
		p{
			font-size: 28px;
			overflow : hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		span{
			font-size: 24px;
			color: #999;
			margin: 6px 0;
		}
		.tag_box{
			display: flex;
			align-items: center;
			.tag{
				padding: 5px;
				height: 30px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #5680a6;
				background: #e6ecf2;
				border-radius: 6px;	
				margin-right: 10px;			
			}
		}
		.price{
			font-size: 18px;
			color: #fd5e60;
			margin-top: 10px;
			i{
				font-style: normal;
				font-size: 30px;
				font-weight: 700;
			}
		}
	}
}
</style>