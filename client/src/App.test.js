import { render, screen } from '@testing-library/react';
const { expect } = require("chai");
// Enzyme.configure({ adapter: new Adapter() });
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Buscador from './components/Buscador/Buscador.js';
import Home from './components/Home/Home.js';
import Cards from './components/Cards/Cards.js';
import Header from './components/User/User.js';
import App from "./App";

// import Home from "./components/Home/Home"

configure({ adapter: new Adapter() })

describe("App", () => {
  let wrapper = shallow(<App />)

  it("should be a function", () => {
    expect(App).to.be.a("function")
  })

  it("should have the component Header", () => {
    expect(wrapper.find("Header"))
  })

  it("should have the component User", () => {
    expect(wrapper.find("User"))
  })

  it("should have the component Cards", () => {
    expect(wrapper.find("Cards"))
  })

  it("should have the component GenreFilter", () => {
    expect(wrapper.find("GenreFilter"))
  })

  it("should have the component Rating", () => {
    expect(wrapper.find("Rating"))
  })

  it("should have the component Searchbar", () => {
    expect(wrapper.find("Searchbar"))
  })

  it("should have the component Botones", () => {
    expect(wrapper.find("Botones"))
  })

  it("should have the component Cardgame", () => {
    expect(wrapper.find("Cardgame"))
  })

  it("should have the component Form", () => {
    expect(wrapper.find("Form"))
  })

});

// describe("Home", () => {
//   let wrapper = shallow(<Home/>)
//   it("should have the component Header", () => {
//     expect(wrapper.find("Header"))
//   })
// });

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe('Buscador', () => {
//   let store
//   const middlewares = []
//   const mockStore = configureStore(middlewares);

//   beforeEach(() => {
//     store = mockStore([]);
//   });

//   it('Debería renderizarse en la ruta "/search"', () => {
//     const wrapper = mount(
//         <Provider store={store}>
//           <MemoryRouter initialEntries={[ '/search' ]}>
//             <App />
//           </MemoryRouter>
//         </Provider>
//     );
//       expect(wrapper.find(Buscador)).toHaveLength(1);
//   });


// });
