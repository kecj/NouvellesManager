const Model = require('./model');
module.exports =
    class Nouvelle extends Model {
        constructor(categorie,titre,texte,imageUrl,date) {
            super(); 
            this.Categorie = categorie !== undefined ? categorie : "";
            this.Titre = titre !== undefined ? titre : "";
            this.ImageUrl = imageUrl !== undefined ? imageUrl : "";
          
            // this.Id = id !== undefined ? id : "";
            this.Texte = texte !== undefined ? texte : "";
            this.Date = date !== undefined ? date : "";

            // this.setKey("Titre");
            this.addValidator('Titre', 'string');
            this.addValidator('ImageUrl', 'url');
            this.addValidator('Categorie', 'string');
            this.addValidator('Date', 'integer');
            this.addValidator('Texte', 'string');
            // this.addValidator('Id', 'int');
        }
    }