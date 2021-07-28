
const initialState = {
  games: [],
  gamesSort:[],
  gamesBD:[],
  genres:[],
  nextPrev:{},
  filter:[],
  gamesSearch:[],
  ratingState:[],
  gameDetail:{},
  isLogging: { ratingComp:false, filterComponent:false , userComp: false},
  ordenar: false,
  page: 1,
  user: false,
  vartodo: []
  
};

const videogames =  (state = initialState, action) => {
  
    switch(action.type) {
      // Aca va tu codigo;
      
      case 'GAMES_ALL':
        return {
          ...state,
          games:action.payload.data,
          page: action.payload.page || 1

        };

      case 'GAMES_ALL_DB':
        return {
            ...state,
            gamesBD:action.payload
        };

      case 'GENRES_ALL':
          // console.log('quiero a F');
        return {
            ...state,
            genres:action.payload
        };

        case 'CREATE_GAME':
        return {
          ...state,
          gamesBD:action.payload
        };

        case 'NEXT_PREVIOUS':
        return {
          ...state,
          nextPrev:action.payload
        };

        // case 'NEXT':
        // return {
        //   ...state,
        //   nextPrev:action.payload,
        //   games: action.payload.results.slice(0,15),
          

        // };

        // case 'PREVIOUS':
        // return {
        //   ...state,
        //   nextPrev:action.payload,
        //   games: action.payload.results.slice(0,15),
          
        // };

        case 'FILTER':

        return {
          ...state,
          vartodo:state.games,
          filter:state.games.filter((e) =>e.genres.includes(action.payload)),
          // filter: state.games.filter((p,i) => p.genres[i].name == action.payload)
          isLogging:{ratingComp:false , filterComponent:true, userComp: false}
        };

        case 'BUSCAR':
         
        return {
          ...state,
          gamesSearch:action.payload,
        };

        case 'ALL':
        // let arrTodos=[...state.games];
          return {
            ...state,
            games:state.vartodo,
           
            isLogging:{ratingComp:false , filterComponent:false, userComp: false},
            ordenar:false
            // page: action.payload.value

          };
          
        case 'RATING':
        
           let arr = state.games.filter((e) => Math.floor(e.rating)===parseInt(action.payload));
          // .filter((e) => console.log(Math.floor(e.rating)));
          // .filter((e) => Math.floor(e.rating)==parseInt(action.payload))
          return {
            ...state,
            ratingState:arr,
            isLogging:{ filterComponent:false , ratingComp:true, userComp: false}
          };

          // case 'DETALLE_JUEGO':
          // return {
          //   ...state,
          // gameDetail:action.payload
          // };

          case 'DETALLE_JUEGO':
            console.log('reducer detalle', action.payload)
          return {
            ...state,
          gameDetail:state.games.find(e => e.id === parseInt(action.payload))
          };

          case 'USER':
            return {
              ...state,
              isLogging:{ filterComponent:false , ratingComp:false, userComp: true}
            };

          case 'ORDEN':
         
          let arrSort=[...state.games];
          
          if (arrSort.length > 2) { 
            arrSort = arrSort.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              // a must be equal to b
              return 0;
            });
          }

          // console.log('array ordenado', arrSort);

            return {
              ...state,
            gamesSort:arrSort,
            ordenar: action.payload,
            
            };

          default:
            return state;
        
    }; 
  };

export default videogames;
