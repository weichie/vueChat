<template>
	<ul class="chatlist">
		<li>
			<small>15/01</small>
			<strong>Weichie</strong>
			<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis praesentium aliquam nemo, enim cupiditate eius quasi et autem blanditiis sed quia.</span>
		</li>
	</ul>
</template>

<script>
	import axios from 'axios'

	export default{
		data(){
			return{
				
			}
		},
		created(){
			axios.get('https://vuechat-952ec.firebaseio.com/users.json')
				.then(res => console.log(res))
				.catch(err => console.error(err));
		}
	}
</script>