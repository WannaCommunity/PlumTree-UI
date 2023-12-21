import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'
import plumbob from './plumbob.png'
import thumbsup from './thumbsup.png'
import lifering from './lifering.png'

export default () => {
  return (
    <div>
      <div className={styles.homeBannerImage} />
      <div className='container'>
        <div className={styles.introPanel}>
          <p>Welcome to the plum tree app!</p>
          <p>Create dynamic family trees for your sims legacies.</p>
          <p>Then publish and share your trees for others to see.</p>
        </div>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <img src={plumbob} className={styles.featureImage} width='100' />
            <p>Crafted with Sims in mind we allow to set traits, aspirations and
              other Sims specific details to really help convey your sims colourful
              lives.
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <img src={thumbsup} className={styles.featureImage} width='100' />
            <p>Built to be simple yet flexible so you can easily build and share
              your sims legacy.
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <img src={lifering} className={styles.featureImage} width='100' />
            <p>Need help or have a question? Checkout <Link to='/guides'>our guides</Link>.</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-6'>
            <h2>The Public Gallery</h2>
            <Link className={styles.galleryImage} to='/gallery' />
            <p>Checkout the gallery of trees published by our wonderful users!</p>
            <Link className='btn btn-primary' to='/gallery'>Browse The Gallery</Link>
          </div>
          <div className='col-12 col-md-6'>
            <h2>Guides</h2>
            <Link className={styles.guidesImage} to='/guides' />
            <p>Get up to speed with how to use The Plum Tree with our guides.</p>
            <Link className='btn btn-primary' to='/guides'>Read The Guides</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
