import { useEffect } from "react";
import { useState } from "react";
import Content from "../components/Content";
import Aside from "../components/Aside";
import Frontend from "../components/Frontend";



export default function HomePage() {
     return (
<div className="side-wrapper">
 
     
        <main className="main-content">
          <div className="aside-wrapper">
          
          
        <Aside/>
                  <div className="main-wrapper">
                  <section className="introsection">
                    <div className="introdiv">
                    <h1 className="introname">Emil Dalhoff Petersen <span className="frontend"><Frontend/></span></h1>
                    <p className="introp">Jeg er en passioneret frontend-udvikler, der trives med at kombinere teknisk ekspertise med kreativitet. Jeg elsker at forme digitale oplevelser fra bunden og skabe noget, der skiller sig ud. Velkommen til min verden af kreativ frontend-udvikling.</p>
                   <button className="buttonhire">HYR MIG HER <img src="src/assets/arrow.svg" alt="arrow" /></button>
                    </div>
                    <img className="img-dev" src="src/assets/web.png" alt="developer" />
                  </section>

                  <section className="aboutme" >
                 
                    <img className="img-me" src="src/assets/emilgron.svg" alt="portrait" />
                    <div className="textabout">
                      <h2 id="aboutme-link">Om Mig</h2>
                      <p>Jeg er en dynamisk og dedikeret 27-årig mand med en passion for multiemediedesign og alt indenfor frontend-udvikling. Jeg vil beskrive mig selv, som en ambitiøs fyr, som er meget resultatorienteret i alt jeg foretager mig. Jeg forsøger hele tiden at udvikle mine færdigheder inden for webdesign og grafisk design. Jeg har en flair for detaljer og en trang til at fordybe mig i opgaver, som jeg påtager mig. Computeren har altid været en del af mit DNA, som senere i mit liv er blevet omdannet til en karrierevej. Jeg nyder at benytte computeren som en konstant kilde til inspiration og innovation. Når jeg ikke er optaget af at skabe digitale løsninger, finder du mig højst sandsynligt nede på Panenka for at se Premier League. Det sociale aspekt er vigtigt for mig, hvor jeg tilbringer mine frie aftener på caféer, samt restauranter. Ved siden af skolen, arbejder jeg på restaurant som tjener, hvilket jeg har gjort i snart 3 år.</p>
                    </div>
                  </section>
                  </div>
                    
                  
                  </div>
                  <div id="skills-link" className="box-text">
                      <h3>Mine Færdigheder</h3>
                      <div className="pbox">
                      <p className="small-p">I min rejse gennem uddannelsen, har jeg fordybet mig i multimediedesign og hvad der følger med. Herunder ses de færdigheder jeg har opbygget, hvor jeg allerede nu er i færd med at blive bedre til endnu flere.</p>
                      </div>
                      <section className ="box-container" >
                      <div className="box">
                        <img src="src/assets/illustration.svg" alt="illustration" />
                      <p>Ved hjælp af Figma og Adobe XD designer jeg brugercentrerede grænseflader, der fusionerer æstetik og brugervenlighed. Jeg arbejder hårdt for at levere tiltalende og effektive brugeroplevelser gennem mine designs.</p>
                      <div className="icon-row">
                      <img src="src/assets/figma-5 1.svg" alt="Figma" />
                      <img src="src/assets/Xd.svg" alt="Xd" />
                      </div>
                      </div>
                      <div className="box">
                      <img src="src/assets/coding.svg" alt="illustration" />
                      <p>Mine kompetencer inkluderer HTML5, CSS3 og JavaScript til at udvikle funktionelle websider. Jeg udforsker også React samt Wordpress for at bygge moderne og interaktive webapplikationer & brugergrænseflader. </p>
                      <div className="icon-row">
                      <img src="src/assets/Html5.svg" alt="html5" />
                      <img src="src/assets/css3.svg" alt="css3" />
                      <img src="src/assets/JS.svg" alt="js" />  
                      <img src="src/assets/Group.svg" alt="react" />    
                      </div>
                      </div>
                      <div className="box">
                      <img src="src/assets/game-development.svg" alt="illustration" />
                      <p>Jeg er en erfaren bruger af Adobe Illustrator, Photoshop & InDesign, og jeg anvender disse færdigheder til at skabe mine egne idéer gennem tegninger og generelt bare grafisk indhold som skaber værdi for mine hjemmesider. Jeg nyder at skabe noget fra bunden, som senere skal vises grafisk på mine slutprodukter. </p>
                      <div className="icon-row">
                      <img src="src/assets/Illustrator.svg" alt="Ai" />  
                      <img src="src/assets/Photoshop.svg" alt="Ps" />  
                      <img src="src/assets/Indesign.svg" alt="Id" />  
                      </div>
                      </div>
                      </section>

                      
                        <section>
                          <h4>Uddannelse</h4>
                          <div className="widebox">
                            <div className="widebox1">
                            <div className="wide">
                            <p>Programmering</p>
                            <div>
                              <p>Hovedområde</p>
                              <p>Jeg lærer primært webudvikling med HTML, CSS og JavaScript. Her har vi især fokus på at komme i dybden på disse samt lave responsive designs til forskellige enheder. Jeg er nu på vej ind i frontend-rammen, som er React og går også i dybden med fejlfindinger og ydeevneoptimering.</p>
                              </div>
                              </div>
                            
                            </div>
                            
                            <div className="widebox2">
                            <div className="wide">
                            <p>Grafisk Design</p>
                            <div>
                              <p>Fagområde 1</p>
                              <p>I Design har vi fokus på designprincipper, layout og farvelære. I min fritid har jeg gjort mig klog på brugen af diverse Adobe-software til grafisk design. Dette benytter vi til at skabe brandidentiteter, samt grafiske elementer som videreføres til mine programmerings opgaver. </p>
                              </div>
                              </div>
                            </div>
                            <div className="widebox3">
                            <div className="wide">
                            <p>UX/UI Design</p>
                            <div>
                              <p>Fagområde 2</p>
                              <p>I UX/UI er der især fokus på brugerundersøgelser, prototyping, informationsarkitektur og brugercentreret design. Dette gør at jeg kan skabe mere brugervenlige hjemmesider. </p>
                              </div>
                              </div>
                            </div>
                            </div>
                            </section>

                            
                              <section id="port-link" className="port-1">
                                <h5>Portfolio</h5>
                                <p>Her kan I udforske mit portfolio, hvor mine spændende projekter tager form. Få indblik i min udvikling inden for frontend-udvikling, grafisk design og UI/UX-design gennem mine tidligere projekter, som reflekterer min rejse. </p>
                                <div className="portbox-container">                                                   
                                <div className="portbox"><img src="" alt="" /></div>
                                <div className="portbox">2</div>
                                <div className="portbox">3</div>
                                <div className="portbox">4</div>
                                <div className="portbox">5</div>
                                <div className="portbox">6</div>
                                <div className="portbox">7</div>
                                <div className="portbox">8</div>
                                <div className="portbox">9</div>
                                </div>
                              </section>
                              
                              
                              <div id="contact-link" className="contact-container">
                              
                             <div className="box-leftholder">
                             <div className="headline">
                              <h6>Dine Kontaktoplysninger</h6>
                              
                              </div> 
                             
        <div className="box-left">
        
            <div className="contact-box">
                <form className="contact-form" action="process_contact.php" method="post">
                    <div className="form-group">
                        <label for="name">Dit Fulde Navn</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label for="email">Din Email</label>
                        <input type="text" />
                        
                    </div>
                    <div className="form-group">
                        <label for="message">Besked</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Send Besked</button>
                </form>
            </div>
        </div>
        </div>
        <div className="box-right">
        <div className="headline">
                              
                              <h6>Mine Informationer</h6>
                              </div>
            <div className="contact-box1"><img src="src/assets/Geography.svg" alt="Geography-icon" />
           <div className="align-text1">
            <p>Land:</p>
            <p>Danmark</p>
            </div>
            <div className="align-text1">
            <p>By:</p>
            <p>Aarhus C</p>
            </div>
            <div className="align-text1">
            <p>Gade:</p>
            <p>Ryesgade 8</p>
            </div>
            </div>
            <div className="contact-box2"><img src="src/assets/Email.svg" alt="Phone-icon" />
            <div className="align-text1">
            <p>Email:</p>
            <p>Emildalhoff@hotmail.com</p>
            </div>
            <div className="align-text1">
            <p>LinkedIn:</p>
            <p>@EmilDalhoff</p>
            </div>
            <div className="align-text1">
            <p>Instagram:</p>
            <p>@Emildalhoffp</p>
            </div>
            </div>
            <div className="contact-box3"><img src="src/assets/Phone.svg" alt="Phone-icon" />
            <div className="align-text1">
            <p>Mobil.Nr:</p>
            <p>40337472</p>
            </div>
            <div className="align-text1">
            <p>Facebook:</p>
            <p>Facebook.com/Emildalhoff</p>
            </div>
            </div>
        </div>
    </div>
                      
                      </div>
                  
                  </main>
                 
                  </div>
              );




            
        }

