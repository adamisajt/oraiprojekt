import Header from './components/Header';
import IntroCard from './components/IntroCard';
import Footer from './components/Footer';
//import ListSection from './components/ListSection';
//import FruitTable from './components/FruitTable';
//import ImageSection from './components/ImageSection';
//import InfoCard from './components/InfoCard';


import {
  author,
  creationDate,
  //fruitTable,
  //imageItems,
  //importantFacts,
  introduction,
  //listGroups,
  mainTitle,
  subtitle,
} from './data/pageData';


//<ListSection groups={listGroups} />
//<FruitTable rows={fruitTable} />
//<ImageSection items={imageItems} />
//<InfoCard facts={importantFacts} />
function App() {
  return (
    <>
      <main className="container">
        <Header title={mainTitle} subtitle={subtitle} />
        <IntroCard paragraphs={introduction} />
        
      </main>

      <Footer author={author} creationDate={creationDate} />
    </>
  );
}

export default App;