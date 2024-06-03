import { LevelContext } from "./LevelContext";
export default function Section({ children }) {
    return (<>
        <LevelContext.Provider value={1}>
        
        </LevelContext.Provider>
      <section className="section" >
        
       <h1>Section</h1>
      </section>
      </>
    );
  }