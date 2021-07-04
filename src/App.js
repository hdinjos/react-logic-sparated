// import QualitySelector from "./pages/QualitySelector";
import styled, { css, createGlobalStyle } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  text-align: center;
`;

//adapting base on props;
const PropsBtn = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin-bottom: 1em;
  margin-right: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// //extending styling
// the other approach styled("button")
const CustomBtn = styled("button")`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin-bottom: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin-left: 1em;
  text-decoration: none;

  &:active {
    background: black;
  }
`;

const TomatoBtn = styled(CustomBtn)`
  color: tomato;
  border: 2px solid tomato;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background-color: papayawhip;
  border: none;
  border-radius: 3px;
  outline: none;
`;

// Pseudoelements, pseudoselectors, and nesting
const Thing = styled.div.attrs(() => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red;
  }

  &:active {
    color: green;
  }

  & ~ & {
    background: tomato;
  }

  & + & {
    background: lime;
  }

  &.something {
    background: orange;
  }

  .something-else & {
    border: 1px solid;
  }
`;

const NewThing = styled.div`
  color: blue;

  .something {
    border: 1px solid;
    display: block;
  }
`;

const WithThing = styled.div`
  && {
    color: blue;
  }
`;

const GlobalStyle = createGlobalStyle`
  div${WithThing} {
    color: red;
  }
`;

//attaching addtional props
const NewInput = styled.input.attrs((props) => {
  return {
    type: "text",
    size: props.size || "1em",
  };
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// Overriding .attrs
const InputOver = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const PasswordInputOver = styled(InputOver).attrs((props) => ({
  type: "password",
}))``;

function App() {
  return (
    <div>
      {/* <QualitySelector /> */}
      <Container>
        <Button>Click</Button>
        <Button primary>Click</Button>
        <p style={{ margin: "5px" }}>adapting base on props</p>
        <PropsBtn primary>HALO GAIS</PropsBtn>
        <PropsBtn>HALO GAIS</PropsBtn>
        <p style={{ margin: "5px" }}>extending styling</p>
        <CustomBtn>Halo Bosq</CustomBtn>
        <TomatoBtn>Tomato Btn</TomatoBtn>
        <p style={{ margin: "5px" }}>navigate wiht link</p>
        <CustomBtn>Normal Button</CustomBtn>
        <CustomBtn as="a" href="https://google.com">
          Link to google
        </CustomBtn>
        <TomatoBtn as="a" href="#">
          To Google Stop
        </TomatoBtn>
        <p style={{ margin: "5px" }}>pass props</p>
        <Input defaultValue="ini inputan" type="text"></Input>
        <Input
          defaultValue="ini input yang kedua"
          type="text"
          inputColor="rebeccapurple"
        ></Input>
        <p style={{ margin: "5px" }}>
          Pseudoelements, pseudoselectors, and nesting
        </p>
        <Thing>AHSIAP BOSQ</Thing>
        <Thing>AHSIAP BOSQ</Thing>
        <Thing className="something">AHSIAP BOSQ</Thing>
        <div>Pretty nice day today.</div>
        <Thing>AHSIAP BOSQ</Thing>
        {/* styling children */}
        <div className="something-else">
          <Thing>selamat pagi gais</Thing>
        </div>
        {/* styling children */}
        <NewThing>
          <label htmlFor="foo-button" className="something">
            mistery button
          </label>
          <button id="foo-button">HALO</button>
        </NewThing>
        <div>
          <GlobalStyle />
          <WithThing>hai hai bosq sini main bareng</WithThing>
        </div>
        <p style={{ margin: "5px" }}>attaching additional props</p>
        <NewInput />
        <NewInput size="2em" />
        <p>Overriding .attrs</p>
        <InputOver />
        <PasswordInputOver />
      </Container>
    </div>
  );
}

export default App;
