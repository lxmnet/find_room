<template>
<div class="layout">
	<top-bar :city="city"></top-bar>
	<search></search>
	<banner :link="banner_link"></banner>
	<nav-tab :category="category"></nav-tab>
	<product-list :products="products"></product-list>
</div>
</template>

<script>
import axios from 'axios'
import TopBar from '@/components/TopBar'
import Search from '@/components/Search'
import Banner from '@/components/Banner'
import NavTab from '@/components/NavTab'
import ProductList from '@/components/ProductList'

export default {
  name: 'home',
  components: {
    TopBar,Search,Banner,NavTab,ProductList
  },
  data() {
  	return {
  		city: '北京',
  		banner_link: '',
  		category: [],
  		products: []
  	}
  },
  methods: {

  },
  mounted(){
  	axios.get('/index').then((res)=>{
  		this.category = res.data.category
  		this.banner_link = res.data.banner
  		this.products = res.data.products
  	})
  }
}
</script>
<style>
*{
	margin: 0;
	padding: 0;
	background: none;
	border: none;	
}
.layout{
	max-width: 640PX;
	margin: 0 auto;
}
</style>