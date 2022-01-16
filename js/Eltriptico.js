class Triptico{
    constructor(){
      this.pieces = [];
    }
    getPieces(){
      return this.pieces
    }
    setPieces( pieces ){
      this.pieces = pieces;
    }
    initializeGallery(){
      let piece4 = new Piece("/img/tripticoElJardinDeLasDelicias.jpg", "1490 - 1500. Grisalla, Óleo sobre tabla de madera de roble. El Jardín de las delicias es la creación más compleja y enigmática del Bosco. Para Falkenburg, el tema general del Jardín de las delicias es el destino de la humanidad, el mismo que el del Carro de heno (P02052), aunque el Bosco lo visualice de distinta manera, mucho más explícita en la tabla central del Carro de heno que en la del Jardín. Para aproximarnos al significado de la obra, es necesario identificar lo que se representa en cada tabla. En el tríptico cerrado el Bosco reprodujo en grisalla el tercer día de la Creación del mundo, cuando se separaron las aguas de la tierra y se creó el Paraíso terrenal.");
      this.pieces.push( piece4 );
    }
  }

  let triptico = new Triptico();
  triptico.initializeGallery();

const artPiecesTriptico = triptico.getPieces();

function showInfoByClickButtonTriptico(){
  alert( artPiecesTriptico[0].getDescription() )
};
