<template>
    <header>
        <div id="site-header"><b>TraverseLaRue</b></div>
        <nav>
            <li>
                <router-link to="/">Mur</router-link>
            </li>
            <li>
                <router-link to="/account">Mon compte</router-link>
            </li>
            <li>
                <router-link to="/mailbox">Messagerie</router-link>
            </li>
        </nav>
        <div id="navPseudo"><b>{{ (store.currentUser.civility.pseudo.value && store.currentUser.civility.pseudo.value !== "" ) ?
        store.currentUser.civility.pseudo.value : store.currentUser.civility.firstName.value }}</b></div>
    </header>
</template>

<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<style>

header {
    background-color: #ccc;
    box-shadow: 0px 2px 5px lightgrey;
    display: flex;
    flex-direction: row;
    padding: 1rem 2rem;
}

#site-header{
    font-size: 1.2rem;
    letter-spacing: -1px;
    text-shadow: -5px 2px 6px grey;
}

nav {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 2rem;
    padding: 0.5rem 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: -10px;
}

nav a {
    text-decoration: none;
    color: #424040;
}

.router-link-exact-active {
    text-decoration: underline;
    color: #424040;
}

#navPseudo {
    left: 2rem;
}
</style>