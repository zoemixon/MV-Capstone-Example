import React, { useState } from 'react';
import { MoleculeViewer, FileParser, UploadButton } from 'molecular-visualization-capstone';

const App = () => {
  
  const [file, setFile] = useState(null);
  const [molecules, setMolecules] = useState([]);
  const [scene, setScene] = useState(null);

  return (
    <div>
      <UploadButton setFile={setFile} />
      <MoleculeViewer molecules={molecules} onSceneReady={setScene} />
      <FileParser file={file} onParsed={setMolecules} scene={scene} />
    </div>
  );
};
export default App;

{/* <FileUploader onMoleculesAdded={(newMols) => setMolecules(newMols)} />
        {molecules.length > 0 && <MoleculeViewer molecules={molecules} />} */}
