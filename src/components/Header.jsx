import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={logoImg}
        alt="Lampadina con occhi a forma di atomi, il simbolo di react"
      />
      <h1>ReactQuiz</h1>
    </header>
  );
}
