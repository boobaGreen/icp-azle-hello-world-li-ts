import { useEffect, useState } from 'react'



function App() {
  const [db, setDb] = useState<any>({});
  useEffect(() => {
    getDb();
}, []);

const getDb = async () => {
    setDb('Loading...');

    try {
        const response = await fetch(
            `${import.meta.env.VITE_CANISTER_ORIGIN}/db`
        );
        const responseJson = await response.json();
        setDb(responseJson);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const updateDb = async () => {
    setDb('Loading...');

    try {
        const response = await fetch(
            `${import.meta.env.VITE_CANISTER_ORIGIN}/db/update`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    hello: 'world'
                })
            }
        );
        const responseJson = await response.json();
        setDb(responseJson);
    } catch (error) {
        console.error('Error updating data:', error);
    }
};


  return (
    <div>
        <h1>Azle Hello World</h1>
        <div>db: {JSON.stringify(db)}</div>
        <br />
        <div>
            <button onClick={getDb}>Test /db</button>
        </div>
        <br />
        <div>
            <button onClick={updateDb}>Test /db/update</button>
        </div>
    </div>
);
}

export default App



