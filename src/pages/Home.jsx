import Header from './Header.jsx';
import Footer from './Footer.jsx';


function Home () {

    const articles = [
        {
          title: "Article 1",
          price: 10,
          isPublished: true,
        },
    
        {
          title: "Article 2",
          price: 20,
          isPublished: false,
        },
    
        {
          title: "Article 3",
          price: 30,
          isPublished: true,
        },
    
        {
          title: "Article 4",
          price: 40,
          isPublished: false,
        },
    
        {
          title: "Article 5",
          price: 50,
          isPublished: true,
        },
    
        {
          title: "Article 6",
          price: 60,
          isPublished: false,
        },
    
        {
          title: "Article 7",
          price: 70,
          isPublished: true,
        },
    
        {
          title: "Article 8",
          price: 80,
          isPublished: false,
        },
    
        {
          title: "Article 9",
          price: 90,
          isPublished: true,
        },
    
        {
          title: "Article 10",
          price: 100,
          isPublished: false,
        },
      ];

                   // Les variables sont travaillées en dehors du return de la fonction qui retourne le js en html
                  // Je dois récupérer les 3 derniers articles du tableau
                  //  retourne les articles qui sont publiés
        const publishedArticles = articles.filter((things) => {
             return (things.isPublished=== true);
         });
                   // récupère les 3 derniers articles
        const finalArticles = publishedArticles.slice(-3);

    return (        
      <>
      <Header />
        <main className="home">
          {/* afficher les articles : récupèrer les 3 derniers articles publiés et les afficher  */}
            {finalArticles.map((article) => {
                return (      
                        <article className="App">
                            <h2>{article.title}</h2>
                            <p>{article.price} €</p>
                        </article>                                    
                );
            })}
        </main>
        <Footer />
        </>
    );
}
export default Home;