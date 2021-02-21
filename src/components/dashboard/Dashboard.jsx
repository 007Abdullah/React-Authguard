
import { useGlobalState, useGlobalStateUpdate } from "./../../globalContext/globalContext";

function Dashboard() {

    const globalState = useGlobalState();
    const setGlobalState = useGlobalStateUpdate();


    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={() => {
                setGlobalState(prev => ({
                    ...prev, darkTheme: !prev.darkTheme
                }))
            }}>Toggle</button>
            {'===>' + JSON.stringify(globalState)}

            <br />
            <p>this is a protexted route</p>

        </>
    )
}

export default Dashboard