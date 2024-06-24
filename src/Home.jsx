
import HeroSection from './HeroSection';

export default function Home() {
    return (
        <div style={{
            backgroundImage: "url('https://img.freepik.com/free-vector/cat-lover-pattern-background-design_53876-100662.jpg')",
            backgroundPosition: "center 80%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "35rem",
            boxSizing: "border-box",
            overflowY: "hidden"
        }}>

            <HeroSection />
        </div>
    )
}