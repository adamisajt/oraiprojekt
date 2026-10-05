import Header from './components/Header';
import IntroCard from './components/IntroCard';
import Footer from './components/Footer';
import ListSection from './components/ListSection';
import FruitTable from './components/FruitTable';
import ImageSection from './components/ImageSection';
import InfoCard from './components/InfoCard';


import {
  author,
  creationDate,
  fruitTable,
  imageItems,
  importantFacts,
  introduction,
  listGroups,
  mainTitle,
  subtitle,
} from './data/pageData';






function App() {
  return (
    <>
      <main className="container">
        <Header title={mainTitle} subtitle={subtitle} />
        <IntroCard paragraphs={introduction} />
        <InfoCard facts={importantFacts} />
        <ImageSection items={imageItems} />
        <FruitTable rows={fruitTable} />
        <ListSection groups={listGroups} />
      </main>

      <Footer author={author} creationDate={creationDate} />
    </>
  );
}

export default App;