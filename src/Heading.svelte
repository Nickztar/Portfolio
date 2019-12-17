<script>
	import Fluid from "svelte-fluid-header";
	let toggleDrawer;
	function handleBurger(){
		toggleDrawer();
		this.classList.toggle('change');
	}
</script>

<header>
	<Fluid	bind:toggleDrawer duration={350}>
		<div slot="left" class="left">
			<a href="/" class="homeDirect">
				<img id="logoImg" src="../assets/logo_transparent.png" alt="A Pelican with the name Nickztar under it">
				<h2>Nickztar</h2>
			</a>
		</div>
		<div slot="right" class="right">
			<a href="/about" class="links hor">About <i class="far fa-address-card icon abDown"></i></a>
			<a href="/contact" class="links hor">Contact <i class="far fa-paper-plane icon"></i></a>
			<a href="/code" class="links hor">Projects <i class="fas fa-code icon"></i></a>
		</div>
		<div slot="drawer" class="drawer">
			<a href="/about" class="links" id="topDL"><i class="far fa-address-card icon"></i></a>
			<a href="/contact" class="links"><i class="far fa-paper-plane icon"></i></a>
			<a href="/code" class="links"><i class="fas fa-code icon"></i></a>
		</div>
		<div slot="right-collapsed" class="rightCol">
			<div class="burger" on:click={handleBurger}>
				<div class="bar1">
				</div>
				<div class="bar2">
				</div>
				<div class="bar3">
				</div>
        	</div>
		</div>
	</Fluid>
</header>

<style>
	.homeDirect{
		display: flex;
	}
	.homeDirect:hover{
		text-decoration: none;
	}
	h2{
		color: #ffffffd3;
	}
	img{
		padding-top: 2px;
		max-height: 11vh;
	}
	header{
		font-family: 'Ubuntu', sans-serif;
		height: 10vh; 
		background: rgba(49, 32, 32, 0.568); 
		box-shadow: 0px 0px 10px 8px #47474783;
	}
	.rightCol:hover{
		padding: 0;
		margin: 0;
		background: #47474783;
	}
	.burger{
		padding: 7px 8px;
        cursor: pointer;
        display: inline-block;
    }
    .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #fff;
        margin: 6px 0;
        transition: 0.4s;
	}
	.right{
		margin-right: 3vw;
	}
	.drawer{
		background: #47474783;
		border-radius: 5px;
		border: 1px solid #fff;
		display: grid;
		text-align: center;
		float: right;
		width: 51px;
		height: auto;
	}
	.links{
		border-radius: 5px;
		text-align: center;
		padding: 10px 10px;
		text-decoration: none;
		color: #ffffffd3;
	}
	.links:hover{
		background: #8b8a8ad3;
		transition: all 0.2s;
	}
	.hor{
		border-radius: 5px;
	}
	.icon{
		font-size: 1.3rem;
		vertical-align: middle;
	}
	#topDL{
		padding-top: 2vh;
	}
</style>