import React, { useState } from 'react';
import { MoleculeViewer } from 'molecular-visualization-capstone'; 
import { FileParser } from 'molecular-visualization-capstone';
// import { UIPanelsOnly } from 'molecular-visualization-capstone';
import { UploadButton } from 'molecular-visualization-capstone';

const App = () => {
  const [files, setFiles] = useState([]);
  const [molecules, setMolecules] = useState([]);

  const handleDeleteMolecule = (idx) => {
    setMolecules(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <UploadButton setFiles={setFiles} />
      <FileParser files={files} onParsed={setMolecules} />
      <MoleculeViewer
        molecules={molecules}
        onDeleteMolecule={handleDeleteMolecule}
      />
    </div>
  );
};

export default App;

{/* <FileUploader onMoleculesAdded={(newMols) => setMolecules(newMols)} />
        {molecules.length > 0 && <MoleculeViewer molecules={molecules} />} */}
