

import styles from './styles.module.scss'
export default function Footer()  {
  return (
   <footer className={styles.footer}>
     
      <div  className="socialbtns">
        
        <ul>
          <li><a href="https://www.facebook.com/HelpingXperience-109439071437626" target="_blank" className="fa fa-lg fa-facebook"></a></li>
          <li><a href="https://twitter.com/x_helping" target="_blank" className="fa fa-lg fa-twitter"></a></li>
        </ul>
        
        
      </div>
      <p>Copyright ©  FullStop 2021</p>
  
     </footer>
  )
}