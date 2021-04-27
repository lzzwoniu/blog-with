// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
		{
      use: '@gridsome/source-strapi',
      options: {
				apiURL: process.env.GRIDSOME_API_URL,
				// apiURL: 'http://117.50.3.216:1337',
        // apiURL: 'http://127.0.0.1:1337', // 三个问题：1、mysql 数据库需要搞起来 2、strappi 服务必须启动并且有数据，接口公布过开不可用 3、最后是客户端，你本地配置的 hosts 影响了使用 localhost，所以用 127.0.0.1  那现在就好了是吗 那我关闭hosts呢
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["post", "tag"],
				typeName: 'Strapi',
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: 'lzz',
        //   password: '123456'
        // }
      }
    }
  ],
	templates: {
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
		StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
