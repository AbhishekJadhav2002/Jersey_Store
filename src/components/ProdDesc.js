import React from "react";
import { useParams } from "react-router-dom"

function ProdDesc(props) {

  // useEffect(() =>{
  //   const element_id = props.eid
  // }, [])

  let params = useParams();
  console.log(params)

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden min-h-[calc(100vh-244px-64px)]">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {props.category}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-4">
              {props.prodTitle}Animated Night Hill Illustrations
            </h1>
            <div className="flex mb-4">
              <a
                href="/"
                className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1"
              >
                Description
              </a>
            </div>
            <p className="leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam iligo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.{props.prodDesc}
            </p>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Color</span>
              <span className="ml-auto text-white">Blue</span>
            </div>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-white">Medium</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-white">4</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                $58.00{props.price}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg shadow-xl"
            src="https://thefootballcentral.co/wp-content/uploads/2022/07/Paris-Saint-Germain-Blue-202223-Home-front.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default ProdDesc;
