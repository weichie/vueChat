<template>
	<div class="home-component">
		<h1 class="title is-1">{{pageTitle}}</h1>

		<Chatlist />
		<Sendchat />
	</div>
</template>

<script>
	import Chatlist from './chat/Chatlist'
	import Sendchat from './chat/Sendchat'

	export default{
		data(){
			return{
				pageTitle: this.$store.state.chatStore.title
			}
		},
		components: {
			Chatlist,
			Sendchat
		}
	}
</script>