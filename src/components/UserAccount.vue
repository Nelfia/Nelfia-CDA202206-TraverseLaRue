<template>
    <div id="user-account">
            <h2>Identité</h2>
            <account-fields :fields="store.currentUser.civility"></account-fields>

            <h2>Activité</h2>
            <account-fields :fields="store.currentUser.currentWorkInfos"></account-fields>

            <h2>Coordonnées</h2>
            <account-fields :fields="store.currentUser.contactInfos"></account-fields>
            
            <button @click="store.majDatas">Enregistrer</button>
    </div>
</template>

<script>
    import { store } from '../store'
    export default {
        data: function(){
            return {
                store,
                localCurrentUser: {                
                    civility: { 
                        firstName: store.currentUser.civility.firstName,
                    lastName: store.currentUser.civility.lastName,
                    pseudo: store.currentUser.civility.pseudo,
                    age: store.currentUser.civility.age,
                currentActivity: store.currentUser.currentWorkInfos.currentActivity
            },
                firm: store.currentUser.currentWorkInfos.firm,
                adress: store.currentUser.contactInfos.adress,
                cp: store.currentUser.contactInfos.cp,
                city: store.currentUser.contactInfos.city,
                mobile: store.currentUser.contactInfos.mobile,
                mail: store.currentUser.contactInfos.mail}

            }
        }, 
        methods: {
            sendDatas(){
                store.currentUser.civility.firstName = this.firstName
                store.currentUser.civility.lastName = this.lastName
                store.currentUser.civility.pseudo = this.pseudo
                store.currentUser.civility.age = this.age
                store.currentUser.currentWorkInfos.currentActivity = this.currentActivity
                store.currentUser.currentWorkInfos.firm = this.firm
                store.currentUser.contactInfos.adress = this.adress
                store.currentUser.contactInfos.cp = this.cp
                store.currentUser.contactInfos.city = this.city
                store.currentUser.contactInfos.mobile = this.mobile,
                store.currentUser.contactInfos.mail = this.mail
            }
        }
    }
</script>

<style>
    #user-account {
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        color: #7c7a7a;
    }
    #user-account h2 {
        margin-bottom: 0;
    }
    #user-account button {
        margin: 2rem;
        font-family: Poppins, sans-serif;
        font-size: 1rem;

    }
    #user-account input {
        padding: 0.2rem 1rem;
        font-family: Poppins, sans-serif;
        font-size: 1rem;
    }

</style>