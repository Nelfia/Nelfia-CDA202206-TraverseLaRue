import { reactive } from "vue";

export const store = reactive({
    currentUser: {
        id: "u1",
        civility: {
            firstName: {
                name: "prenom",
                value: "Boby"
            },
            lastName: {
                name: "nom",
                value: "Sainclar"
            },
            pseudo: {
                name: "pseudo",
                value: "Bobidyboo"
            },
            age: {
                name: "age",
                value: 23
            }
        },
        contactInfos: {
            mail: {
                name: "adresseMail",
                value: ""
            },
            mobile: {
                name: "telephone",
                value: ""
            },
            cp: {
                name: "codePostal",
                value: "31000"
            },
            city: {
                name: "ville",
                value: "Toulouse"
            }
        },
        currentWorkInfos: {
            currentActivity: {
                name: "activiteActuelle",
                value: ""
            },
            domain: {
                name: "domaine",
                value: ""
            },
            since: {
                name: "dateDebut",
                value: ""
            },
            firm: {
                name: "nomEntreprise",
                value: ""
            },
            location: {
                name: "situationEntreprise",
                value: ""
            }
        },
        worksExperiences: {
            name: "experiencesProfessionnelles",
            value: []
        },
        favoriteCitation: {
            name: "citationFavorite",
            value: ""
        },
        personnalDescription: {
            name: "description",
            value: ""
        },
        formations: {
            name: "formations",
            value: []
        },
        skills: {
            name: "competences",
            value: []
        },
        hobbies: {
            name: "hobbies",
            value: []
        },
        mailBox: {
            name: "messagerie",
            value: []
        },
        posts: {
            name: "mur",
            value: []
        },
        relationships: {
            name: "relations",
            value: []
        }
    },
    users: [],
    posts: [],
    messages: [],
    majDatas() {
        this.users = fetch('/public/users.json')
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(error => console.error(error))
    }
})