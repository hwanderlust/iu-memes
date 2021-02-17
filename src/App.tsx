import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { CAPTIONS_COLLECTION } from "./firestore";
import './App.css';

interface CaptionData {
  imgId: string;
  text: string;
  createdAt: string;
}

interface CaptionSaved extends CaptionData {
  id: string;
}

const query = CAPTIONS_COLLECTION.orderBy("createdAt");
const newCaption: CaptionData = { imgId: "asdf2", text: "test test", createdAt: new Date().toString(), };
CAPTIONS_COLLECTION.add(newCaption);

function App() {
  const [captions, loading, error] = useCollectionData(query, { idField: "id" });

  console.debug(`captions`, captions);
  console.debug(`loading`, loading);
  console.debug(`error`, error);

  return (
    <div className="App">
      {(captions as Array<CaptionSaved> | undefined)?.map(caption => <Meme {...caption} key={caption.id} />)}
    </div>
  );
}

function Meme(props: CaptionSaved) {

  return (
    <div>
      <h1>{props.text}</h1>
      <p>{props.createdAt}</p>
    </div>
  );
}
export default App;
