
import HeroSection from './HeroSection';
import NavBar from './NavBar';

export default function Home() {
    return (
        <div style={{
            backgroundImage: "url('https://img.freepik.com/free-vector/cat-lover-pattern-background-design_53876-100662.jpg')",
            backgroundPosition: "center 80%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            boxSizing: "border-box",
            overflowY: "hidden"
        }}>
            <NavBar />
            <HeroSection />
        </div>
    )
}