import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import {useCart} from '../hooks/use-cart'

export default function Home() {

  console.log("getProductsList", )
  const {addToCart, products=[]  } = useCart()
  return (
    <div className={styles.container}>
      <Head>
        <title>NFt-Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/nfttab.png" />
      </Head>

      <main className={styles.main}>
        <ul className={styles.cards}>
          {products && products.map(product=>{
            const{title, price, description, image, id} = product
            return (
              <li key={id}  className={styles.card}>
                <Link href={`/products/${id}`}>
                  <a>
                  <img src={image} alt={title} />
                  <h2>{title}</h2>
                  <p className={styles.price}>Rs.{price}</p>
                  <p>{description}</p>
                  </a>
                  </Link>
                  <p><button className={styles.button} onClick={()=>addToCart({id})
                    
                    }>Add to Cart</button>
                  </p>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          It's a project website NFt-store
        </a>
      </footer>
    </div>
  )
}