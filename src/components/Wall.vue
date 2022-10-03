<template>
    <div v-if="posts && users" id="posts-container">
        <div class="post" v-for="post in posts">
            <div class="post-header">
                <h2>{{ getFullName(post)}}</h2>
                <p>{{ post.publishedDate }}</p>
            </div>
            <div class="post-container">
                {{ post.textContent }}
            </div>

        </div>
    </div>
</template>


<script>
export default {
    data: function(){
    return {
      posts: [],
      users : []
    }
  },
  created() {
    fetch('./public/posts.json')
            .then(response => response.json())
            .then((data) => {
                this.posts = data
                this.$nextTick()
                console.log(this.posts)
            })
            .catch(error => {
                throw error
            }),
    fetch('./public/users.json')
            .then(response => response.json())
            .then((data2) => {
                this.users = data2
                this.$nextTick()

                console.log(this.users)
            })
            .catch(error => {
                throw error
            })
    },
    methods: {
        getFullName: function (post) {
            let postId = post.author
            const author = this.users.find(user => user.id === postId)
            console.log(author)
            return author.civility.firstName + ' ' + author.civility.lastName
        }
    }
}

</script>



<style>
</style>