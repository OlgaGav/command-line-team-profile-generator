function generateCss(lightest, ligth, dark, darkest) {
  return `
  :root{
    --first: ${lightest};
    --second: ${ligth};
    --third: ${dark};
    --forth: ${darkest};
     }
  
     body {
        color: var(--forth)
      }
      
      .background {
        background: var(--first);
      }
      
      .card-deck {
          padding: 0 2rem;
          justify-items: center;
        }
      
      .card-header {
        background: var(--third);
        color: var(--first);
      }
      
      .jumbotron {
        background: #343148FF;
        color: var(--first);
        text-align: center;
        padding: 1.5rem;
        border-radius: 0rem;
      }
      
      .list-group-item {
        background: var(--first);
      }
      
      .card {
        background-color: var(--second);
        flex: 0 1 20% !important;
        margin: 1rem !important;
        -webkit-box-shadow: 0px 10px 13px -7px #000000,
          5px 5px 15px 5px rgba(0, 0, 0, 0);
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
      }`;
}

module.exports = generateCss;
