import React, { useEffect, useState } from "react";
import axios from "axios";



const MemeGen = () => {
  const [allMemes, setAllmemes] = useState();
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
  async function getMemes() {
    try {
      const memes = await axios.get("https://api.imgflip.com/get_memes");
      setAllmemes(memes.data.data.memes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMemes();
  }, []);


  const MemeGen = () =>{
    let randomNumber = Math.floor(
        Math.random () * allMemes.length
    )
    console.log(allMemes);
    setRandomImg(allMemes[randomNumber].url); 
  }

  console.log(allMemes);
  return (
    <div>
      <h1>Meme Generator</h1>

      <div>
          <img src={randomImg}></img>
      </div>
      <div>
          <button type="button" onClick={() => MemeGen()}>Generar</button>
      </div>
    </div>
  );
};
export default MemeGen;
