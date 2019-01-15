<template>
	<header class="main-header">
		<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<router-link class="navbar-item" to="/">
					<strong>vueChat</strong>
				</router-link>

				<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div><!-- ./navbar-brand -->

			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-start">
					<router-link class="navbar-item" to="/">
						Home
					</router-link>
				</div><!-- ./navbar-start -->

				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<router-link class="button is-primary" to="/auth/register">
								<strong>Sign up</strong>
							</router-link>
							<router-link class="button is-light" to="/auth/login">
								Log in
							</router-link>
						</div>
					</div>
				</div><!-- ./navbar-end -->
			</div><!-- ./navbar-menu -->
		</nav><!-- ./navbar -->
	</header>
</template>