import Container from './Container';

export default function Footer() {
  return (
    <Container>
      <footer className="text-center my-5">
        <p className="text-xs text-gray-400">
          created by <a href="https://github.com/Tzzent" target="_blank" rel="noreferrer" className="text-gray-700 underline">@Tzzent</a> - devChallenges.io
        </p>
      </footer>
    </Container>
  )
}