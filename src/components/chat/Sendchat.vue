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
						<textarea class="textarea" placeholder="Send a message..."></textarea>
					</div>
				</div>
			</div>
		</div>
		<footer class="card-footer">
			<a href="#" class="card-footer-item">Cancel</a>
			<a href="#" class="card-footer-item">Send</a>
		</footer>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				boxTitle: 'Join the conversation!'
			}
		}
	}
</script>