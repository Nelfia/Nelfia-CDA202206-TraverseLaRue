<template>
    <div>
        <div class="conversation" v-for="conversation in conversations">
            <h2>{{ conversation.title }}</h2>
            <div class="message" v-for="message in conversation.messages">
                <p>{{ getAuthorFullName(message.author) }} - {{ message.sentDate }}</p>
                <p>{{ message.textContent}}</p>
            </div>
        </div>        
    </div>
</template>

<script>
import { store } from '../store'

    export default {
        data(){
            return {
                store,
                conversations: [],
                localUsers: []
            }
        },
        created() {
            fetch('../../public/messages.json')
            .then(response => response.json())
            .then(data => {
                this.conversations = data
            }),
            fetch('/public/users.json')
            .then(response => response.json())
            .then(data => {
                this.localUsers = data
            })
        },
        methods: {
            getAuthorFullName(userId) {
                let user = this.localUsers.find(user => user.id == userId)
                if(user) return user.civility.firstName + ' ' + user.civility.lastName                
            }
        }
    }
</script>

<style>
    .conversation {
        width: 80vw;
        min-height: 2rem;
        margin-bottom: 0.5rem;
    }
    .conversation h2 {
        background-color: #ffffff;
        padding: 0.5rem 2rem;
    }
    .message {
        border-top: 2px solid #ffffff;
    }
</style>