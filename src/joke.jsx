import React from "react";
function Joke({ data }) {
  console.log(data);
  //   {
  //     "data": {
  //         "error": false,
  //         "category": "Programming",
  //         "type": "single",
  //         "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
  //         "flags": {
  //             "nsfw": false,
  //             "religious": false,
  //             "political": false,
  //             "racist": false,
  //             "sexist": false,
  //             "explicit": false
  //         },
  //         "id": 184,
  //         "safe": false,
  //         "lang": "en"
  //     }
  // }
  return <h1 className="mt-10 text-1xl lg:text-3xl joke-font">{data.joke}</h1>;
}

export default Joke;
