class Museum{
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
      let piece1 = new Piece("./img/bustoNefertiti.jpg", "Se trata de una de las obras maestras conservadas del arte egipcio y realizada en 1345 a.C. Fue hallada en Amana, una región situada en la ribera oriental del Nilo, por el arqueólogo Ludwig Borchardt en 1912 y conducida a Berlín, donde se exhibe en el Neues Museum. Desde hace unas décadas, existe un debate en torno a la legalidad de su adquisición. Egipto ha reclamado en varias ocasiones la repatriación de la escultura policromada.");
      this.pieces.push( piece1 );
      ;
    }
  }