const Projets = {
    projets: [
        { number: 1, titre: "Fermeture des bars", description:'tata'},
    ],
    all: function() {return this.projets},
    get: function(id) {
        const isProjet = p => p.number === id
        return this.projets.find(isProjet)
    }
}


export default Projets