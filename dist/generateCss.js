
//--light: #bcdbdf;
//--deck_background: #feffdf;
//--card_background: #40a8c4;
//--dark: #596e79;

function generateCss(light, deckBgr, cardBgr, dark) {
  return `:root{
    --light: ${light};
    --deck_background: ${deckBgr};
    --card_background: ${cardBgr};
    --dark: ${dark};
  }
  
    .background {
        background: var(--deck_background);
    }
  
    .card-header{
        background: var(--card_background);
    }
  
    .jumbotron{
        background: var(--dark);
        color: var(--light);
        text-align: center;
        padding: 1.5rem;
        border-radius: 0rem;
    }
  
    .list-group-item{
        background: var(--light);
    }
  
    .card-deck{
        padding: 1rem;
        justify-items: center;
    }
  
    .card {
        background-color: var(--card_background);
        flex: 0 1 20% !important;
        margin: 1rem !important;
  
    }`;
}