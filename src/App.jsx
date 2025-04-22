import React, { useState } from 'react';
import { MoleculeViewer } from 'molecular-visualization-capstone'; 
import { FileParser } from 'molecular-visualization-capstone';
// import { UIPanelsOnly } from 'molecular-visualization-capstone';
import { UploadButton } from 'molecular-visualization-capstone';

const App = () => {
    const [file, setFile] = useState(null);
    const [molecules, setMolecules] = useState([]);
  
    return (
      <div>
        <UploadButton setFile={setFile} />
        <FileParser file={file} onParsed={setMolecules} />
        <MoleculeViewer molecules={molecules} />
      </div>
    );
  };

export default App;

{/* <FileUploader onMoleculesAdded={(newMols) => setMolecules(newMols)} />
        {molecules.length > 0 && <MoleculeViewer molecules={molecules} />} */}


