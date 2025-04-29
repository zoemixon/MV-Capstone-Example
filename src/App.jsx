import React, { useState } from 'react';
import { MoleculeViewer, FileParser, UploadButton, DensityCloudControls } from 'molecular-visualization-capstone';

const App = () => {
  const [files, setFiles] = useState([]);
  const [molecules, setMolecules] = useState([]);
  const [scene, setScene] = useState(null);

  const handleDeleteMolecule = (idx) => {
    setMolecules(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <UploadButton setFiles={setFiles} />
      <FileParser files={files} onParsed={setMolecules} scene={scene} />
      <DensityCloudControls scene={scene} />
      <MoleculeViewer
        molecules={molecules}
        onDeleteMolecule={handleDeleteMolecule}
        onSceneReady={setScene}
      />
    </div>
  );
};

export default App;

{/* <FileUploader onMoleculesAdded={(newMols) => setMolecules(newMols)} />
        {molecules.length > 0 && <MoleculeViewer molecules={molecules} />} */}
