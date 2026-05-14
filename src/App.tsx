// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
// import * as http2 from "node:http2";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
import Layout from "./components/Layout";

// type PropsA = {
//   title: string,
//   description: string
// }
//
// type PropsB = {
//   title: string,
//   description: string
// }
//
//
// // UNION
// type Status = "Error" | "Info" | "Warning";
//
// // TUPLES
// type Coordinates = [number, number];
//
// // FUNCTIONS
// type ClickHandler = (event: MouseEvent) => void;
//
// // INTERCECTION
// type Props = PropsA & PropsB
//
// interface PropsTwo {
//   title: string,
//   description: string
// }
//
// interface PropsTwo {
//   price: number,
//   sort: number
// }
//
// // PropsTwo = {title, description, price, sort}
//
// interface PropsThree extends PropsTwo {
//   image: string,
// }
//
// // PropsThree = {title, description, price, sort, image}


function App() {

  return (
    <>
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent />*/}


      {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}
      {/*<ArrowFunctionalComponentWithProps*/}
      {/*  title="Second Title"*/}
      {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur et eveniet id iste odit rem sequi tenetur totam ut, voluptas.*/}
      {/*"/>*/}

      {/*LESSON THREE*/}
      {/*<Layout title="Heading 1">*/}
      {/*  <ArrowFunctionalComponentWithProps*/}
      {/*    title="Second Title"*/}
      {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur et eveniet id iste odit rem sequi tenetur totam ut, voluptas.*/}
      {/*  "/>*/}
      {/*</Layout>*/}

      <Layout addClasses="text-blue-600 bg-gray-100">
        {/*<ArrowFunctionalComponentWithProps*/}
        {/*  title="Second Title"*/}
        {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, deserunt dicta excepturi fugit ipsa modi perferendis quo repellat voluptates."*/}
        {/*/>*/}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, reiciendis.</p>
      </Layout>
    </>
  )
}

export default App
