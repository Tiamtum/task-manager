import NavBar from "../components/NarBar/navbar.component"

export default function Root() {
    return(        
        <main>
        <NavBar text="Task Manager" buttonText="Contact" />
        <h1>Landing Page</h1>
        <a href="/login">login</a>
        </main>       
    );
  }