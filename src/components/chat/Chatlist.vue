<template>
	<ul class="chatlist">
		<li v-for="(chat, i) in chatList" :key="'chat_' + i">
			<small>{{chat[1]}}</small>
			<strong>Weichie</strong>
			<span>{{chat[0]}}</span>
		</li>
	</ul>
</template>

<script>
	import axios from 'axios'

	export default{
		data(){
			return{
				chatList: []
			}
		},
		created(){
			axios.get('https://vuechat-952ec.firebaseio.com/chats.json')
				.then(res => {
					const data = res.data;
					Object.values(data).map(chat => {
						this.chatList.push([chat.chat, chat.date]);
					})
				})
				.catch(err => console.error(err));
		}
	}
</script>