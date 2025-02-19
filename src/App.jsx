import QuizApp from "./components/QuizApp";
function App() {
  
  return (
    <>
      <QuizApp
        title = "Static Quiz App"
        projectname = "Project name: quiz-app"
        quiz1 = "What is the capital of France?"
        answer1 = "Berlin"
        answer2 = "Madrid"
        answer3 = "Paris"
        answer4 = "Lisbon"

        quiz2 = "Who developed ReactJS?"
        answer5 = "Google"
        answer6 = "Facebook"
        answer7 = "Microsoft"
        answer8 = "Apple"

        quiz3 = "Which programming language is used for React?"
        answer9 = "Python"
        answer10 = "Java"
        answer11 = "Javascript"
        answer12 = "C++"
      />
    </>
  )
}

export default App