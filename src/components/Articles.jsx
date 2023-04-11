import { useState } from "react"

export default function Articles ( {articles} ) {
    const [ articulos ] = useState(articles.sort((a,b) => { return a.upvotes - b.upvotes}))
    const [ update, setUpdate ] = useState('')

    return (
        <>
        <div>
            <header style={{margin: '10rem auto 1rem'}}>
                <span style={{margin: '0 1rem'}}>SortBy</span>
                <button style={{margin: '0 1rem', backgroundColor:'#059669', color:'white', border: '#059669', padding: '0.3rem 1rem'}} onClick={() => setUpdate('upvotes')}>Most Upvoted</button>
                <button style={{margin: '0 1rem', backgroundColor:'#059669', color:'white', border: '#059669', padding: '0.3rem 1rem'}}  onClick={() => setUpdate('recent')}>MostRecent</button>
            </header>
            <table style={{margin: 'auto'}}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    update === '' ? articulos.map((el, index) => (
                        <tr data-testid="article" key={index}>
                            <td data-testid="article-title">{el.title}</td>
                            <td data-testid="article-upvotes">{el.upvotes}</td>
                            <td data-testid="article-date">{el.date}</td>
                        </tr>      
                    )) 
                    : update === 'upvotes' ? articulos.sort((a, b) => { return b.upvotes - a.upvotes}).map((el, index) => (
                        <tr data-testid="article" key={index}>
                            <td data-testid="article-title">{el.title}</td>
                            <td data-testid="article-upvotes">{el.upvotes}</td>
                            <td data-testid="article-date">{el.date}</td>
                        </tr>      
                    )) : articulos.sort((a, b) => { return new Date(b.date) - new Date(a.date) }).map((el, index) => (
                        <tr data-testid="article" key={index}>
                            <td data-testid="article-title">{el.title}</td>
                            <td data-testid="article-upvotes">{el.upvotes}</td>
                            <td data-testid="article-date">{el.date}</td>
                        </tr>      
                    )) 
                }
                </tbody>
            </table>
        </div>
        </>
    )
}