import React, { createContext, useState, ReactNode } from 'react';
type Scene = {
    id: string;
    description: string;
    cost: string;
    stock: string;
  };

  type SceneContextType ={
    scenes: Scene[];
    addScene: (description: string, cost: string, stock: string)=> void;
    updateScene:(id:string , updatedScene:Partial<Scene>)=> void;
    deleteScene:(id: string) => void; 
  };

  type SceneProviderProps = {
    children: ReactNode;
  };

  export const SceneContext = createContext<SceneContextType | undefined>(undefined);

  export const SceneProvider: React.FC<SceneProviderProps>= ({children})=>{
    const [scenes, setScenes] = useState<Scene[]>([
        {id:'1', description:'',cost:'',stock:''},
        {id:'2', description:'',cost:'',stock:''},
        {id:'3', description:'',cost:'',stock:''},
        {id:'4', description:'',cost:'',stock:''},
        {id:'5', description:'',cost:'',stock:''},
    ]);

    const addScene = (description: string,cost: string,stock:string )=>{
        const newScene: Scene ={
            id:(scenes.length + 1).toString(),
            description,
            cost,
            stock,
        };
        setScenes(prevScenes => [...prevScenes, newScene]);
    };
    const updateScene = (id: string, updatedScene: Partial<Scene>) => {
        setScenes(prevScene => prevScene.map(scene => (scene.id === id ? { ...scene, ...updatedScene } : scene)));
      };
    
      const deleteScene = (id: string) => {
        setScenes(prevScene => prevScene.filter(scene => scene.id !== id));
      };
      return(
        <SceneContext.Provider value={{scenes, addScene, updateScene,deleteScene}}>
            {children}
        </SceneContext.Provider>
      );
  };