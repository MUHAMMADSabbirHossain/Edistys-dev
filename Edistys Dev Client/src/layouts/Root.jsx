import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <header>
                <nav></nav>
            </header>

            <main>
                <h1>Root</h1>
                <Outlet />
            </main>

            <footer></footer>
        </div>
    );
};

export default Root;