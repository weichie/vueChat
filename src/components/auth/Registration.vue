<template>
	<div class="registration-component">
		<h1 class="title is-1">Registration</h1>
		<form action="" @submit.prevent="onSubmit">
			<div class="field">
				<label class="label">Username</label>
				<div class="control">
					<input class="input" type="text" placeholder="Your name" v-model="username">
				</div>
			</div>
			<div class="field">
				<label class="label">Email</label>
				<div class="control">
					<input class="input" type="email" placeholder="john.doe@gmail.com" v-model="email" />
				</div>
			</div>
			<div class="field">
				<label class="label">Password</label>
				<div class="control">
					<input class="input" type="password" placeholder="***" v-model="password">
				</div>
			</div>
			<div class="field is-grouped">
				<div class="control">
					<button class="button is-link">Register</button>
				</div>
				<div class="control">
					<button class="button is-text">Cancel</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default{
		data(){
			return{
				email: '',
				username: '',
				password: ''
			}
		},
		methods: {
			onSubmit(){
				const formData = {
					email: this.email,
					username: this.username,
					password: this.password
				}
				console.log(formData);
				axios.post('https://vuechat-952ec.firebaseio.com/users.json', formData)
					.then(res => {
						console.log(res);
					})
					.catch(err => console.error(err));
			}
		}
	}
</script>