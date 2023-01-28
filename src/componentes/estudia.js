import amir from './icons/amir.png';
import exam from './icons/exam.png';
import audio from './icons/audio.svg';
import guiasminsal from './icons/guiasminsal.jpg';
import mega from './icons/mega.png';
import drguevara from './icons/drguevara.png';
import youtube from './icons/youtube.svg';
import fdemedicina from './icons/fdemedicina.png';



export default function Estudia(){
    return(
       <div className="container">
         <section className="layer" id="layer-study">
        <nav className="layer-nav max-width-500">
          <ul>
            <li className="mode-mir trigger-layer" role="button" data-layername="uCatolica-topics" data-layertitle="Areas de estudio">
              <img className="icon" alt='icon' src={fdemedicina} />
              <h3>Resumenes Facultad de medicina Universidad de Chile</h3>
            </li>
            <li className="mode-mir trigger-layer" role="button" data-layername="mir-topics" data-layertitle="Areas de estudio">
              <img className="icon" src={amir} alt='icon'  />
              <h3>Manual Mir 12da edición</h3>
            </li>
            <li className="openInNewTab" data-href="https://drive.google.com/file/d/1sy5cjPPXvS34O5vm1x-MiTe3vi8c2f8K/view?usp=sharing">
              <img className="icon" src={audio} alt='icon' />
              <h3>Audios</h3>
            </li>
            <li role="button" className="openInNewTab" data-href="https://www.mediafire.com/file/8uog9j0yusjcjy3/Gu%25C3%25ADas_Cl%25C3%25ADnicas_Minsal.zip/file">
              <img className="icon" src={guiasminsal} alt='icon'/>
              <h3>Guias clinicas Minsal</h3>
            </li>
            <li className="openInNewTab" data-href="https://www.mediafire.com/file/jm59zcihennx9w0/Pruebas_Eunacom.zip/file">
              <img className="icon" src={exam} alt='icon'/>
              <h3>Examenes mas recientes</h3>
            </li>
            <li className="openInNewTab" data-href="https://mega.nz/folder/PwQARD5A#3_UFYw4kT_aLvu_zVz3E0Q">
              <img className="icon" src={mega} alt='icon'/>
              <h3>Material extra</h3>
            </li>
            <li className="openInNewTab" data-href="https://www.mediafire.com/file/uysj2eollij0vb6/dr_Guevara.zip/file">
              <img className="icon" src={drguevara} alt='icon'/>
              <h3>Resumenes Dr Guevara</h3>
            </li>
            <li className="openInNewTab" data-href="videos/index.html">
              <img className="icon" src={youtube} alt='icon'/>
              <h3>Videos Dr Guevara</h3>
            </li>
          </ul>
        </nav>
        <div className="openInNewTab txt-center" data-href="https://www.drguevara.cl">
          <h3>*Autoria Dr Guevara</h3>
          <p>Más información </p>
        </div>
      </section>
       </div>
    );
}