<template>
	<div class="card">
		<header class="card-header">
			<p class="card-header-title">
				{{boxTitle}}
			</p>
			<a href="#" class="card-header-icon" aria-label="more options">
				<span class="icon">
					<i class="fas fa-angle-down" aria-hidden="true"></i>
				</span>
			</a>
		</header>
		<div class="card-content">
			<div class="content">
				<div class="field">
					<div class="control">
						<textarea class="textarea" placeholder="Send a message..." v-model="chatMessage"></textarea>
					</div>
				</div>
			</div>
		</div>
		<footer class="card-footer">
			<a href="#" class="card-footer-item">Cancel</a>
			<a href="#" class="card-footer-item" @click.prevent="handleSubmit">Send</a>
		</footer>
	</div>
</template>

<script>
	import axios from 'axios'

	export default{
		data(){
			return{
				boxTitle: 'Join the conversation!',
				chatMessage: ''
			}
		},
		methods: {
			handleSubmit(){
				const today = new Date();
				let dd = today.getDate();
				let mm = today.getMonth() + 1;
				const yyyy = today.getFullYear();

				dd = (dd < 10) ? '0' + dd : dd;
				mm = (mm < 10) ? '0' + mm : mm;

				const formData = {
					chat: this.chatMessage,
					date: `${dd}/${mm}/${yyyy}`
				}
				axios.post('https://vuechat-952ec.firebaseio.com/chats.json', formData)
					.then(res => this.chatMessage = '')
					.catch(err => console.error(err));
			}
		}
	}
</script>