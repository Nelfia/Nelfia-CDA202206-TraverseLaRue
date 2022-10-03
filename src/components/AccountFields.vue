<template>
    <div class="fields" v-if="fields">
        <div class="field" v-for="(element, key) in fields">
            <label :for="element.name">{{ element.name | capitalize }}</label>
            <input :type="(typeof element.value === 'string' ? 'text' : 'number')" :name="element.name" :id="key"
                :placeholder="element.name" :v-model="localCurrentUser + '.' + key"
                :style="{'border-color': isValid(element) ? 'green' : 'red'}">
        </div>
    </div>
</template>

<script>

import { store } from '../store';

export default {
    props: {
        fields: Object
    },
    data() {
        return {
            store,
            localCurrentUser: {}
        }
    },
    filters: {
        capitalize(value) {
            if (value) {
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    },
    methods: {
        isValid(element) {
            if (typeof element.value === 'string') {
                if (element.name === 'ville') return (element.value == '' || element.value.length >= 1)
                else if (element.name === 'codePostal') return (element.value == '' || element.value.length == 5)
                else if (element.name === 'mobile') return (element.value.length == 10 || element.value == '')
                else return element.value.length >= 3
            } else {
                if (element.name == 'age') return (element.value >= 15)
            }
        }
    },
    watch: {
        fields: {
            handler: function (newLines, oldLines) {
                if (JSON.stringify(newLines) !== JSON.stringify(oldLines)) {
                    this.localCurrentUser = JSON.parse(JSON.stringify(store.currentUser))
                }
            },
            deep: true
        }
    }
}

</script>

<style>
.fields {
    display: flex;
    gap: 10px;
    flex-direction: column;
}

::placeholder {
    color: lightgrey;
}

.field {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

label {
    margin-right: 1rem;
}
</style>