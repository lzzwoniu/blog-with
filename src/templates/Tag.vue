<template>
	<Layout>
		<!-- Page Header-->
		<header class="masthead" style="background-image: url('/img/home-bg.jpg')">
				<div class="overlay"></div>
				<div class="container">
						<div class="row">
								<div class="col-lg-8 col-md-10 mx-auto">
										<div class="site-heading">
												<h1>{{$page.tag.name}}</h1>
												<!-- <span class="subheading">A Blog Theme by Start Bootstrap</span> -->
										</div>
								</div>
						</div>
				</div>
		</header>
		<!-- Main Content-->
		<div class="container">
				<div class="row">
						<div class="col-lg-8 col-md-10 mx-auto">
								<div class="post-preview" v-for="tag in $page.tag.posts" :key="tag.id">
										<g-link :to="'/post/'+ tag.id">
												<h2 class="post-title">{{tag.title}}</h2>
										</g-link>
										<!-- <p class="post-meta">
												Posted by
												<a href="#!">{{edge.node.create_by}}</a>
												on {{edge.node.created_at}}
										</p> -->
										<!-- <p>
											<span v-for="tag in edge.node.tags" :key="tag.id">
												<a href="" >{{tag.name}}</a>
												&nbsp;&nbsp;
											</span>
										</p> -->
									<hr />
								</div>
						</div>
				</div>
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!){
  tag: strapiTag(id:$id){
    id
    name
    posts {
      id
      title
    }
  }
}
</page-query>

<script>
export default {
	name: 'Tag',
};
</script>
<style>
</style>