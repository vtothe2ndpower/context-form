import Navbar from './components/Navbar';
import Form from './components/Form';
import PageContent from './components/PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </LanguageProvider>
    </ThemeProvider>
  );
}